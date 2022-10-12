import React, { useState } from 'react'
import { Options } from '../../types';
import toast from 'react-hot-toast';
import { IChallenge } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import { db, storage } from '../../Firebase/firebase';
import { getDownloadURL, ref, StorageReference, uploadBytes, UploadResult } from 'firebase/storage';
import { doc, setDoc, Timestamp } from 'firebase/firestore';
import { useRouter } from 'next/router';


const levels: Options[] = [
  { label: 'Easy', value: 'easy' },
  { label: 'Moderate', value: 'moderate' },
  { label: 'Difficult', value: 'Difficult' }
];

const useChallenge = () => {
  const router = useRouter();
  const [name, setName] = useState<string>('');
  const [startDate, setStartDate] = useState<Date>(null);
  const [endDate, setEndDate] = useState<Date>(null);
  const [description, setDescription] = useState<string>('');
  const [file, setFile] = useState<File>(null);
  const [value, setValue] = useState<string>(levels[0].value);
  const [preview, setPreview] = useState<string>(null);


  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    var value: string = e.target.value;
    setName(value);
  }

  const handleLevelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  const handleStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    var value: string = e.target.value;
    if (value !== '') {
      var date = new Date(value);
      setStartDate(date);
    }
    console.log('start date selected', date);
  };

  const handleEndDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    var value: string = e.target.value;
    if (value !== '') {
      var date = new Date(value);
      setEndDate(date);
    }
    console.log('end date selected', value);
  };

  const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    var value: string = e.target.value;
    setDescription(value);
  }

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    var file: File = e.target.files[0];
    const url = file ? URL.createObjectURL(file) : '';
    setPreview(url);
    setFile(file);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    // validation
    var flag: number = 0;
    if (name === '') { toast.error('Enter challenge name!!'); flag = 1; }
    if (!startDate) { toast.error('Provide start date!!'); flag = 1; }
    if (!endDate) { toast.error('Provide end date!!'); flag = 1; }
    if (description === '') { toast.error('Provide description!!'); flag = 1; }
    if (!file) { toast.error('Upload Contest image!!'); flag = 1; }

    if (flag === 1) return;

    // first upload the image
    const id: number = uuidv4();
    var url: string;
    try {
      const storageRef: StorageReference = ref(storage, id.toString());
      const uploadResultPromise: Promise<UploadResult> = toast.promise(
        uploadBytes(storageRef, file),
        {
          loading: 'Uploading image....',
          success: <b>Image uploaded! </b>,
          error: <b>Error uploading Image</b>
        }
      );

      await uploadResultPromise;
      url = await getDownloadURL(storageRef);

      // create challenge store
      const challenge: IChallenge = {
        id: id,
        name: name,
        startdate: Timestamp.fromDate(startDate),
        enddate: Timestamp.fromDate(endDate),
        description: description,
        level: value,
        imageURL: url
      }
      const docRef : Promise<void> = toast.promise(
        setDoc(doc(db, `challenges/${id}`), challenge),
        {
          loading: 'Registering event....',
          success: <b>Event registered! </b>,
          error: <b>Error registering event</b>
        }
      );
      await docRef;
      router.back();

    } catch (error) {
      console.log(error);
    }

  }

  return {
    name,
    startDate,
    endDate,
    description,
    file,
    value,
    levels,
    preview,
    handleName,
    handleLevelChange,
    handleStartDate,
    handleEndDate,
    handleDescription,
    handleFile,
    handleSubmit
  }
}

export default useChallenge
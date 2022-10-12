import Image from 'next/image';
import { DropDown } from '..';
import { Page } from '../../Layout';
import { uploadIcon } from '../../public';
import { createStyles } from '../../styles';
import { LayoutProps } from '../../types';
import useChallenge from './useChallenge';
import { Navbar } from '..';


const pageProps: LayoutProps = {
    title: 'Dphi - Create Challenge',
    description: 'Create Challenge/hackathon for Dphi Enthuiasts'
}



const dropDownStyles: React.CSSProperties = {
    width: '15rem',
    height: '2.5rem',
    border: '1px solid #B7B7B7',
    borderRadius: '5px',
    outline: 'none',
    fontFamily: 'Inter'
}


const CreateChallenge: React.FC = () => {
    const {
        levels,
        value,
        name,
        file,
        preview,
        handleName,
        handleLevelChange,
        handleStartDate,
        handleEndDate,
        handleDescription,
        handleFile,
        handleSubmit
    } = useChallenge();

    return (
        <Page {...pageProps}>
            <Navbar />
            <div className={createStyles.title}>Challenge Details</div>
            <div className={createStyles.challenge__wrapper}>
                {/* challenge name */}
                <div className={createStyles.challenge__field}>
                    <div className={createStyles.form__heading}>Challenge Name</div>
                    <input
                        type='text'
                        value={name}
                        className={createStyles.challenge__name__input}
                        onChange={handleName} />
                </div>
                {/* start date */}
                <div className={createStyles.challenge__field}>
                    <div className={createStyles.form__heading}>Start Date</div>
                    {/* custom date picker */}
                    <input
                        onChange={handleStartDate}
                        type='datetime-local'
                        className={createStyles.challenge__name__input} />
                </div>
                {/* end date */}
                <div className={createStyles.challenge__field}>
                    <div className={createStyles.form__heading}>End Date</div>
                    <input
                        onChange={handleEndDate}
                        type='datetime-local'
                        className={createStyles.challenge__name__input} />
                </div>
                {/* description */}
                <div className={createStyles.challenge__field}>
                    <div className={createStyles.form__heading}>Description</div>
                    <textarea placeholder='Describe about the contest...' onChange={handleDescription} spellCheck={false} />
                </div>
                {/* image upload */}
                <div className={createStyles.challenge__field}>
                    <div className={createStyles.form__heading}>Image</div>
                    <label className={createStyles.challenge__image__upload}>
                        <input type='file' accept='image/*' style={{ display: 'none' }} onChange={handleFile} />
                        <span>Upload</span>
                        <Image src={uploadIcon} layout='fixed' alt='upload icon' />
                    </label>
                </div>
                {/* show selected image */}
                <div>
                    {file && <Image src={preview} width={249} height={123} />}
                </div>
                {/* level type */}
                <div className={createStyles.challenge__field}>
                    <div className={createStyles.form__heading}>Level Type</div>
                    <DropDown options={levels} value={value} onChange={handleLevelChange} style={dropDownStyles} />
                </div>
                <button className={createStyles.challenge__submit__button} onClick={handleSubmit}>Create Challenge</button>
            </div>

        </Page>
    )

}

export default CreateChallenge; 

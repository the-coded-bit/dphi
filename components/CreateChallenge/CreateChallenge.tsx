import Image from 'next/image';
import React, { useState } from 'react';
import { DropDown } from '..';
import { Page } from '../../Layout';
import { uploadIcon } from '../../public';
import { createStyles } from '../../styles';
import { LayoutProps, Options } from '../../types';

const pageProps: LayoutProps = {
    title: 'Dphi - Create Challenge',
    description: 'Create Challenge/hackathon for Dphi Enthuiasts'
}

const levels: Options[] = [
    { label: 'Easy', value: 'easy' },
    { label: 'Moderate', value: 'moderate' },
    { label: 'Difficult', value: 'Difficult' }
];

const dropDownStyles: React.CSSProperties = {
    width: '15rem',
    height: '2.5rem',
    border: '1px solid #B7B7B7',
    borderRadius: '5px',
    outline: 'none',
    fontFamily: 'Inter'
}


const createChallenge: React.FC = () => {
    const [value, setValue] = React.useState(levels[0].value);

    const handleChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
        setValue(event.target.value);
    };

    return (
        <Page {...pageProps}>
            <div className={createStyles.title}>Challenge Details</div>
            <div className={createStyles.challenge__wrapper}>
                {/* challenge name */}
                <div className={createStyles.challenge__field}>
                    <div className={createStyles.form__heading}>Challenge Name</div>
                    <input
                        type='text'
                        className={createStyles.challenge__name__input} />
                </div>
                {/* start date */}
                <div className={createStyles.challenge__field}>
                    <div className={createStyles.form__heading}>Start Date</div>
                    {/* custom date picker */}
                    <input
                        type='datetime-local'
                        className={createStyles.challenge__name__input} />
                </div>
                {/* end date */}
                <div className={createStyles.challenge__field}>
                    <div className={createStyles.form__heading}>End Date</div>
                    <input
                        type='datetime-local'
                        className={createStyles.challenge__name__input} />
                </div>
                {/* description */}
                <div className={createStyles.challenge__field}>
                    <div className={createStyles.form__heading}>Description</div>
                    <textarea placeholder='Describe about the contest...' />
                </div>
                {/* image upload */}
                <div className={createStyles.challenge__field}>
                    <div className={createStyles.form__heading}>Image</div>
                    <label className={createStyles.challenge__image__upload}>
                        <input type='file' accept='image/*' style={{ display: 'none' }} />
                        <span>Upload</span>
                        <Image src={uploadIcon} layout='fixed' />
                    </label>
                </div>
                {/* level type */}
                <div className={createStyles.challenge__field}>
                    <div className={createStyles.form__heading}>Level Type</div>
                    <DropDown options={levels} value={value} onChange={handleChange} style={dropDownStyles}/>
                </div>
                <button className={createStyles.challenge__submit__button}>Create Challenge</button>
            </div>

        </Page>
    )

}

export default createChallenge; 

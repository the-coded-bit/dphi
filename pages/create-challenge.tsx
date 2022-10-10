import Image from 'next/image';
import React, { useState } from 'react';
import { DropDown } from '../components';
import { Page } from '../Layout';
import { uploadIcon } from '../public';
import { createStyles } from '../styles';
import { LayoutProps } from '../types';



const pageProps: LayoutProps = {
    title: 'Dphi - Create Challenge',
    description: 'Create Challenge/hackathon for Dphi Enthuiasts'
}


const createChallenge: React.FC = () => {

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
                    <DropDown />
                </div>
                <button className={createStyles.challenge__submit__button}>Create Challenge</button>
            </div>

        </Page>
    )

}

export default createChallenge; 

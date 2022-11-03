import Image from 'next/image';
import React from 'react'
import { FilterButton, ChallengeCard } from '..';
import { searchIcon } from '../../public';
import { homeStyles } from '../../styles';
import { IChallenge } from '../../types';
import useSearch from './useSearch';



const Challenges = ({ data }) => {
    const {serachQuery, searchResult, handleSearch} = useSearch(data);
    return (
        <div>
            {/* search */}
            <section className={homeStyles.search__container}>
                <h2>Explore Challenges</h2>
                <div className={homeStyles.explore}>
                    <div className={homeStyles.search}>
                        <Image src={searchIcon} layout='fixed' alt='search' />
                        <input
                            type='text'
                            placeholder='Search '
                            style={{ height: '100%', width: '100%', outline: 'none', border: 'none', fontFamily: 'Poppins' }} 
                            onChange={handleSearch}/>
                    </div>
                    <FilterButton />
                </div>
            </section>
            <section className={homeStyles.footer__wrapper}>
                {
                    searchResult.map((challenge: IChallenge) => (<ChallengeCard {...challenge}  key={challenge.id}/>))
                }
            </section>
        </div>
    )
}

export default Challenges;
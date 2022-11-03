import React, { useState } from 'react'
import { IChallenge } from '../../types';

const useSearch = (data: IChallenge[]) => {
    // search query
    const [serachQuery, setSerachQuery] = useState<string>('');
    const [searchResult, setSearchResult] = useState<IChallenge[]>(data);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = e.target.value;
        if (value === '') {
            setSearchResult(data);
            return;
        }

        const d: IChallenge[] = data.filter((challenge: IChallenge) => {
            var { name, description } = challenge;
            name.concat(description);
            return name.toLowerCase().includes(value.toLowerCase());
        });
        console.log('search query', value, 'search result', d);

        setSearchResult(d);
        setSerachQuery(value);
    }
    return {
        serachQuery,
        searchResult,
        handleSearch
    }
}

export default useSearch;
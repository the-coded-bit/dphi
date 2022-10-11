import Image from 'next/image';
import React from 'react'
import { downArrowIcon } from '../../public';

const Filter = () => {
    const filterStyles: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffff',
        height: '100%',
        gap: '1rem',
        border: 'none',
        borderRadius: '0.75rem',
        width: '6.875rem',
        cursor : 'Pointer',
        fontFamily : 'Poppins, sans-serif'
    }
  return (
    <button style={filterStyles}>
        <span>Filter</span>
        <div>
            <Image src={downArrowIcon} layout='fixed' alt='down arrow'/>
        </div>

    </button>
  )
}

export default Filter
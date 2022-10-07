import Image from 'next/image';
import React from 'react';
import { navLogo } from '../../public';
import { navStyles } from '../../styles';

const Navbar: React.FC = () => {
    return (
        <nav className={navStyles.nav__container}>
            <Image src={navLogo} layout='fixed' />
        </nav>
    )
}

export default Navbar;

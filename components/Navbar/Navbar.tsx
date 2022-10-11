import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { navLogo } from '../../public';
import { navStyles } from '../../styles';

const Navbar: React.FC = () => {
    return (
        <nav className={navStyles.nav__container}>
            <Link href='/' replace={true}>
                <Image src={navLogo} layout='fixed' style={{ cursor: 'pointer' }} alt= 'navbar logo'/>
            </Link>
        </nav>
    )
}

export default Navbar;

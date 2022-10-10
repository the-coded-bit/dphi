import Head from 'next/head';
import React from 'react'
import { Navbar } from '../components';
import { LayoutProps } from '../types';

const Page : React.FC<{children: JSX.Element[] | JSX.Element, description: string, title : string}> = ({children, description, title}: LayoutProps) => {
  return (
    <main>
        <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <link rel="icon" href="/favico.ico" />
      </Head>
      <Navbar/>
      {
        children
      }
    </main>
  )
}

export default Page;
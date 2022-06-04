import Head from 'next/head';
import { Box, Link } from '@chakra-ui/react';

import Navbar from "./Navbar";
import Footer from './Footer';

const Layout = ({children})=>(
    <>
        <Head>
            <Link href="/">
                <title>Real Estate</title>
            </Link>
            
        </Head>
        <Box maxWidth="1280px" m="auto">
            <header>
                <Navbar/>{/* <Navbar/> */}
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </Box>
    </>
)
export default Layout
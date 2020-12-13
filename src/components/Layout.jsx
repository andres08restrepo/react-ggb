import React from 'react';
import Header from './Header';
import Footer from './Footer';

import '../styles/components/layout.css';

const Layout = ({children}) => {
    return(
        <main className="main">
            <Header />
            {children}
            <Footer />
        </main>
    );
}

export default Layout;

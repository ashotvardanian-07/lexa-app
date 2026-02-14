import Header from './Header/Header.jsx'
import { useState, useEffect } from 'react'
import { MobileContext } from '../context/MobileContext'
import MobileMenu from './Header/MobileMenu/MobileMenu.jsx'

const MainLayout = ({ children }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 991);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <MobileContext.Provider value={isMobile}>
            <Header setMobileMenuOpen={setMobileMenuOpen} />
            {isMobile && <MobileMenu
                mobileMenuOpen={mobileMenuOpen}
            />}
            { children }
        </MobileContext.Provider>
    )
}

export default MainLayout
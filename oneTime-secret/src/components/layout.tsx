import { useEffect, useState } from 'react';
import { Outlet, useLocation } from "react-router-dom";

type Props = {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    
    const [link, setLink] = useState<string>('');
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('/secret')) {
            setLink("/secret/:id")
        } else {
            setLink("/")
        }
    }, [location.pathname])

    return (
        <>
            <Outlet/>
        </>
    );
};

export default Layout;
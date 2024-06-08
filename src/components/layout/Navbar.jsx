import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom"; 
import { ThemeContext } from '../ThemeContext.jsx';

const Navbar = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        console.log('Current theme:', theme);
    }, [theme]);

    function toggleTheme() {
        setTheme(theme === 'dark' ? "light" : "dark");
    }

    return (
        <nav className={`navbar ${theme === 'dark' ? 'bg-dark' : 'bg-success'}`}>
            <Link to="/">
                <h1>
                    <i className="fab fa-github" /> GitHub Finder
                </h1>
            </Link>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <button onClick={toggleTheme} style={{ borderRadius: '5px', width: '50px' }}>
                        {theme}
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

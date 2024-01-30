import { useEffect, useRef, useState } from "react";

import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const Header = () => {
    const refHeader = useRef(null); // el uso de useRef es para poder acceder a un elemento del DOM

    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            refHeader.current.classList.add("bg-dark-blue");
        } else {
            document.documentElement.classList.remove("dark");
            refHeader.current.classList.remove("bg-dark-blue");
        }
    }, [darkMode]);

    return (
        <header className="container mx-auto px-4" ref={refHeader}>
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold uppercase tracking-[0.3rem] text-white">
                    Todo
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <IconSun /> : <IconMoon />}
                </button>
            </div>
        </header>
    );
};

export default Header;

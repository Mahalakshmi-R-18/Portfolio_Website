import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="header flex justify-between items-center px-5 py-4 bg-black text-white font-hero-font">
            <a className="font-bold text-2xl" href="#">MY PORTFOLIO</a>
            <nav className="hidden md:block">
                <ul className="flex space-x-4 text-lg">
                    <li><a href="/">Home</a></li>
                    <li><a href="/#skills">Skills</a></li>
                    <li><a href="/#projects">Projects</a></li>
                    <li><a href="/#resume">Resume</a></li>
                    <li><a href="/#contact">Contact</a></li>
                </ul>
            </nav>
            {toggleMenu && (
                <nav className="block md:hidden">
                    <ul onClick={() => setToggleMenu(false)} className="flex flex-col text-lg mobile-nav space-y-2 bg-secondary p-5 rounded-lg">
                        <li><a href="/">Home</a></li>
                        <li><a href="/#skills">Skills</a></li>
                        <li><a href="/#projects">Projects</a></li>
                        <li><a href="/#resume">Resume</a></li>
                        <li><a href="/#contact">Contact</a></li>
                    </ul>
                </nav>
            )}
            <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden">
                <Bars3Icon className="text-white h-8 w-8" />
            </button>
        </header>
    );
}

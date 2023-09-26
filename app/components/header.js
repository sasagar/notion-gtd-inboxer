"use client";

import BasilNotionOutline from '../components/icons/notion';
import BasilMenuOutline from './icons/menu';

import Hamburger from './hamburger';

import Link from 'next/link';

const Header = () => {
    if (typeof window === 'object') {
        const dialog = document.querySelector('#dialog');
        const menu = document.querySelector('#menu');

        menu.addEventListener('click', () => {
            dialog.showModal();
        });

        dialog.addEventListener('click', (event) => {
            if (event.target === dialog) {
                dialog.close('cancelled');
            }
        });
    }
    return (
        <header className="fixed top-0 left-0 w-full flex justify-between px-5 py-2 bg-slate-200">
            <Link href='/inboxer'>
                <BasilNotionOutline className="h-auto w-6" />
            </Link>
            <span id="menu">
                <BasilMenuOutline className="h-auto w-6" />
            </span>
            <Hamburger />
        </header>
    );
}


export default Header;
import BasilNotionOutline from "./icons/notion";
import BasilSettingsAdjustSolid from "./icons/settings";
import BasilSendOutline from "./icons/send";
import BasilCancelSolid from "./icons/close";

import Link from "next/link";

const Hamburger = () => {
    if (typeof window === 'object') {
        const close = document.querySelector('#close');
        const list = document.querySelectorAll('li');

        close.addEventListener('click', () => {
            dialog.close('cancelled');
        });

        list.forEach(element => {
            element.addEventListener('click', () => {
                dialog.close('cancelled');
            });
        })
    }

    return (
        <dialog id="dialog" className="text-center font-bold transition-all ease-linear bg-slate-400 text-white p-5 ring-0 focus:ring-0 rounded-md">
            <h2 className="text-lg">Menu</h2>
            <ul className="p-5 divide-y">
                <li className="py-2 px-5"><Link href="/inboxer" className="focus:outline-none"><span className="flex items-center"><BasilSendOutline className="mr-2" />Inboxer</span></Link></li>
                <li className="py-2 px-5"><Link href="/settings" className="focus:outline-none"><span className="flex items-center"><BasilSettingsAdjustSolid className="mr-2" />Settings</span></Link></li>
                <li className="py-2 px-5"><Link href="/about" className="focus:outline-none"><span className="flex items-center"><BasilNotionOutline className="mr-2" />About</span></Link></li>
            </ul>
            <button id="close" className="py-1 px-5 text-slate-100 rounded-sm ring-1 ring-slate-300 focus:outline-none"><span className="flex items-center"><BasilCancelSolid className="mr-2" />Close</span></button>
        </dialog>
    );
}

export default Hamburger;
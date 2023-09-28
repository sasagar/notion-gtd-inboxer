"use client";

import BasilNotionOutline from '../components/icons/notion';
import Title from '../components/forms/title';
import WarningConponent from '../components/warningComponent';
import WarningSettings from '../components/warningSettings';

import { useEffect, useState } from 'react';


const Inboxer = () => {
    const [result, setResult] = useState(0);

    const resultHandler = (newState) => {
        setResult(newState);
    }

    const [pageid, setPageid] = useState("");
    const [apikey, setKey] = useState("");

    useEffect(() => {
        setPageid(localStorage.hasOwnProperty('pageid') ? localStorage.getItem('pageid') : "");
        setKey(localStorage.hasOwnProperty('apikey') ? localStorage.getItem('apikey') : "");
    }, []);

    return (
        <main className="flex min-h-full box-border flex-col items-start justify-between px-5 pb-5 sm:px-10 sm:pb-10 lg:px-24 lg:pb-24">
            <h1 className='text-xl font-bold leading-6'>Inboxer</h1>
            <span><BasilNotionOutline className="inline h-auto w-10" /> Notion GTD Inboxer</span>
            <WarningSettings pageid={pageid} apikey={apikey} />
            <WarningConponent result={result} />
            <Title resultHandler={resultHandler} />
        </main>
    );
}

export default Inboxer;
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SettingsForm = () => {
    const router = useRouter();

    let lPageid, lKey;
    if (typeof window === 'object') {
        lPageid = localStorage.hasOwnProperty('pageid') ? localStorage.getItem('pageid') : "";
        lKey = localStorage.hasOwnProperty('apikey') ? localStorage.getItem('apikey') : "";
    }
    const [pageid, setPageId] = useState(lPageid);
    const [apikey, setKey] = useState(lKey);

    const savePageId = (event) => {
        const value = event.target.value;
        setPageId(value);
        localStorage.setItem('pageid', value)
    }

    const saveKey = async (event) => {
        const value = event.target.value;
        setKey(value);
        localStorage.setItem('apikey', value);
    }

    return (
        <div className="block max-w-fit">
            <div className="mb-3">
                <label htmlFor="pageid" className="block text-sm font-medium leading-6 text-gray-900">
                    Page ID
                </label>
                <div className="relative mt-2 rounded-md shadow-sm w-full">
                    <input
                        type="text"
                        name="pageid"
                        id="pageid"
                        value={pageid}
                        className="block w-80 rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-slate-500 sm:text-sm sm:leading-6"
                        placeholder="1234567890abcdef1234567890abcdef"
                        onChange={savePageId}
                    />
                </div>
            </div>
            <div className="mb-6">
                <label htmlFor="secret" className="block text-sm font-medium leading-6 text-gray-900">
                    Notion API KEY
                </label>
                <div className="relative mt-2 rounded-md shadow-sm w-full">
                    <input
                        type="text"
                        name="secret"
                        id="secret"
                        value={apikey}
                        className="block w-80 rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-slate-500 sm:text-sm sm:leading-6"
                        placeholder="secret_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                        onChange={saveKey}
                    />
                </div>
            </div>
            <div className="flex justify-between">
                <button className="btn bg-blue-600 rounded-md border border-blue-700 px-6 py-1 text-white hover:bg-rose-500 hover:border-rose-600 transition-all" onClick={() => {
                    router.push('/inboxer')
                }}>Back</button >
            </div>
        </div>
    )
}

export default SettingsForm;
"use client";

// const { Client } = require('@notionhq/client');

// const apikey = localStorage.getItem('key');

// const notion = new Client({
//     auth: apikey
// });

const Title = () => {
    // const pageid = localStorage.getItem('pageid');
    // const content = document.querySelector('#title').value;

    // const inboxerToNotion = async () => {
    //     try {
    //         const response = await notion.pages.create({
    //             "parent": {
    //                 "type": "database_id",
    //                 "database_id": pageid
    //             },
    //             "properties": {
    //                 "Name": {
    //                     "title": [
    //                         {
    //                             "text": {
    //                                 "content": content
    //                             }
    //                         }
    //                     ]
    //                 },
    //             },
    //         });

    //         console.dir(response);
    //     } catch (error) {
    //         console.error(error);
    //     }
    const inboxerToNotion = async () => {
        const url = '/api/notion';
        const apikey = localStorage.getItem('key');
        const pageid = localStorage.getItem('pageid');

        const content = document.querySelector('#title').value;

        const headers = {
            'Authorization': `Bearer ${apikey}`,
            'Content-Type': 'application/json',
            'Notion-Version': '2022-06-28'
        };
        console.dir(headers);

        const body = {
            "parent": {
                "type": "database_id",
                "database_id": pageid
            },
            "properties": {
                "Name": {
                    "title": [
                        {
                            "text": {
                                "content": content
                            }
                        }
                    ]
                },
            },
        };
        console.dir(body);

        await fetch(url, { method: 'POST', headers, body })
            .then((res) => {
                console.log(res);
            });
    }

    return (
        <div className="block max-w-fit">
            <div className="mb-6">
                <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                    Title
                </label>
                <div className="relative mt-2 rounded-md shadow-sm w-full">
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="block w-80 rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Buy dinner."
                    />
                </div>
            </div>
            <div className="flex justify-between">
                <button className="btn bg-rose-600 rounded-md border border-rose-700 px-6 py-1 text-white hover:bg-rose-500 hover:border-rose-600 transition-all">Reset</button>
                <button className="btn bg-green-600 rounded-md border border-green-700 px-6 py-1 text-white hover:bg-green-500 hover:border-green-600 transition-all" onClick={inboxerToNotion}>Save</button>
            </div>
        </div>
    )
}

export default Title;
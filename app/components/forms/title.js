"use client";
import SvgSpinnersRingResize from "../icons/spinner";

const Title = (props) => {
    const statusHandler = (code) => {
        props.resultHandler(code);
    }

    const inboxerToNotion = async (event) => {
        const button = event.currentTarget;
        const spin = document.querySelector('#spinner');
        button.disabled = true;
        spin.classList.add("inline-block");
        spin.classList.remove("hidden");

        const content = document.querySelector('#title').value;
        if (!content) {
            statusHandler(4000);
            button.disabled = false;
            spin.classList.remove("inline-block");
            spin.classList.add("hidden");
            return false;
        }

        const url = '/api/notion/pages';
        const apikey = localStorage.getItem('apikey');
        const pageid = localStorage.getItem('pageid');

        const headers = {
            'Authorization': `Bearer ${apikey}`,
            'Content-Type': 'application/json',
            'Notion-Version': '2022-06-28',
            'mode': 'cors'
        };

        const payload = {
            "parent": {
                "type": "database_id",
                "database_id": pageid
            },
            "properties": {
                "title": [
                    {
                        "type": "text",
                        "text": {
                            content
                        }
                    }
                ]
            }
        };

        const options = {
            "method": "post",
            headers,
            "body": JSON.stringify(payload)
        }

        // console.dir(options);

        try {
            const response = await fetch(url, options);
            // const res = response.json();
            statusHandler(Number(response.status));
            // res.then((response) => {
            //     console.log(response);
            // })
            document.querySelector('#title').value = "";
        } catch (error) {
            console.error(error);
        }
        button.disabled = false;
        spin.classList.remove("inline-block");
        spin.classList.add("hidden");
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
                        className="block w-80 rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-slate-500 sm:text-sm sm:leading-6"
                        placeholder="Buy dinner."
                    />
                </div>
            </div>
            <div className="flex justify-between">
                <button className="btn bg-rose-600 rounded-md border border-rose-700 px-6 py-1 text-white hover:bg-rose-500 hover:border-rose-600 transition-all focus:outline-none">Reset</button>
                <button className="btn bg-green-600 rounded-md border border-green-700 px-6 py-1 text-white hover:bg-green-500 hover:border-green-600 transition-all disabled:bg-green-300 disabeld:border-green-400 focus:outline-none" onClick={inboxerToNotion}>
                    <SvgSpinnersRingResize className="hidden mr-2" id="spinner" />
                    Save
                </button>
            </div>
        </div>
    )
}

export default Title;
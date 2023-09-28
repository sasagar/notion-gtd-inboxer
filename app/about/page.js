import BasilNotionOutline from '../components/icons/notion';
import getConfig from 'next/config';
// import Licenses from '../components/licenses';

const { publicRuntimeConfig } = getConfig();

const About = () => {
    return (
        <main className="flex min-h-full box-border flex-col items-start justify-between px-5 pb-5 sm:px-10 sm:pb-10 lg:px-24 lg:pb-24">
            <h1 className='text-xl font-bold leading-6'>About</h1>
            <div className='flex items-center'>
                <BasilNotionOutline className="inline h-auto w-16 mr-6" />
                <div>
                    <span className='text-lg font-bold leading-5'>Notion GTD Inboxer</span><br />
                    <small>Version {publicRuntimeConfig?.version}</small>
                </div>
            </div>

            <section className="block w-80 rounded-md border border-slate-400 bg-slate-200 p-4">
                <h2 className='text-lg font-bold leading-10 flex items-center'>Author</h2>
                <h3 className='text-md font-semibold leading-9'>SASAPIYO</h3>
                <ul className='text-sm font-light flex flex-col gap-2'>
                    <li><a href="https://x.com/sasagawaki" className='text-indigo-600'>X (@sasagawaki)</a></li>
                    <li><a href="https://github.com/sasagar" className='text-indigo-600'>GitHub (@sasagar)</a></li>
                    <li><a href="https://ikaskey.bktsk.com/@sasapiyo" className='text-indigo-600'>いかすきー(Misskey) (@sasapiyo@ikaskey.bktsk.com)</a></li>
                </ul>
            </section>

            <section className="block w-80 rounded-md border border-slate-400 bg-slate-200 p-4">
                <h2 className='text-lg font-bold leading-10 flex items-center'>Repository</h2>
                <ul className='text-sm font-light flex flex-col gap-2'>
                    <li><a href="https://github.com/sasagar/notion-gtd-inboxer/issues" className='text-indigo-600'>Send issues from here.</a></li>
                    <li><a href="https://github.com/sasagar/notion-gtd-inboxer" className='text-indigo-600'>Repository</a></li>
                </ul>
            </section>

            {/* <Licenses /> */}

        </main>
    );

}

export default About;
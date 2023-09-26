import BasilNotionOutline from '../components/icons/notion';

const About = () => {
    return (
        <main className="flex min-h-screen flex-col items-start justify-between p-5 pt-16 sm:p-10 sm:pt-16 lg:p-24">
            <h1 className='text-xl font-bold leading-6'>About</h1>
            <span><BasilNotionOutline className="inline h-auto w-10" /> Notion GTD Inboxer</span>
        </main>
    );

}

export default About;
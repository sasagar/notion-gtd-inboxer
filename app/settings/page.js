import BasilNotionOutline from '../components/icons/notion';
import SettingsForm from '../components/forms/settings';

const Settings = () => {
    return (
        <main className="flex min-h-screen flex-col items-start justify-between p-5 pt-16 sm:p-10 sm:pt-16 lg:p-24">
            <h1 className='text-xl font-bold leading-6'>Settings</h1>
            <span><BasilNotionOutline className="inline h-auto w-10" /> Notion GTD Inboxer</span>
            <SettingsForm />
        </main>
    );

}

export default Settings;
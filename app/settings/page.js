import BasilNotionOutline from '../components/icons/notion';
import SettingsForm from '../components/forms/settings';

const Settings = () => {
    return (
        <main className="flex min-h-full box-border flex-col items-start justify-between px-5 pb-5 sm:px-10 sm:pb-10 lg:px-24 lg:pb-24">
            <h1 className='text-xl font-bold leading-6'>Settings</h1>
            <span><BasilNotionOutline className="inline h-auto w-10" /> Notion GTD Inboxer</span>
            <SettingsForm />
        </main>
    );

}

export default Settings;
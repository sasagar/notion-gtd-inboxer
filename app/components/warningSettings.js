const WarningSettings = ({ pageid, apikey }) => {

    if (!pageid && !apikey) {
        return (
            <div className="bg-rose-600 border-rose-700 text-rose-100 font-bold w-80 p-2 rounded-sm">
                Page IDとAPI Keyが未設定です。Settingsのページで入力してください。
            </div>
        )
    } else if (!pageid) {
        return (
            <div className="bg-rose-600 border-rose-700 text-rose-100 font-bold w-80 p-2 rounded-sm">
                Page IDが未設定です。Settingsのページで入力してください。
            </div>
        )
    } else if (!apikey) {
        return (
            <div className="bg-rose-600 border-rose-700 text-rose-100 font-bold w-80 p-2 rounded-sm">
                API Keyが未設定です。Settingsのページで入力してください。
            </div>
        )
    }

}

export default WarningSettings;
const WarningConponent = (props) => {
    const result = props.result;
    if (result == 200) {
        return (
            <div className="bg-green-600 border-green-700 text-green-100 font-bold w-80 p-2 rounded">
                Inboxに追加しました。
            </div>
        )
    } else if (result == 4000) {
        return (
            <div className="bg-rose-600 border-rose-700 text-rose-100 font-bold w-80 p-2 rounded">
                空欄は登録できません。
            </div>
        )
    } else if (result == 400) {
        return (
            <div className="bg-rose-600 border-rose-700 text-rose-100 font-bold w-80 p-2 rounded">
                Inboxに追加できませんでした。
            </div>
        )
    } else if (result == 401) {
        return (
            <div className="bg-rose-600 border-rose-700 text-rose-100 font-bold w-80 p-2 rounded">
                Notionの認証に失敗しました。設定が完了しているか確認して下さい。
            </div>
        )
    } else if (result == 404) {
        return (
            <div className="bg-amber-600 border-amber-700 text-amber-100 font-bold w-80 p-2 rounded">
                Notionとの接続で問題が起きました。
            </div>
        )
    } else if (result == 429) {
        return (
            <div className="bg-amber-600 border-amber-700 text-amber-100 font-bold w-80 p-2 rounded">
                NotionのRate Limitの上限を超えています。
            </div>
        )
    }
}

export default WarningConponent;
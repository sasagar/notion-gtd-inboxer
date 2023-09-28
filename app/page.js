"use client";
import BasilNotionOutline from "./components/icons/notion";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-full box-border flex-col items-start justify-between px-5 pb-5 sm:px-10 sm:pb-10 lg:px-24 lg:pb-24">
      <h1 className='text-xl font-bold leading-6 flex items-center'>
        <BasilNotionOutline className="inline h-auto w-10 mr-2" />
        Notion GTD Inboxer
      </h1>

      <section className="block w-80 rounded-md border border-slate-400 bg-slate-200 p-4">
        <h2 className='text-lg font-bold leading-10 flex items-center'>NotionでGTDする人の為のツール</h2>
        <p>特定のデータベースにタイトルのみのサブページを追加するだけの、シンプルなツールです。GTDでInboxを活用している方向けのツールです。</p>
      </section>

      <section className="block w-80 rounded-md border border-slate-400 bg-slate-200 p-4">
        <h2 className='text-lg font-bold leading-10 flex items-center'>使い方</h2>
        <p>まずはSettingsページで設定をしましょう。対象となるdatabaseページのIDとAPIキーを入力します。<br />その後はInboxerページから入力して投稿するだけです！</p>
      </section>

      <button className="w-80 btn bg-green-600 rounded-md border border-green-700 px-6 py-1 text-white hover:bg-green-500 hover:border-green-600 transition-all disabled:bg-green-300 disabeld:border-green-400 focus:outline-none"
        onClick={() => { router.push('/inboxer') }}>
        Inboxerを使ってみる
      </button>
    </main>
  )
}

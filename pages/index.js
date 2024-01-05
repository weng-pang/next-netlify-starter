import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>OAS 網絡維護 Network maintenance</title>
      </Head>

      <main>
        <Header title="OAS 網絡維護 Network maintenance " />
        <p className="description" style="width:70%;">
          晚上10點至翌日6點進行網絡維護，在維護期間，網上報名系統OAS會受到中斷的影響，不便之處，敬請見諒。
        </p>
        <p className="description" style="width:70%;">
        Network maintenance will be carried out from 10:00 PM, until 6:00 AM the following day.  During the maintenance period, the Online Application System (OAS) will be temporarily unavailable.  We apologize for any inconvenience caused.
        </p>
        <div style="display:none;">
          ::CLOUDFLARE_ERROR_500S_BOX::
        </div>
      </main>

    </div>
  )
}

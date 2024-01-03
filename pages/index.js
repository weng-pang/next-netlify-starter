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
        <p className="description">
          2024年1月3日晚上10點至翌日6點半進行網絡維護，在維護期間，網上報名系統OAS會受到中斷的影響，不便之處，敬請見諒。
        </p>
        <p className="description">
        Network maintenance will be carried out from 10:00 PM on January 3, 2024, until 6:30 AM the following day.  During the maintenance period, the Online Application System (OAS) will be temporarily unavailable.  We apologize for any inconvenience caused.
        </p>
        ::CLOUDFLARE_ERROR_500S_BOX::
      </main>

    </div>
  )
}

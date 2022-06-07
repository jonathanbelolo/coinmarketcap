import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className=""> 
      <Head>
        <title>Coinmarket Cap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen">
        <Header />
        <div className="mt-10">
        </div>
        <div className="mt-20">
        </div>
      </div>
      
    </div>
  )
}

export default Home

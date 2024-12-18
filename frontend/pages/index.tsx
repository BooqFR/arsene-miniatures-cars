import Head from 'next/head'
import React from 'react'
import Layout from '@components/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Arsène Miniatures</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <Layout.Header>
          <h1 className="">Arsène Minitaures</h1>
        </Layout.Header>

        <Layout.Main>
          <p className="">Liste des minitaures</p>
        </Layout.Main>

        <Layout.Footer>
          <img src="/24h-le-mans-logo.png" alt="24h Le Mans Logo" className="w-14" />
        </Layout.Footer>
      </Layout>
    </>
  )
}

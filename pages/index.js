import Head from 'next/head'
import Link from 'next/link'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="A dashboard for use in Kitchens" />
      </Head>
      <h1 className='mx-auto'>Hello World!</h1>
    </div>
  )
}

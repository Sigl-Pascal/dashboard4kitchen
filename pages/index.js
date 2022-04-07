import Head from 'next/head'
import Link from 'next/link'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="A dashboard for use in Kitchens" />
      </Head>
      <h1>Hello World!</h1>
      <div className='card' style={{width: 18 + "rem"}}>
        <div className='card-body'>
          <Link href={'/recipes'}>
            <a>Rezepete</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

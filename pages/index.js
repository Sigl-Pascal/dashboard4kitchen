import Head from 'next/head'
import Link from 'next/link'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="A dashboard for use in Kitchens" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
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

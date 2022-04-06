import Head from 'next/head'
import Link from 'next/link'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Dashboard 4 Kitchen</title>
        <meta name="description" content="A dashboard for use in Kitchens" />
      </Head>
      <h1>Hello World!</h1>
      <Link href={'/recipes'}>
        <a>Rezepete</a>
      </Link>
    </div>
  )
}

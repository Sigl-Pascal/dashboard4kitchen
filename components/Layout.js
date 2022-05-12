import Head from 'next/head'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Dashboard4Kitchen</title>
      </Head>
      <Navbar />
      {children}
    </>
  )
}

export default Layout

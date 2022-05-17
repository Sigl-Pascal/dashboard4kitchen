import '../styles/global.css'
import { useState } from 'react'
import Layout from '../components/Layout'
import Router from 'next/router'
import { LinearProgress } from '@mui/material'

const App = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false)

  Router.events.on('routeChangeStart', () => {
    setLoading(true)
  })
  Router.events.on('routeChangeComplete', () => {
    setLoading(false)
  })

  return (
    <>
      <Layout>
        {loading && <LinearProgress />}
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App

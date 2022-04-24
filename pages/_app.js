import "../styles/global.css"
import Layout from "../components/Layout"
import { useEffect } from "react"

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, [])
  
  return <Layout><Component {...pageProps} /></Layout>
}
  
export default App

import Head from "next/head"
import Ingredients from "../../../components/Ingredients"

const Recipe = ({data}) => {
  const ingredients = data.ingredients
  return(
    <>
      <Head>
      <title>{data.name}</title>
      </Head>
          <div className="card mx-auto mt-5" style={{width: 40 + "rem"}}>
            <div className="card-header">
              <h1>{data.name}</h1>
            </div>
            <div className="card-body">
              <h6>Bewertung: {data.rating}</h6>
              <h3>Beschreibung</h3>
              <div className="card">
                <div className="card-body">
                  <p>{data.description}</p>
                </div>
              </div>
              <Ingredients {...data} />
            </div>
      </div>
    </>
  )
}

export const getServerSideProps = async ({query: { id }}) => {
  const res = await fetch(`http://localhost:3000/api/recipes/${id}`)
  const { data } = await res.json()
  return { props: {data} }
}

export default Recipe

import Head from 'next/head'
import Ingredients from '../../../components/Ingredients'

const Recipe = ({data}) => {
  const ingredients = data.ingredients
  return(
    <>
      <Head>
      <title>{data.name}</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
      </Head>
          <div className="card mx-auto mt-5" style={{width: 40 + "rem"}}>
            <div className='card-header'>
              <h1>{data.name}</h1>
            </div>
            <div className="card-body">
              <h6>Bewertung: {data.rating}</h6>
              <h3>Beschreibung</h3>
              <p>{data.description}</p>
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

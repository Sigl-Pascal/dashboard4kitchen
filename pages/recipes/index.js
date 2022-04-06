import Link from 'next/link'
import Head from 'next/head'

const Recipes = ({data}) => {
    return(
        <>
        <Head>
          <title>Rezepte</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
        </Head>
            {/* {data.map( recipe => {
                return (
                    <div key={recipe._id}>
                    <p>{recipe.name}</p>
                    <p>{recipe.rating}</p>
                    <p>{recipe.description}</p>
                      {recipe.ingredients.map(ingredient => {
                        return(
                          <div key={ingredient._id}>
                            <p>{ingredient.name}</p>
                            <p>{ingredient.quantity}</p>
                            <p>{ingredient.unitOfMessure}</p>
                          </div>
                        )
                      })}
                  </div>
                )
            })} */}
            <div className="card mx-auto mt-5" style={{width: 40 + "rem"}}>
              <div className='card-header'>
                <h1>Rezepte</h1>
              </div>
              <div className='card-body'>  
                <div className="list-group" >
                  {data.map( recipe =>{
                    return(
                      <Link key={recipe._id} href={`/recipes/${recipe._id}`} className='list-group-item'>
                        <a className='list-group-item'>{recipe.name}</a>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
        </>
    )
}

export const getServerSideProps = async() => {
    const res = await fetch('http://localhost:3000/api/recipes')
    const { data } = await res.json()
    return { props: {data} }
}

export default Recipes

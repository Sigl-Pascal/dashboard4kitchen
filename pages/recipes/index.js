import Link from "next/link"
import Head from "next/head"
import { Button, Card } from "semantic-ui-react";

const Recipes = ({data}) => {
  return(
      <>
        <Head>
          <title>Rezepte</title>
        </Head>
          <h1 className="text-center">Rezepte</h1>
        <div className="container">
          <div className="row">
            {data.map(recipe => (
              <div key={recipe._id} className="col-12 col-md-3 mb-3">
                <Card className="w-100 text-center h-100">
                  <Card.Content>
                    <Card.Header>
                      <Link href={`/recipes/${recipe._id}`}>
                        <a>{recipe.name}</a>
                      </Link>
                    </Card.Header>
                  </Card.Content>
                  <Card.Content extra className="d-grid gap-2 d-lg-block">
                    <Link href={`/recipes/${recipe._id}`} passHref>
                      <Button primary>Ansicht</Button>
                    </Link>
                    <Link href={`/recipes/${recipe._id}/edit`} passHref>
                      <Button primary>Bearbeiten</Button>
                    </Link>
                  </Card.Content>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </>
  )
}

export const getServerSideProps = async() => {
    const res = await fetch("http://localhost:3000/api/recipes")
    const { data } = await res.json()
    return { props: {data} }
}

export default Recipes

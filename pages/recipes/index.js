import Link from 'next/link'
import Head from 'next/head'
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardActions,
  Button,
} from '@mui/material'
import { EditOutlined, DeleteOutlined } from '@mui/icons-material'

const Recipes = ({ data }) => {
  return (
    <>
      <Head>
        <title>Rezepte</title>
      </Head>
      <h1 style={{ textAlign: 'center' }}>Rezepte</h1>
      <Container style={{ marginTop: '18px' }}>
        <Grid container spacing={2}>
          {data.map((recipe) => {
            return (
              <Grid
                item
                spacing={3}
                key={recipe._id}
                xs={12}
                sm={12}
                md={6}
                lg={3}
              >
                <Card
                  style={{
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardHeader
                    title={
                      <Link href={`/recipes/${recipe._id}`} passHref>
                        <a className='blank-link'>{recipe.name}</a>
                      </Link>
                    }
                  />
                  <CardActions
                    style={{
                      justifyContent: 'center',
                      display: 'flex',
                      marginTop: 'auto',
                    }}
                  >
                    <Link
                      href={{
                        pathname: `/recipes/${recipe._id}/edit`,
                        query: recipe,
                      }}
                      passHref
                    >
                      <Button color='primary' variant='contained'>
                        <EditOutlined />
                      </Button>
                    </Link>
                    <Link
                      href={{
                        pathname: `/recipes/${recipe._id}/`,
                        query: { deleting: true },
                      }}
                      passHref
                    >
                      <Button color='error' variant='contained'>
                        <DeleteOutlined />
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/recipes')
  const { data } = await res.json()
  return { props: { data } }
}

export default Recipes

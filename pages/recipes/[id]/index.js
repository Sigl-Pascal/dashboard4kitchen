import { Fragment } from 'react'
import {
  Grid,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from '@mui/material'
import { DeleteOutlined, AddOutlined } from '@mui/icons-material'
import { Formik, Form, FieldArray } from 'formik'
import Textfield from '../../../components/FormUI/Textfield'
import Rating from '../../../components/FormUI/Rating'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'

const Recipe = ({ data }) => {
  const hanldeCancel = () => {
    Router.back()
  }

  const INITIAL_VALUES = data

  return (
    <>
      <Head>
        <title>{data.name}</title>
      </Head>
      <Container maxWidth='md' style={{ marginTop: '10px' }}>
        <Card>
          <CardHeader title={<Typography variant='h3'>Rezept</Typography>} />
          <CardContent>
            <Formik initialValues={INITIAL_VALUES}>
              {(props) => (
                <Form>
                  <Divider />
                  <Grid container columnSpacing={1} rowSpacing={1}>
                    <Grid item xs={12}>
                      <Typography variant='h6'>Rezeptname</Typography>
                    </Grid>
                    <Grid item xs={5}>
                      <Textfield
                        name='name'
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant='h6'>Bewertung</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Rating name='rating' readOnly />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant='h6'>Beschreibung</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Textfield
                        name='description'
                        style={{ width: '100%' }}
                        multiline
                        minRows={6}
                        maxRows={6}
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant='h6'>Zutaten</Typography>
                    </Grid>
                    <FieldArray name='ingredients'>
                      {(arrayHelpers) => (
                        <Fragment>
                          <Grid item xs={2} md={1}>
                            <Typography>Menge</Typography>
                          </Grid>
                          <Grid item xs={2} md={1}>
                            <Typography>Einheit</Typography>
                          </Grid>
                          <Grid item xs={6} md={9}>
                            <Typography>Zutat</Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <Button
                              type='button'
                              disabled
                              onClick={() =>
                                arrayHelpers.push({
                                  name: '',
                                  quantity: 0,
                                  unitOfMessure: '',
                                })
                              }
                              variant='contained'
                              color='primary'
                            >
                              <AddOutlined />
                            </Button>
                          </Grid>
                          {props.values.ingredients.map((ingredient, index) => (
                            <Fragment key={index}>
                              <Grid item xs={2} md={1}>
                                <Textfield
                                  name={`ingredients.${index}.quantity`}
                                  type='tel'
                                  InputProps={{
                                    readOnly: true,
                                  }}
                                />
                              </Grid>
                              <Grid item xs={2} md={1}>
                                <Textfield
                                  name={`ingredients.${index}.unitOfMessure`}
                                  InputProps={{
                                    readOnly: true,
                                  }}
                                />
                              </Grid>
                              <Grid item xs={5} md={9}>
                                <Textfield
                                  name={`ingredients.${index}.name`}
                                  InputProps={{
                                    readOnly: true,
                                  }}
                                />
                              </Grid>
                              <Grid
                                item
                                xs={1}
                                alignContent='center'
                                style={{ margin: 'auto' }}
                              >
                                <Button
                                  type='button'
                                  onClick={() => {
                                    arrayHelpers.remove(index)
                                  }}
                                  disabled
                                  color='error'
                                  variant='contained'
                                >
                                  <DeleteOutlined />
                                </Button>
                              </Grid>
                            </Fragment>
                          ))}
                        </Fragment>
                      )}
                    </FieldArray>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    <Grid item xs={6} md={2}>
                      <Link href={`/recipes/${data._id}/edit`} passHref>
                        <Button type='button' variant='contained'>
                          Bearbeiten
                        </Button>
                      </Link>
                    </Grid>
                    <Grid item xs={6} md={2}>
                      <Button
                        variant='contained'
                        color='primary'
                        onClick={hanldeCancel}
                      >
                        Zurück
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Container>
    </>
  )
}

export const getServerSideProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/recipes/${id}`)
  const { data } = await res.json()
  return { props: { data } }
}

export default Recipe

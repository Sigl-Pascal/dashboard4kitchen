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
import * as Yup from 'yup'
import Textfield from '../../components/FormUI/Textfield'
import Rating from '../../components/FormUI/Rating'
import Router from 'next/router'
import Head from 'next/head'

const NewRecipe = () => {
  const INITIAL_VALUES = {
    name: '',
    description: '',
    ingredients: [
      {
        name: '',
        quantity: 0,
        unitOfMessure: '',
      },
    ],
    rating: 1,
  }

  const VALIDATION_SCHEMA = Yup.object().shape({
    name: Yup.string().required('Rezeptname wird benötigt'),
    description: Yup.string().required('Rezeptbeschreibung wird benötigt'),
    ingredients: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required('Name der Zutat wird benötigt'),
        quantity: Yup.number()
          .integer()
          .typeError()
          .required('Menge der Zutat wird benötigt'),
        unitOfMessure: Yup.string().required('Einheit der Zutat wird benötigt'),
      })
    ),
    rating: Yup.number().min(1).max(5),
  })

  const handleSubmit = async (values) => {
    await fetch('http://localhost:3000/api/recipes', {
      body: JSON.stringify(values),
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
    })
    Router.push('/recipes')
  }

  const hanldeCancel = () => {
    Router.back()
  }

  return (
    <>
      <Head>
        <title>Neues Rezept</title>
      </Head>
      <Container maxWidth='md' style={{ marginTop: '10px' }}>
        <Card>
          <CardHeader
            title={<Typography variant='h3'>Neues Rezept</Typography>}
          />

          <CardContent>
            {' '}
            <Formik
              initialValues={INITIAL_VALUES}
              validationSchema={VALIDATION_SCHEMA}
              onSubmit={(values) => {
                console.log(JSON.stringify(values))
                handleSubmit(values)
              }}
            >
              {(props) => (
                <Form>
                  <Divider />
                  <Grid container columnSpacing={1} rowSpacing={1}>
                    <Grid item xs={12}>
                      <Typography variant='h6'>Rezeptname</Typography>
                    </Grid>
                    <Grid item xs={5}>
                      <Textfield name='name' />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant='h6'>Bewertung</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Rating name='rating' />
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
                          <Grid item xs={2} md={1}>
                            <Button
                              type='button'
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
                                />
                              </Grid>
                              <Grid item xs={2} md={1}>
                                <Textfield
                                  name={`ingredients.${index}.unitOfMessure`}
                                />
                              </Grid>
                              <Grid item xs={6} md={9}>
                                <Textfield name={`ingredients.${index}.name`} />
                              </Grid>
                              <Grid
                                item
                                xs={2}
                                md={1}
                                alignContent='center'
                                style={{ margin: 'auto' }}
                              >
                                <Button
                                  type='button'
                                  onClick={() => {
                                    arrayHelpers.remove(index)
                                  }}
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
                    <Grid item xs={4} md={2}>
                      <Button type='submit' variant='contained'>
                        Erstellen
                      </Button>
                    </Grid>
                    <Grid item xs={4} md={2}>
                      <Button
                        variant='contained'
                        color='error'
                        onClick={hanldeCancel}
                      >
                        Abbrechen
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

export default NewRecipe

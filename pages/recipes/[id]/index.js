import Head from 'next/head'
import { Grid, Container } from '@mui/material'
import { Formik, Form } from 'formik'

const Recipe = ({ data }) => {
  return <p>Not implemented yet</p>
}

export const getServerSideProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/recipes/${id}`)
  const { data } = await res.json()
  return { props: { data } }
}

export default Recipe

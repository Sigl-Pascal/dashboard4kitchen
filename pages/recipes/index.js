


const Recipes = ({props}) => {
    return(
        <>
            {props.map( recipe => {
                return <p>{recipe.name}</p>
            })}
        </>
    )
}

export const getServerSideProps = async() => {
    const res = await fetch('http://localhost:3000/api/recipe')
    const { data } = res.json
    return { props: {data} }
}

export default Recipes
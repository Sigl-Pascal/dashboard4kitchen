const Ingredients = ({ingredients}) => {
  return(
    <>
      <h3>Zutaten</h3>
      <div className={'card'}>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {ingredients.map(ingredient => {
              return(
                <>
                  <li className="list-group-item">
                    <div className={'d-flex flex-row'}>
                      <div className="p-2">{ingredient.name}</div>
                      <div className="p-2">{ingredient.quantity}</div>
                      <div className="p-2">{ingredient.unitOfMessure}</div>
                    </div>
                  </li>
                  </>
              )
            })}
            </ul>
        </div>
      </div>
    </>
  )
}

export default Ingredients

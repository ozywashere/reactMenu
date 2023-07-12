import PropTypes from 'prop-types'
const Pizza = (props) => {
  console.log(props)
  return (
    <div className='card'>
      <figure className='img-holder'>
        <img src={props.photoName} height={100} alt='' className='card-img' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{props.name}</h2>
        <p className='card-ingredients'>{props.ingredients}</p>
        <p className='card-price'>$ {props.price}</p>
      </div>
    </div>
  )
}

Pizza.propTypes = {
  photoName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default Pizza

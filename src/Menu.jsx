import PropTypes from 'prop-types'
import Pizza from './Pizza'
const Menu = (props) => {
  const pizzaData = props.pizzas
  return (
    <div className='menu'>
      <h1
        style={{
          textAlign: 'center',
          padding: '1rem 0',
        }}
      >
        Menu
      </h1>
      <div className='pizza-list'>
        {pizzaData.map((pizza) => {
          return <Pizza key={pizza.id} {...pizza} />
        })}
      </div>
    </div>
  )
}

Menu.propTypes = {
  pizzas: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Menu

import PropTypes from 'prop-types'
const Header = (props) => {
  return (
    <header
      className='header'
      style={{
        padding: '2rem 0',
        textAlign: 'center',
      }}
    >
      <h1 className='header-title'>{props.title}</h1>
    </header>
  )
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
}
export default Header

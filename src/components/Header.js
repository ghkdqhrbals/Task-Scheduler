import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {


    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button className='btn' text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Loaded Task',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header

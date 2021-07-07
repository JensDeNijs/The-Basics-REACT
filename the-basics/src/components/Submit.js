import PropTypes from 'prop-types'
function Submit({onClick}) {
    return <input className='inputButton' type="submit" value="Submit" onClick={onClick}/>;
}
Submit.propTypes={
    onClick: PropTypes.func,
}

export default Submit;
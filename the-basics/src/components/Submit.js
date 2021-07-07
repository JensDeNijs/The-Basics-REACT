import PropTypes from 'prop-types'
function Submit({onClick}) {
    return <input type="submit" value="Submit" onClick={onClick}/>;
}
Submit.propTypes={
    onClick: PropTypes.func,
}

export default Submit;
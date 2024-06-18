import PropTypes from 'prop-types'

export const FirstApp = ({ 
    title, 
    subtitle,
    name }) => {

    return (
        <>
            <h1 data-testid="test-title">{title}</h1>
            <p>{subtitle}</p>
            <p>{subtitle}</p>
            <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
}

// FirstApp.defaultProps = {
//     name: 'Igor',
//     title: 'No hay título',
//     subtitle: 'No hay subtítulo'
// }
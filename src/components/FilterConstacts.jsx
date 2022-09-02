import PropTypes from 'prop-types'
import { Component } from 'react'

export default class FilterConstacts extends Component{

    render(){
        const {onFilterChange} = this.props
        return (
            <input
                type="text"
                onChange={onFilterChange}
            />
        )
    }

}

FilterConstacts.propTypes = {
    onFilterChange: PropTypes.func
}
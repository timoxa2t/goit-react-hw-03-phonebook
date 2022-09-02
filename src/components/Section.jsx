import PropTypes from 'prop-types'
import { Component } from 'react'

export default class Section extends Component{

    render(){
        const {title, children} = this.props
        return (
            <section>
                <h2>{title}</h2>
                {children}
            </section>
        )
    }
}


Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element, 
        PropTypes.arrayOf(PropTypes.element)
    ])
}
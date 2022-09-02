import PropTypes from 'prop-types'
import { Component } from 'react'

export default class ContactsList extends Component{

    render(){
        const {contacts, removeContact} = this.props
        return (
            <ul>
                {contacts.map(({name, id, number}) => 
                    <li key={id}>
                        <span>{name}: {number}</span>
                        <button onClick={() => removeContact(id)}>Delete</button>
                    </li>    
                )}
            </ul>
        )
    }
 
}

ContactsList.propTypes = {
    contacts: PropTypes.array
}
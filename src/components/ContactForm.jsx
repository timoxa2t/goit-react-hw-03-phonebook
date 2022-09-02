import PropTypes from 'prop-types'
import { Component } from 'react';


export default class ContactForm extends Component{

    constructor(){
        super()
        this.nameChange = this.nameChange.bind(this);
        this.phoneChange = this.phoneChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    state = {
        name: "",
        number: ""
    }

    nameChange = ({target}) => {
        this.setState({
            name: target.value 
        })
    }

    phoneChange = ({target}) => {
        this.setState({
            number: target.value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {name, number} = this.state
        if(this.props.addContact({name, number})){
            this.clearForm()
        }
       
    }

    clearForm = () => {
        this.setState({
            name:"",
            number: ""
        })
    }
    
    render(){
   
        const {name, number} = this.state

        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    value={name}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.nameChange}
                />
                <p/>
                <label htmlFor="phone">Number</label>
                <input
                    id="phone" 
                    value={number}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.phoneChange}  
                />
                <button type="submit">Add contact</button>
            </form>
        )
    }
}

ContactForm.propTypes = {
    addContact: PropTypes.func,
    nameChange: PropTypes.func,
    phone: PropTypes.func
}
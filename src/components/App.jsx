
import React, {Component} from "react";
import ContactForm from "./ContactForm";
import ContactsList from "./ContactsList";
import Section from "./Section";
import FilterConstacts from "./FilterConstacts";
import { nanoid } from 'nanoid'


const getSavedContacts = () => {
  const savedContacts = localStorage.getItem("contacts")
  if(savedContacts){
    return JSON.parse(savedContacts)
  }
  else{
    return [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
    ]
  }
}


export class App extends Component {


  state = {
    contacts: getSavedContacts(),
    filter: ''
  }

  componentDidUpdate(){
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
  }


  addContact = ({name, number}) => {
    const {contacts} = this.state
    if(contacts.find(item => item.name === name)){
      alert(name + " is already in contacts")
      return false
    }
    const newContacts = [...contacts]
    newContacts.push({name, number, id: nanoid()})
    this.setState({
      contacts: newContacts
    })
    return true
  }



  handleFilterChange = ({target}) => {
    this.setState({
      filter: target.value
    })
  }

  removeContact = (id) => {
    const {contacts} = this.state
    const newContacts = contacts.filter(item => item.id !== id)
    this.setState({
      contacts: newContacts
    })
  }

  render(){
    const {contacts, filter} = this.state
    return (
      <div>
        <Section title="Phonebook">
          <ContactForm 
            addContact={this.addContact} 
          />
        </Section>
        
        <Section title="Contacts">
          <FilterConstacts onFilterChange={this.handleFilterChange}/>
          <ContactsList contacts={filteredContacts(contacts, filter)} removeContact={this.removeContact}/>
        </Section>      
      </div>
    )
  }
};

const filteredContacts = (contacts, filter) => {
    if(!filter) return contacts
    filter = filter.toLowerCase()
    return contacts.filter(({name}) => name.toLowerCase().includes(filter))
}

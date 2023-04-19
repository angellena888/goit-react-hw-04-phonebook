import React, { Component } from "react";
import { nanoid } from 'nanoid';

import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    number: ''
  };

handleNameChange = (event) => {
  this.setState({ name: event.target.value });
}

handleNumberChange = (event) => {
  this.setState({ number: event.target.value });
}

handleSubmit = (event) => {
  event.preventDefault();
 
  const { name, number, contacts } = this.state;
  
  if (contacts.find((contact) => contact.name === name)) {
    alert(`${name} is already in contacts!`);
    return;
  }

  const newContact = {
    id: nanoid(),
    name,
    number,
  };

   this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
  }));
}

handleDeleteContact = (id) => {
  this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== id)
  }));
    }

changeFilter = (event) => {
    this.setState({ filter: event.target.value });
};

getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
};

render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
        
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          name={this.state.name}
          number={this.state.number}
          onNameChange={this.handleNameChange}
          onNumberChange={this.handleNumberChange}
          onSubmit={this.handleSubmit}
        />
            
        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.changeFilter} />   
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
import React from 'react';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';
import Contact from './components/Contact';

import { getContacts } from "./service";
import './App.scss';

class App extends React.Component {

  constructor (){
    super();
    this.state = {
      contacts: [],
      filteredContacts: []
    }
  }

  componentDidMount() {
    getContacts().then((data) => {
      this.setState({ 
        contacts: data,
        filteredContacts: data,
      });
    });
  }

  handleFilter(filter){
    const filteredContacts = this.state.contacts
      .filter( contact => (
        contact.name.toUpperCase().includes(filter.query.toUpperCase())
      ))
      .sort(function (a, b) {
        if (a[filter['sortBy']] > b[filter['sortBy']]) {
          return 1;
        }
        if (a[filter['sortBy']] < b[filter['sortBy']]) {
          return -1;
        }
        return 0;
      });
    this.setState({'filteredContacts': filteredContacts})

  }

  render() {
    return (
      <div data-testid="app" className="app">
        <Topbar />
        <Filters handleFilter={(filter) => this.handleFilter(filter)}/>
        <Contacts>
          {this.state.filteredContacts.map((contact) => (
            <Contact data={contact} />
          ))}
        </Contacts>
      </div>
    )
  }
}

export default App;
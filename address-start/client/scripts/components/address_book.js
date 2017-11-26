import React from 'react';
import Company from './company';
import Contact from './contact';

import AddCompany from './add_company';
import AddContact from './add_contact';

class AddressBook extends React.Component {
  constructor() {
    super();
    this.state = {
      companies: [],
      contacts: [],
      adding: null
    }
    this.refresh = this.refresh.bind(this);
    this.addCompany = this.addCompany.bind(this);
    this.addContact = this.addContact.bind(this);

  }

  render() {
    return <div>
      <div className='header'>
        <h1>Address Book</h1>
        <button onClick={ this.addCompany } >Add a company</button>
        <button onClick={ this.addContact }>Add a contact</button>
      </div>

      { this.state.adding === 'company' ? <AddCompany onAdd={ this.refresh } /> : null }
      { this.state.adding === 'contact' ? <AddContact onAdd={ this.refresh } /> : null }

      { this.state.companies.map(company => {
        return <Company key={ company._id } { ...company } />
      })}

      { this.state.contacts.map(contact => {
        return <Contact key={ contact._id } { ...contact } />
      })}
    </div>;
  }

  refresh() {
    this.setState({ adding: null });

    fetch('/api/companies')
    .then(res => res.json())
    .then(companies => this.setState({ companies }))

    fetch('/api/contacts')
    .then(res => res.json())
    .then(contacts => this.setState({ contacts }))
  }

  componentDidMount() {
    this.refresh();
  }

  addCompany() {
    this.setState({ adding: 'company' });
  }

  addContact() {
    this.setState({ adding: 'contact' });
  }
}

export default AddressBook;
import React from 'react';
import Field from './field';
import AddressEditor from './address_editor';

class AddCompany extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: {}
    }

    this.updateField = this.updateField.bind(this);
    this.updateAddressField = this.updateAddressField.bind(this);
    this.addRecord = this.addRecord.bind(this);
  }

  render() {
    const { name, address } = this.state
    return <div>
      <form onSubmit={ this.addRecord }>
        <Field label='Name' value={ name } name='name' onChange={ this.updateField } />
        <AddressEditor address={ address } onChange={ this.updateAddressField } />
        <input type='submit' value="Save" />
      </form>
    </div>
  }

  updateField(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  updateAddressField(e) {
    var addressState = this.state.address;
    addressState[e.target.name] = e.target.value;
    this.setState({ address: addressState });
  }

  addRecord(e) {
    e.preventDefault();
    fetch('/api/companies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    })
    .then(res => {
      if (res.ok) {
        this.props.onAdd();
      } else {
        alert("Error when saving record");
      }
    })
  }
}

export default AddCompany;
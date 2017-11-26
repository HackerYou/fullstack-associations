import React from 'react';
import Field from './field';

class AddContact extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: ''
    }

    this.updateField = this.updateField.bind(this);
    this.addRecord = this.addRecord.bind(this);
  }

  render() {
    const { firstName, lastName } = this.state
    return <div>
      <form onSubmit={ this.addRecord }>
        <Field label='First Name' value={ firstName } name='firstName' onChange={ this.updateField } />
        <Field label='Last Name' value={ lastName } name='lastName' onChange={ this.updateField } />

        <input type='submit' value="Save" />
      </form>
    </div>
  }

  updateField(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  addRecord(e) {
    e.preventDefault();
    fetch('/api/contacts', {
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

export default AddContact;
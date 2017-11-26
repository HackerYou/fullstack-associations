import React from 'react';
import Field from './field';

class AddCompany extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }

    this.updateField = this.updateField.bind(this);
    this.addRecord = this.addRecord.bind(this);
  }

  render() {
    const { name } = this.state
    return <div>
      <form onSubmit={ this.addRecord }>
        <Field label='Name' value={ name } name='name' onChange={ this.updateField } />

        <input type='submit' value="Save" />
      </form>
    </div>
  }

  updateField(e) {
    this.setState({ [e.target.name]: e.target.value })
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
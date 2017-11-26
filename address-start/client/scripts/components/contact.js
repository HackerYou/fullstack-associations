import React from 'react';

const Contact = ({ firstName, lastName }) => (
  <div className='contact address-entry'>
    <div className='name'>{ firstName } { lastName }</div>
    <div className='address'>(address goes here)</div>
  </div>
)

export default Contact;
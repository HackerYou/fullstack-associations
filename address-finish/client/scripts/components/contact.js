import React from 'react';
import Address from './address';

const Contact = ({ firstName, lastName, address }) => (
  <div className='contact address-entry'>
    <div className='name'>{ firstName } { lastName }</div>
    <div className='address'><Address address={ address } /></div>
  </div>
)

export default Contact;
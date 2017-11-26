import React from 'react';
import Address from './address';

const Company = ({ name, address }) => (
  <div className='company address-entry'>
    <div className='name'>{ name }</div>
    <div className='address'><Address address={ address } /></div>
  </div>
)

export default Company;


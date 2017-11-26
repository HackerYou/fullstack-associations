import React from 'react';

const Company = ({ name }) => (
  <div className='company address-entry'>
    <div className='name'>{ name }</div>
    <div className='address'>(address goes here)</div>
  </div>
)

export default Company;


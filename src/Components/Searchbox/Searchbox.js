import React from 'react';

const Searchbox = ({ searchChange }) => {
  return (
    <div>
      <input
      type ='search'
      onChange={searchChange}
      />
    </div>
  )
}

export default Searchbox;
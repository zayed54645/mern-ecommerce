/**
 *
 * MerchantSearch
 *
 */

import React from 'react';

import SearchBar from '../../Common/SearchBar';

const MerchantSearch = props => {
  return (
    <div className='mb-3'>
      <SearchBar
        name='التاجر'
        placeholder='اكتب البريد الإلكتروني أو رقم الهاتف أو العلامة التجارية أو الحالة'
        btnText='Search'
        onSearch={props.onSearch}
        onBlur={props.onBlur}
        onSearchSubmit={props.onSearchSubmit}
      />
    </div>
  );
};

export default MerchantSearch;

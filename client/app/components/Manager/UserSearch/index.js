/**
 *
 * UserSearch
 *
 */

import React from 'react';

import SearchBar from '../../Common/SearchBar';

const UserSearch = props => {
  return (
    <div className='mb-3'>
      <SearchBar
        name='المعرف الخاص بك'
        placeholder='يرجى كتابة المعرف او البريد الالكتروني'
        btnText='بحث'
        onSearch={props.onSearch}
        onBlur={props.onBlur}
        onSearchSubmit={props.onSearchSubmit}
      />
    </div>
  );
};

export default UserSearch;

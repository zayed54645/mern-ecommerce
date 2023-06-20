/**
 *
 * UserList
 *
 */

import React from 'react';

import { formatDate } from '../../../utils/date';
import UserRole from '../UserRole';

const UserList = props => {
  const { users } = props;

  return (
    <div className='u-list'>
      {users.map((user, index) => (
        <div key={index} className='mt-3 px-4 py-3 user-box'>
          <label className='text-black'>الاسم</label>
          <p className='fw-medium'>
            {user?.firstName ? `${user?.firstName} ${user?.lastName}` : 'N/A'}
          </p>
          <label className='text-black'>البريدالالكتروني</label>
          <p>{user?.email ?? '-'}</p>
          <label className='text-black'>الموزع</label>
          <p>{user?.provider}</p>
          <label className='text-black'>تم انشاء الحساب</label>
          <p>{formatDate(user?.created)}</p>
          <label className='text-black'>القاعده</label>
          <p className='mb-0'>
            <UserRole user={user} className='d-inline-block mt-2' />
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserList;

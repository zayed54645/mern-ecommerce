/**
 *
 * ResetPasswordForm
 *
 */

import React from 'react';

import { Row, Col } from 'reactstrap';

import Input from '../Input';
import Button from '../Button';

const ResetPasswordForm = props => {
  const {
    resetFormData,
    formErrors,
    isToken,
    resetPasswordChange,
    resetPassword
  } = props;

  const handleSubmit = event => {
    event.preventDefault();
    resetPassword();
  };

  return (
    <div className='reset-password-form'>
      <form onSubmit={handleSubmit} noValidate>
        <Row>
          <Col xs='12' lg='6'>
            <Input
              type={'password'}
              error={formErrors['password']}
              label={'كلمة المرور'}
              name={'password'}
              placeholder={isToken ? 'كلمة المرور' : 'كلمة المرور القديمة'}
              value={resetFormData.password}
              onInputChange={(name, value) => {
                resetPasswordChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' lg='6'>
            <Input
              type={'password'}
              error={formErrors['confirmPassword']}
              label={'تأكيد كلمة المرور'}
              name={'confirmPassword'}
              placeholder={'تأكيد كلمة المرور'}
              value={resetFormData.confirmPassword}
              onInputChange={(name, value) => {
                resetPasswordChange(name, value);
              }}
            />
          </Col>
        </Row>
        <hr />
        <div className='reset-actions'>
          <Button type='submit' text='استعادة كلمة المرور' />
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordForm;

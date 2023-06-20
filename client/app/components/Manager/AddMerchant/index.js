/**
 *
 * AddMerchant
 *
 */

import React from 'react';

import { Row, Col } from 'reactstrap';

import Input from '../../Common/Input';
import Button from '../../Common/Button';

const AddMerchant = props => {
  const {
    merchantFormData,
    formErrors,
    isSubmitting,
    submitTitle = 'Submit',
    merchantChange,
    addMerchant
  } = props;

  const handleSubmit = event => {
    event.preventDefault();
    addMerchant();
  };

  return (
    <div className='add-merchant'>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col xs='12'>
            <Input
              type={'text'}
              error={formErrors['name']}
              label={'الاسم'}
              name={'name'}
              placeholder={'الاسم الكامل'}
              value={merchantFormData.name}
              onInputChange={(name, value) => {
                merchantChange(name, value);
              }}
            />
          </Col>
          <Col xs='12'>
            <Input
              type={'text'}
              error={formErrors['email']}
              label={'اضافة البريد الالكتروني'}
              name={'email'}
              placeholder={'بريدك الالكتروني'}
              value={merchantFormData.email}
              onInputChange={(name, value) => {
                merchantChange(name, value);
              }}
            />
          </Col>
          <Col xs='12'>
            <Input
              type={'text'}
              error={formErrors['phoneNumber']}
              label={'رقم الهاتف'}
              name={'phoneNumber'}
              placeholder={'Your Phone Number'}
              value={merchantFormData.phoneNumber}
              onInputChange={(name, value) => {
                merchantChange(name, value);
              }}
            />
          </Col>
          <Col xs='12'>
            <Input
              type={'text'}
              error={formErrors['brandName']}
              label={'العلامة التجارية'}
              name={'brand'}
              placeholder={'العلامة التجارية لعملك'}
              value={merchantFormData.brand}
              onInputChange={(name, value) => {
                merchantChange(name, value);
              }}
            />
          </Col>
          <Col xs='12'>
            <Input
              type={'textarea'}
              error={formErrors['business']}
              label={'عمل'}
              name={'business'}
              placeholder={'يرجى وصف عملك'}
              value={merchantFormData.business}
              onInputChange={(name, value) => {
                merchantChange(name, value);
              }}
            />
          </Col>
        </Row>
        <hr />
        <div className='add-merchant-actions'>
          <Button type='submit' text={submitTitle} disabled={isSubmitting} />
        </div>
      </form>
    </div>
  );
};

export default AddMerchant;

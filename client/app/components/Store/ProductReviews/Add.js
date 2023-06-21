/**
 *
 * Add
 *
 */

import React from 'react';

import { Row, Col } from 'reactstrap';

import SelectOption from '../../Common/SelectOption';
import Input from '../../Common/Input';
import Button from '../../Common/Button';

const recommedableSelect = [
  { value: 1, label: 'نعم' },
  { value: 0, label: 'لا' }
];

const Add = props => {
  const { reviewFormData, reviewChange, reviewFormErrors, addReview } = props;

  const handleSubmit = event => {
    event.preventDefault();
    addReview();
  };

  return (
    <div className='bg-white p-4 box-shadow-primary add-review'>
      <form onSubmit={handleSubmit} noValidate>
        <h3 className='mb-3'>Add Review</h3>
        <Row>
          <Col xs='12' md='12'>
            <Input
              type={'text'}
              error={reviewFormErrors['title']}
              label={'العنوان'}
              name={'title'}
              placeholder={'ادخل عنوان التقييم'}
              value={reviewFormData.title}
              onInputChange={(name, value) => {
                reviewChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <Input
              type={'textarea'}
              error={reviewFormErrors['review']}
              label={'التعليق'}
              name={'review'}
              placeholder={'ادخل تعليق'}
              value={reviewFormData.review}
              onInputChange={(name, value) => {
                reviewChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <Input
              type={'stars'}
              error={reviewFormErrors['rating']}
              label={'التقييم'}
              name={'rating'}
              value={reviewFormData.rating}
              onInputChange={(name, value) => {
                reviewChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <SelectOption
              error={reviewFormErrors['isRecommended']}
              label={'هل توصي بهذا المنتج؟'}
              placeholder={'نعم'}
              name={'isRecommended'}
              value={reviewFormData.isRecommended}
              options={recommedableSelect}
              handleSelectChange={value => {
                reviewChange('isRecommended', value);
              }}
            />
          </Col>
        </Row>
        <div className='mt-4'  style={{ textAlign: 'left' }}>
          <Button type='submit' className="rev-btn" text='نشر التعليق' />
        </div>
      </form>
    </div>
  );
};

export default Add;

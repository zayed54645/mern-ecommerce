/*
 *
 * Add
 *
 */

import React from 'react';

import { connect } from 'react-redux';

import actions from '../../actions';

import SubPage from '../../components/Manager/SubPage';
import AddMerchant from '../../components/Manager/AddMerchant';

class Add extends React.PureComponent {
  render() {
    const {
      history,
      merchantFormData,
      formErrors,
      isSubmitting,
      merchantChange,
      addMerchant
    } = this.props;

    return (
      <SubPage
        title='اضافة تاجر'
        actionTitle='الغاء'
        handleAction={() => history.goBack()}
      >
        <AddMerchant
          merchantFormData={merchantFormData}
          formErrors={formErrors}
          isSubmitting={isSubmitting}
          submitTitle='اضافة تاجر'
          merchantChange={merchantChange}
          addMerchant={() => addMerchant(true)}
        />
      </SubPage>
    );
  }
}

const mapStateToProps = state => {
  return {
    merchantFormData: state.merchant.merchantFormData,
    formErrors: state.merchant.formErrors,
    isSubmitting: state.merchant.isSubmitting,
    isLoading: state.merchant.isLoading
  };
};

export default connect(mapStateToProps, actions)(Add);

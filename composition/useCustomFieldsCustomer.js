//import { CUSTOMER } from '../src/constants';
import useCustomFieldsCustomer from './ct/useCustomFieldsCustomer';
import store from '../src/store';

export default () => {
    const customer = store.state.customer;
    //const customer = JSON.parse(localStorage.getItem(CUSTOMER));
    console.log("WZ useCustomerFieldsCustomer de localStorage" , customer)
    console.log("WZ useCustomerFieldsCustomer de STORE", store.state.customer)
    const { customerId } = customer;
    const { customFields, loading, } = useCustomFieldsCustomer({
        customerId,
    });
    return { loading, customFields };
};
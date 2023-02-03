//import { CUSTOMER } from '../src/constants';
import useCustomFieldsCustomer from './ct/useCustomFieldsCustomer';
import store from '../src/store';

export default () => {
    const customer = store?.state?.customer;
    //const customer = JSON.parse(localStorage.getItem(CUSTOMER));
    const { customerId } = customer;
    const { customFields, loading, } = useCustomFieldsCustomer({
        customerId,
    });
    return { loading, customFields };
};
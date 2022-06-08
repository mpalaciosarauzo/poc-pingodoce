import { CUSTOMER } from '../src/constants';
import useCustomFieldsCustomer from './ct/useCustomFieldsCustomer';

export default () => {
    const customer = JSON.parse(localStorage.getItem(CUSTOMER));
    const { customerId } = customer;
    const { customFields, loading, } = useCustomFieldsCustomer({
        customerId,
    });
    return { loading, customFields };
};
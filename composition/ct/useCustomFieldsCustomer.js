import gql from "graphql-tag";
import { useState } from 'react';
import useQueryFacade from "../useQueryFacade";

function useCustomFieldsCustomer({ customerId }) {
    const [customFields, setCustomFields] = useState(null);
    const query = gql`
        query ($customerId: String) {customer(id: $customerId) { custom { customFieldsRaw { name value} } }}`;
    
    const { loading, error } = useQueryFacade(query, {
        variables: { customerId },
        onCompleted: (data) => {
            console.log(data);
            if (data.customer.custom) {
                setCustomFields(data.customer.custom.customFieldsRaw);
            }
        }
    });

    return {
        loading,
        error,
        customFields,
    };
}

export default useCustomFieldsCustomer;
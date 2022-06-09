import gql from "graphql-tag";
import useQueryFacade from "../useQueryFacade";
import { useState } from 'react';

function useMyPromos({ idsPromos, locale }) {
    const [promos, setPromos] = useState([]);

    const where = "(" + idsPromos.map((id) => {
        return `id="${id}"`;
    }).join(' or ') + ") and isActive=true";

    const query = gql`
        query ($where: String, $locale: Locale!) {
            cartDiscounts(where: $where) {
                results {
                    id
                    validUntil
                    name(locale: $locale)
                    description(locale: $locale)
                }
            }
        }`;

    const { loading, error } = useQueryFacade(query, {
        variables: { where, locale },
        onCompleted: (data) => {
            if (!data) {
                return;
            }
            setPromos(data.cartDiscounts.results);
        }
    });

    return { loading, error, promos };
}

export default useMyPromos;
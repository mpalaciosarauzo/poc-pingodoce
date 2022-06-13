import gql from "graphql-tag";
import useQueryFacade from "../useQueryFacade";
import { useState } from 'react';

function useVariantSelector ({ sku }) {
    const query = gql`
    query VariantSelector($country: Country!, $currency: Currency!, $sku: String!) {
      product(sku: $sku) {
        id
        masterData {
          current {
            allVariants {
              sku
              price(country: $country ,currency: $currency) {
                value {
                  currencyCode
                  centAmount
                }
              }                  
              attributesRaw {
                name
                value
              }
            }
            variant(sku: $sku) {
              attributesRaw {
                name
                value
              }
            }
          }
        }
      }
    }`;

    const [product, setProduct] = useState();

    const { loading, error } = useQueryFacade(query, {
        variables: {
            currency: 'EUR',
            country: 'ES',
            sku: sku,
        },
        onCompleted: (data) => {
            if (!data) {
                return
            }

            setProduct(data.product);
        }
    });

    return { loading, error, product };
}

export default useVariantSelector;
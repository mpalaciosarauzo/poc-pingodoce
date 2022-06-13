import gql from 'graphql-tag';
import useQueryFacade from '../useQueryFacade';
import useLocale from '../useLocale';
import { useState }  from 'react';

function useProduct({
    sku,
    channel,
    customerGroup,
    preview,
    country,
}) {
    const query = gql`
    query Product(
      $locale: Locale!,
      $sku: String!,
      $currency: Currency!,
      $country: Country!,
      $customerGroupId:String,
      $where: String!,
      $preview: Boolean!,
    ) {
      inventoryEntries(where: $where) {
        results {
          id
          quantityOnStock
          availableQuantity
        }
      }
      
      product(sku: $sku) {
        id
        masterData {
          current @skip(if: $preview) {
            name(locale: $locale)
            slug(locale: $locale)
            variant(sku: $sku) {
              price(currency: $currency,country:$country,customerGroupId:$customerGroupId) {
                value {
                  ...printPrice
                }
                discounted {
                  value {
                   ...printPrice
                  }
                }
              }
            }
          }

          staged @include(if: $preview) {
            name(locale: $locale)
            slug(locale: $locale)
            variant(sku: $sku) {
              price(currency: $currency,country:$country,customerGroupId:$customerGroupId) {
                value {
                  ...printPrice
                }
                discounted {
                  value {
                   ...printPrice
                  }
                }
              }
            }
          }
        }
      }
    }
    fragment printPrice on BaseMoney {
      centAmount
      fractionDigits
      currencyCode
    }`;

    const { locale } = useLocale();
    const scs = channel ? ` and supplyChannel(id="${channel}")` : '';

    const [product, setProduct] = useState();
    const [inventory, setInventory] = useState();

    const { loading, error } = useQueryFacade(query, {
        variables: {
          where: `sku="${sku}"${scs}`,
          locale: locale,
          currency: 'EUR',
          customerGroupId: customerGroup,
          sku: sku,
          country: country,
          preview: preview === 'true' || false,
        },
        onCompleted: (data) => {
            setProduct(data);
            setInventory(data.inventoryEntries && data.inventoryEntries.results && data.inventoryEntries.results[0]);
        }
    });

    return {
        product,
        inventory,
        loading,
        error,
    };
}

export default useProduct;
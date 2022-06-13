import gql from "graphql-tag";
import useLocale from "../useLocale";
import useQueryFacade from "../useQueryFacade";
import { useState } from 'react';

function useTranslation() {
    const { locale } = useLocale();

    const query = gql`
    query Translation($locale: Locale!, $type:String!) {
      productType(key:$type) {
        attributeDefinitions(limit:50) {
          results {
            name
            label(locale:$locale)
          }
        }
      }
    }`;

    const [attributeTranslation, setAttributeTranslation] = useState();

    const { loading, error } = useQueryFacade(query, {
        variables: {
            locale,
            type: 'frescos',
        },
        onCompleted: (data) => {
            if (!data) {
                return
            }
            const _attribute = data.productType.attributeDefinitions.results.reduce(
                (result, item) => result.set(item.name, item.label), new Map(),
            );
            setAttributeTranslation(_attribute);
        }
    });

    return { loading, error, attributeTranslation };
}

export default useTranslation;
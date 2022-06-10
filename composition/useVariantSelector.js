import useVariantSelectorSKU from "./ct/useVariantSelector";

function useVariantSelector({ sku }) {
    const { loading, error, product } = useVariantSelectorSKU({ sku });

    return { loading, error, product };
}

export default useVariantSelector;
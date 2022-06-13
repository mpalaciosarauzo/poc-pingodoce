import useProduct from "./ct/useProduct";

function useMyProduct({
    sku,
    channel,
    customerGroup,
    preview,
    country,
}) {
    const { product, inventory, loading, error } = useProduct({sku,
        channel,
        customerGroup,
        preview,
        country,});

    return { product, inventory, loading, error };
}

export default useMyProduct;
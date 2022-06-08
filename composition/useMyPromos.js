// import useLocale from './useLocale';
import usePromos from './ct/useMyPromos';

function useMyPromos({ idsPromos, locale }) {
    // const { locale } = useLocale();
    const { error, loading, promos } = usePromos({ idsPromos, locale });

    return { error, loading, promos };
}

export default useMyPromos;
import useLocale from './useLocale';
import useMyOrderBasic from './ct/useMyOrder';

function useOrder(id) {
  const { locale } = useLocale();
  const { loading, error, order } = useMyOrderBasic({
    locale,
    id,
  });

  return { loading, error, order };
}
export default useOrder;

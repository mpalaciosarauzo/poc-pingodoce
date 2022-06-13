import _useTranslation from './ct/useTranslation';

function useTranslation() {
    const { loading, error, attributeTranslation } = _useTranslation();

    return { loading, error, attributeTranslation };
}

export default useTranslation;
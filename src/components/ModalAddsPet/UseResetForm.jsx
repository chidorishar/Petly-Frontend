import { useCallback } from 'react';
import { useFormikContext } from 'formik';

export const useResetForm = () => {
  const { resetForm } = useFormikContext();

  return useCallback(() => {
    resetForm();
  }, [resetForm]);
};

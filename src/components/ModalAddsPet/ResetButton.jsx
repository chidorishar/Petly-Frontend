import React from 'react';
import { useResetForm } from './UseResetForm';

export const ResetButton = () => {
  const resetForm = useResetForm();

  return (
    <>
      <button
        type="button"
        style={{ display: 'none' }}
        onClick={resetForm}
      ></button>
    </>
  );
};

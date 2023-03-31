import { useState } from 'react';

import { Modal, AddNoticeForm } from 'components';

const AddNoticeButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(toggle => !toggle);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleToggle}>Add pet</button>
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <AddNoticeForm handleClose={handleClose} />
      </Modal>
    </>
  );
};

export { AddNoticeButton };

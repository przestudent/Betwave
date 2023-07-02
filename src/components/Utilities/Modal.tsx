import { KeyboardEvent, PropsWithChildren } from 'react';

/* eslint-disable no-undef */
function Modal({
  openModal,
  children,
}: PropsWithChildren & {
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className='modal-backdrop'
      onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Escape') {
          openModal(false);
        }
      }}
    >
      <div className='modal-dialog-settings'>
        {children}
        <button className='modal-button' onClick={() => openModal(false)}>
          X
        </button>
      </div>
    </div>
  );
}

export default Modal;

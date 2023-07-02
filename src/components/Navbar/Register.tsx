'use client';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from '../Utilities/Modal';

function Register() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <a className='register' onClick={() => setShowLogin(true)}>
        <div>Register</div>
      </a>
      {showLogin &&
        createPortal(<LoginModal closeModal={setShowLogin} />, document.body)}
    </>
  );
}
function LoginModal({
  closeModal,
}: {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Modal openModal={closeModal}>
      <h2>Register</h2>
      <form id='form-register' action=''>
        <label>
          First Name
          <input type='text' name='register-first-name' />
        </label>
        <label>
          Second Name
          <input type='text' name='register-second-name' />
        </label>
        <div>
          <label htmlFor='register-email'>Email</label>
          <input type='email' name='register-email' id='register-email' />
        </div>
        <div>
          <label htmlFor='register-password'>Password</label>
          <input
            type='password'
            name='register-password'
            id='register-password'
          />
        </div>
        <button className='glint-effect button-styler'>Register</button>
      </form>
    </Modal>
  );
}

export default Register;

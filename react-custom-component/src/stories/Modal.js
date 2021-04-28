import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './modal.css';

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='App'>
        <button onClick={openModalHandler} className='modal_btn'>
          {isOpen === false ? 'Open Modal' : 'Close Modal'}
        </button>
        {isOpen === true ? <div className='modal'>HELLO CODESTATES!</div> : null}
      </div>
    </>
  );
};

Modal.propTypes = {
  /**
     * Is this the principal call to action on the page?
     */
  primary: PropTypes.bool,
  /**
     * What background color to use
     */
  backgroundColor: PropTypes.string,
  /**
     * How large should the Modal be?
     */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
     * Modal contents
     */
  label: PropTypes.string.isRequired,
  /**
     * Optional click handler
     */
  onClick: PropTypes.func
};

Modal.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined
};

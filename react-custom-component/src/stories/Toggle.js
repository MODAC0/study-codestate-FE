import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './toggle.css';

export const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleClick = (e) => {
    setIsOn(!isOn);
    if (isOn === true) {
      e.target.className = 'toggle_btn';
    } else {
      e.target.className = 'toggle_btn on';
    }
  };
  return (
    <>
      <div className='toggle'>
        <div className='toggle_btn' onClick={toggleClick} />
      </div>
      {isOn === false ? 'Toggle Switch OFF' : 'Toggle Switch ON'}
    </>
  );
};

Toggle.propTypes = {
  /**
     * Is this the principal call to action on the page?
     */
  primary: PropTypes.bool,
  /**
     * What background color to use
     */
  backgroundColor: PropTypes.string,
  /**
     * How large should the Toggle be?
     */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
     * Toggle contents
     */
  label: PropTypes.string.isRequired,
  /**
     * Optional click handler
     */
  onClick: PropTypes.func
};

Toggle.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined
};

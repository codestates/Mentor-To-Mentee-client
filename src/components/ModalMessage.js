import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import CloseButton from './CloseButton';

function Modal({
  className,
  onClose,
  maskClosable,
  closable,
  visible,
  children,
  isMiddle,
  isDelete,
  canNotLogin,
  applymentor,
}) {
  const onMaskClick = e => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const close = e => {
    if (onClose) {
      onClose(e);
    }
  };

  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex='-1'
        visible={visible}
      >
        <ModalInner
          tabIndex='0'
          className='modal-inner'
          isMiddle={isMiddle}
          isDelete={isDelete}
          canNotLogin={canNotLogin}
          applymentor={applymentor}
        >
          {closable && <CloseButton close={close} />}
          <div className='message'>{children}</div>
        </ModalInner>
      </ModalWrapper>
    </>
  );
}

Modal.defaultProps = {
  visible: false,
  closable: true,
  maskClosable: true,
};

Modal.propTypes = {
  visible: PropTypes.bool,
};

export const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${props => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

export const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${props => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  height: 80px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  .message {
    padding-top: 25px;
    float: left;
  }
  ${props =>
    props.isMiddle &&
    css`
      padding-top: 8px;
      padding-left: 30px;
    `}
  ${props =>
    props.isDelete &&
    css`
      padding-top: 8px;
      padding-left: 20px;
    `}
  ${props =>
    props.applymentor &&
    css`
      left: 37%;
      padding-top: 8px;
      padding-left: 30px;
    `}
    ${props =>
    props.canNotLogin &&
    css`
      padding-top: 10px;
      padding-left: 40px;
      padding-right: 5px;
      padding-bottom: 30px;
      height: 100px;
    `}
`;

export default Modal;

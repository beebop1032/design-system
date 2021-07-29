import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { FocusTrap } from '../FocusTrap';
import { Portal } from '../Portal';
import { ModalContext } from './ModalContext';

const ModalWrapper = styled.div`
  position: absolute;
  inset: 0;
  // this is theme.colors.neutral200 with opacity
  background: rgb(220, 220, 228, 0.8);
  padding: 0 ${({ theme }) => theme.spaces[8]};
`;

const ModalContent = styled(Box)`
  max-width: ${830 / 16}rem;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 10%;
`;

export const ModalLayout = ({ onClose, labelledBy, ...props }) => {
  return (
    <Portal>
      <ModalContext.Provider value={onClose}>
        <ModalWrapper>
          <FocusTrap onEscape={onClose}>
            <ModalContent
              aria-labelledby={labelledBy}
              background="neutral0"
              hasRadius
              shadow="popupShadow"
              role="dialog"
              aria-modal={true}
              {...props}
            />
          </FocusTrap>
        </ModalWrapper>
      </ModalContext.Provider>
    </Portal>
  );
};

ModalLayout.propTypes = {
  labelledBy: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
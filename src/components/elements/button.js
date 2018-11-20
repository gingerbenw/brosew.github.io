import React from 'react';
import styled from 'styled-components';

const Button = (props) => <StyledButton>{props.children}</StyledButton>;

export default Button;

const StyledButton = styled.button``;

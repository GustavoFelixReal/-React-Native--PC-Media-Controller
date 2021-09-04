import { ReactChild, ReactChildren, ReactNode } from 'hoist-non-react-statics/node_modules/@types/react';
import React from 'react';
import { ButtonContainer, Label } from "./styles";

interface ButtonProps {
  children?: ReactNode | ReactChild | ReactChildren
  onPressIn: () => void;
}

export default function Button({ children, onPressIn, ...rest }: ButtonProps) {
  return (
    <ButtonContainer onPressIn={onPressIn} {...rest}>
      <Label>{children}</Label>
    </ButtonContainer>
  );
}
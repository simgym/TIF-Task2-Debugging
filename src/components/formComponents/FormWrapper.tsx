import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  InputGroup,
  FormControlProps,
} from "@chakra-ui/react";

export interface IFormWrapperProps {
  label?: React.ReactNode;
  error?: string;
  wrapperProps?: FormControlProps;
  children?: React.ReactNode;
  helperText?: React.ReactNode;
  isInvalid: boolean;
  touched?: any;
}

const FromWrapper: React.FC<IFormWrapperProps> = ({
  label,
  isInvalid,
  error,
  children,
  helperText,
  wrapperProps = {},
  touched,
}) => {
  return (
    <FormControl width="100%" mb="24px" isInvalid={isInvalid} {...wrapperProps}>
      {label && <FormLabel>{label}</FormLabel>}
      <InputGroup width="100%" alignItems="center">
        {children}
      </InputGroup>
      {error && touched && (
        <FormErrorMessage color="red" fontSize=".75rem">
          {error}
        </FormErrorMessage>
      )}
      {helperText && (
        <FormHelperText fontSize="0.75rem" color="gray.400">
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default FromWrapper;

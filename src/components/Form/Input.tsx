import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

<<<<<<< HEAD
const InputBase: ForwardRefRenderFunction<HTMLInputElement,  InputProps> = ({ name, label, error = null, ...rest }, ref) => {
  return (
    <FormControl  isInvalid={!!error} >
      { !!label && (<FormLabel htmlFor={name}>{label}</FormLabel>) }

=======
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error = null, ...props }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
>>>>>>> 66245bf1e2c0193fa4c92b0cd906b77d7088ea5b
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
<<<<<<< HEAD
        backgroundColor="gray.900"
        variant="filled"
        _hover={{ 
          bgColor: "gray.900"
        }}
        size="lg"
        ref={ref}
        { ...rest }
      />

      { !!error && (
        <FormErrorMessage>
          { error.message }
        </FormErrorMessage>
=======
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900"
        }}
        size="lg"
        { ...props }
        ref={ref}
      />

      { !!error && (
        <FormErrorMessage>{error?.message}</FormErrorMessage>
>>>>>>> 66245bf1e2c0193fa4c92b0cd906b77d7088ea5b
      ) }
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
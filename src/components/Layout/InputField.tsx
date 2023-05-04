import React from 'react';
import { FormControl, Input } from "@chakra-ui/react";

type InputFieldProps = {
    name: string;
    placeholder: string;
    type: string;
    isRequired?: boolean;
    mb?: number;
  };
  

const InputField: React.FC<InputFieldProps> = ({
    name,
    placeholder,
    type,
    isRequired,
    mb
}) => {
  return (
    <div>InputField</div>
  )
}

export default InputField
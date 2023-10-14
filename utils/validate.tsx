import { useState } from "react";
import { Alert } from "react-native";

export const validateName = (name: string) => {
    if (name.length > 25) {
      alert("Tên của bạn quá dài.");
      return false;
    }
    return true;
  };

  export const validateMaUV = (name: string) => {
    if (name.length < 8) {
      alert("Mã ứng viên phải lớn hơn hoặc bằng 8.");
      return false;
    }
    return true;
  };

  export const isNotEmpty = () => {
    const [inputValue, setInputValue] = useState('');

    const handleButtonPress = () => {
        if (inputValue.trim() === '') {
          alert('Yêu cầu không được để trống.');
        } else {
          setInputValue(inputValue)
        }
      };

    return handleButtonPress()
  }
  
  export const validateEmail = (valueToValidate: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(valueToValidate)) {
      return true;
    } else {
      alert("Email không đúng cú pháp");
      return false;
    }
  };
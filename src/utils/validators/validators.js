export const required = (value) => {
  if (value) {
    return undefined;
  }

  return "Field is required";
};

export const requiredWithoutMessage = (value) => {
  if (value) {
    return undefined;
  }

  return "-";
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value && value.length > maxLength) {
    return `Max length is ${maxLength} symbols`;
  }

  return undefined;
};

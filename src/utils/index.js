export const truncateAddress = (address, digits) => {
  if (address) {
    return address.length > digits
      ? address.substr(0, digits - 1) +
          "..." +
          address.substr(address.length - (digits - 1), address.length - 1)
      : address;
  } else {
    return "";
  }
};

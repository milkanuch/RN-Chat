export const getFormattedPhoneNumber = (phoneNumber: string) => {
  const regex = /[()\s-]/g;
  const formattedPhoneNumber = phoneNumber.replace(regex, '');

  return `+380${formattedPhoneNumber}`;
};

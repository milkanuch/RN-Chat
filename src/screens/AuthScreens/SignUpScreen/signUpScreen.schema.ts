import * as yup from 'yup';

export const signUpScheme = yup.object().shape({
  nickname: yup.string().required('Nickname is required'),
  biography: yup.string().required('Biography is required'),
});

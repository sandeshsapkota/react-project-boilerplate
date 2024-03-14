import * as yup from 'yup';

const loginSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(4, 'Username must be at least 4 characters'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 4 characters'),
});

export default loginSchema;

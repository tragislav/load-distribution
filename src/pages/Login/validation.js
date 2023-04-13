import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().min(1).max(32).required(),
});

export default schema;

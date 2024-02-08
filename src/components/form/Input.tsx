interface InputFieldTypes {
  label: string;
  name: string;
  errors: any;
  type?: string;
  register: (arg: any) => any;
}
const InputField = (props: InputFieldTypes) => {
  const { label, name, register, errors, type } = props;
  return (
    <div className="grid gap-1">
      <label htmlFor={name}>{label}</label>
      <input
        className="bg-gray-100 rounded-md py-1.5 px-2"
        type={type || 'text'}
        id={name}
        {...register(name)}
      />
      {errors[name] && (
        <p className=" text-red-600 text-xs mt-1.5">{errors[name].message}</p>
      )}
    </div>
  );
};

export default InputField;

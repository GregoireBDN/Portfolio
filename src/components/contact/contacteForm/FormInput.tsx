interface FormInputProps {
  id: string;
  label: string;
  type?: "text" | "email";
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

const FormInput = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  required = false,
}: FormInputProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2 font-sans"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg 
          focus:ring-primary-500 focus:border-primary-500 font-sans"
        required={required}
      />
    </div>
  );
};

export default FormInput;

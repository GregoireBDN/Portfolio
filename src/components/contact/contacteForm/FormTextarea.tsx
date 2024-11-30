interface FormTextareaProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  required?: boolean;
}

const FormTextarea = ({
  id,
  label,
  value,
  onChange,
  rows = 6,
  required = false,
}: FormTextareaProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2 font-sans"
      >
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg 
          focus:ring-primary-500 focus:border-primary-500 font-sans"
        required={required}
      />
    </div>
  );
};

export default FormTextarea;

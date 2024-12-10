import React from 'react';

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  onChange,
  error,
  type = 'text',
  required = false,
}) => (
  <div className="form-group">
    <label>
      {label} {required && <span>*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`form-control ${error ? 'is-invalid' : ''}`}
      aria-label={label}
      aria-invalid={!!error}
      autoComplete="on"
    />
    {error && <span className="error">{error}</span>}
  </div>
);

export default InputField;

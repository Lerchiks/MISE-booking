'use client';
import style from './FormField.module.css';

interface FormFieldProps {
  id: string;
  label: string;
  value: string | number;
  min?: number;
  max?: number;
  placeholder?: string;
  type?: 'text' | 'tel' | 'date' | 'time' | 'number';
  onChange: (val: string) => void;
  error: string;
}

export function FormField({
  id,
  label,
  value,
  min,
  max,
  placeholder,
  type,
  onChange,
  error,
}: FormFieldProps) {
  return (
    <div className={style.field}>
      <div className={style.content}>
        <label htmlFor={id}>{label}</label>
        <input
          style={{ borderColor: error ? 'red' : '' }}
          id={id}
          value={value}
          placeholder={placeholder}
          type={type}
          min={min}
          max={max}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
      <span className={`${style.error} ${error ? style.visible : ''}`}>{error}</span>
    </div>
  );
}

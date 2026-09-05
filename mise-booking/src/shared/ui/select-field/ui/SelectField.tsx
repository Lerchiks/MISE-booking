import { useState } from 'react';
import style from './SelectField.module.css';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  id: string;
  label: string;
  value: string;
  error?: string;
  options: SelectOption[];
  onChange: (value: string) => void;
}

export function SelectField({ id, label, value, error, options, onChange }: SelectFieldProps) {
  const selectedOptionInd = options.findIndex((option) => option.value === value);

  const handlePrev = () => {
    if (selectedOptionInd <= 0) return;
    onChange(options[selectedOptionInd - 1].value);
  };

  const handleNext = () => {
    if (selectedOptionInd >= options.length - 1) return;
    onChange(options[selectedOptionInd + 1].value);
  };

  const selectedOption = options[selectedOptionInd];

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <label htmlFor={id}>{label}</label>
        <div className={style.select}>
          <button type="button" onClick={handlePrev} style={{ cursor: 'pointer' }}>
            {'<'}
          </button>
          <div className={style['selected-label']} id={id}>
            <span>{selectedOption?.label || 'Выберите значение'}</span>
          </div>
          <button type="button" onClick={handleNext} style={{ cursor: 'pointer' }}>
            {'>'}
          </button>
        </div>
      </div>
      <span className={`${style.error} ${error ? style.visible : ''}`}>{error}</span>
    </div>
  );
}

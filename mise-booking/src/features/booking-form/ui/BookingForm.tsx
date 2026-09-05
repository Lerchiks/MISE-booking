'use client';

import { FormField } from '@/shared/ui/form-field/ui/FormField';
import { BookingFormData } from '@/shared/types/common';
import { useState } from 'react';
import type { BookingFormError } from '@/shared/types/common';
import { validateBookingForm } from '../util/validation';
import { SubmitButton } from '@/shared/ui/submit-button';
import { useRouter } from 'next/navigation';
import { SpinLoader } from '@/shared/ui/spin';
import { SelectField } from '@/shared/ui/select-field/ui';
import style from './BookingForm.module.css';

export function BookingForm() {
  const [values, setValues] = useState<BookingFormData>({
    name: '',
    phone: '',
    date: '',
    time: '12:00',
    guests: 1,
    status: 'idle',
  });

  const [errors, setErrors] = useState<BookingFormError>({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [, setStatusBooking] = useState('idle');

  const handlerChange = (field: keyof BookingFormData, value: string) => {
    setValues((prev) => ({
      ...prev,
      [field]: field === 'guests' ? Number(value) : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: undefined,
    }));
  };
  const router = useRouter();

  const handleSubmit = (event: React.SubmitEvent) => {
    event.preventDefault();
    const validationErrors = validateBookingForm(values);

    const hasErrors = Object.values(validationErrors).some(Boolean);
    if (hasErrors) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmit(true);
    setStatusBooking('loading');

    setTimeout(() => {
      setStatusBooking('success');

      const params = new URLSearchParams({
        name: values.name,
        phone: values.phone,
        date: values.date,
        time: values.time,
        guests: String(values.guests),
        status: 'success',
      });

      router.push(`/booking-confirmation?${params.toString()}`);
    }, 5000);
  };

  const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((guest) => ({
    value: String(guest),
    label: String(guest),
  }));

  const timeOptions = Array.from({ length: 11 }, (_, index) => {
    const hour = index + 12;
    return {
      value: `${hour}:00`,
      label: `${hour}:00`,
    };
  });

  return (
    <form onSubmit={handleSubmit} className={style.container}>
      <FormField
        id="name"
        label="Имя Гостя"
        value={values.name}
        error={errors.name || ''}
        placeholder="Ваше имя"
        onChange={(val) => {
          handlerChange('name', val);
        }}
      />

      <FormField
        id="phone"
        label="Номер телефона"
        value={values.phone}
        error={errors.phone || ''}
        placeholder="+79993332211"
        onChange={(val) => {
          handlerChange('phone', val);
        }}
      />

      <FormField
        id="date"
        label="Дата бронирования"
        value={values.date}
        error={errors.date || ''}
        placeholder="дд.мм.гггг"
        onChange={(val) => {
          handlerChange('date', val);
        }}
      />

      <SelectField
        id="time"
        label="Время бронирования"
        value={String(values.time)}
        options={timeOptions}
        error={errors.time}
        onChange={(val: string) => {
          handlerChange('time', val);
        }}
      />

      <SelectField
        id="guests"
        label="Количество гостей"
        value={String(values.guests)}
        options={guestOptions}
        onChange={(val: string) => {
          handlerChange('guests', val);
        }}
      />

      <div className={style.submit}>
        <SubmitButton text={isSubmit ? 'Бронирую..' : 'Забронировать'} type="submit" />
        {isSubmit && <SpinLoader />}
      </div>
    </form>
  );
}

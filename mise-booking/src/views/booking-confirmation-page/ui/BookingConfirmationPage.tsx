'use client';

import style from './BookingConfirmationPage.module.css';
import { FaCheck } from 'react-icons/fa';
import { useSearchParams } from 'next/navigation';
import { BookingFormData } from '@/shared/types/common';

export function BookingConfirmationPage() {
  const searchParams = useSearchParams();

  const booking: BookingFormData = {
    name: searchParams.get('name') || '',
    phone: searchParams.get('phone') || '',
    date: searchParams.get('date') || '',
    time: searchParams.get('time') || '',
    guests: Number(searchParams.get('guests')) || 0,
    status: 'success',
  };

  return (
    <div className={style.container}>
      <div className={style['booking-info']}>
        <div className={style.field}>
          <label>Столик зарегистрирован на имя: </label>
          <div>{booking.name}</div>
        </div>
        <div className={style.field}>
          <label>На дату </label>
          <div>{booking.date}</div>
        </div>
        <div className={style.field}>
          <label>В </label>
          <div>{booking.time}</div>
        </div>
      </div>
      <div className={style.success}>
        <span>Ваша запись успешно подтверждена</span>
        <FaCheck className={style.check} />
      </div>
    </div>
  );
}

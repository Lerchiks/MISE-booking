import { BookingForm } from '@/features/booking-form';
import style from './BookingPage.module.css';
export function BookingPage() {
  return (
    <div className={style.container}>
      <h1 className={style.header}>Форма бронирования</h1>
      <BookingForm />
    </div>
  );
}

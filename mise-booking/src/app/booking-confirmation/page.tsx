import { BookingConfirmationPage } from '@/views/booking-confirmation-page';
import { Suspense } from 'react';

export default function Home() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <BookingConfirmationPage />
    </Suspense>
  );
}

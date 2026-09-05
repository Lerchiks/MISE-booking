import { SpinLoader } from '@/shared/ui/spin';
import { BookingConfirmationPage } from '@/views/booking-confirmation-page';
import { Suspense } from 'react';

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <SpinLoader />
        </div>
      }
    >
      <BookingConfirmationPage />
    </Suspense>
  );
}

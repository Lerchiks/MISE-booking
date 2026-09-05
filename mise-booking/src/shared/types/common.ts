export interface BookingFormData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  status: BookingStatus;
}

export type BookingFormError = Partial<Record<keyof BookingFormData, string>>;
export type BookingStatus = 'idle' | 'loading' | 'success';

import { BookingFormData } from '@/shared/types/common';
import type { BookingFormError } from '@/shared/types/common';

export function validateBookingForm(values: BookingFormData): BookingFormError {
  return {
    name: validateName(values.name),
    phone: validatePhone(values.phone),
    date: validateDate(values.date),
    time: validateTime(values.time, values.date),
    guests: validateGuests(values.guests),
  };
}

export function validateName(name: string): string | undefined {
  return !name.trim()
    ? 'Введите имя.'
    : name.trim().length < 2
      ? 'Необходимо минимум 2 символа.'
      : undefined;
}

export function validatePhone(phone: string): string | undefined {
  if (!phone.trim()) {
    return 'Введите номер телефона';
  }
  if (!/^[+\d\s()-]+$/.test(phone)) {
    return 'Введите корректный номер телефона';
  }
  if (phone.replace(/\D/g, '').length < 10) {
    return 'Номер телефона слишком короткий';
  }
  if (phone.replace(/\D/g, '').length > 11) {
    return 'Номер телефона слишком длинный';
  }
  return undefined;
}

export function validateDate(date: string): string | undefined {
  if (!date) {
    return 'Выберите дату';
  }

  const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;

  if (!dateRegex.test(date)) {
    return 'Введите дату в формате ДД.ММ.ГГГГ';
  }

  const [day, month, year] = date.split('.').map(Number);
  if (day > 31 || day < 1 || month - 1 > 12 || month - 1 < 1) {
    return 'Неверный формат';
  }
  const selectedDate = new Date(year, month - 1, day);
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  console.log('Выбрано:', selectedDate);
  console.log('Сегодня:', today);

  if (selectedDate < today) {
    return 'Нельзя выбрать прошедшую дату';
  }

  return undefined;
}

export function validateTime(time: string, date: string): string | undefined {
  if (!time) {
    return 'Выберите время';
  }

  const [hours, minutes] = time.split(':').map(Number);
  const [day, month, year] = date.split('.').map(Number);
  const selectedTime = new Date(year, month - 1, day, hours, minutes);

  const now = new Date();
  if (selectedTime < new Date()) return 'Это время уже прошло';

  return undefined;
}

export function validateGuests(guests: number): string | undefined {
  if (!Number.isInteger(guests)) {
    return 'Количество гостей должно быть целым числом';
  }

  if (guests < 1) {
    return 'Минимум 1 гость';
  }

  if (guests > 20) {
    return 'Максимум 20 гостей';
  }

  return undefined;
}

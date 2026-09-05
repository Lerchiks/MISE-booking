import { LinkButton } from '@/shared/ui/link-button';
import style from './HomePage.module.css';

export function HomePage() {
  return (
    <div className={style.container}>
      <span>Хотите забронировать столик?</span>
      <LinkButton text="Забронировать" route="/booking" />
    </div>
  );
}

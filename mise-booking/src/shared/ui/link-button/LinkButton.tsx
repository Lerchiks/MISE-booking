'use client';
import { useRouter } from 'next/navigation';
import style from './LinkButton.module.css';

interface LinkButtonProps {
  text: string;
  route: string;
}

export function LinkButton({ text, route }: LinkButtonProps) {
  const router = useRouter();
  return (
    <button
      className={style.link}
      onClick={() => {
        router.push(route);
      }}
    >
      {text}
    </button>
  );
}

import style from './SubmitButton.module.css';

interface SubmitButtonProps {
  text: string;
  type: 'submit' | 'reset' | 'button' | undefined;
}
export function SubmitButton({ text, type }: SubmitButtonProps) {
  return (
    <button type={type} className={style.submit}>
      {text}
    </button>
  );
}

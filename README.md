# MISE Booking

Веб-приложение для бронирования, построенное на Next.js с использованием FSD (Feature-Sliced Design) архитектуры.

## Стек технологий

- **Next.js** 16.3.4 (App Router)
- **React** 19.2.8
- **TypeScript** 5
- **Tailwind CSS** 4
- **Ant Design** 6.6.2
- **ESLint** + **Prettier**

## Установка и запуск

### Вариант 1: Одной командой

```bash
npm i
```

### Вариант 2: Раздельная установка

Установите dev-зависимости:

```bash
npm install -D @tailwindcss/postcss@4 @types/node@20 @types/react@19 @types/react-dom@19 eslint@9 eslint-config-next@16.3.4 eslint-config-prettier@10.1.8 prettier@3.9.6 tailwindcss@4 typescript@5
```

Установите основные зависимости:

```bash
npm install antd@6.6.2 ant-design@1.0.0 next@16.3.4 react@19.2.8 react-dom@19.2.8 react-icons@5.7.0
```

### Запуск проекта

```bash
npm run dev
```

## Форматирование кода

Проект использует ESLint и Prettier для поддержания единого стиля кода.

Отформатировать весь проект:

```bash
npm run format
```

## Архитектура

Проект построен по методологии FSD (Feature-Sliced Design) со следующей иерархией слоёв:

### app

Отвечает за маршрутизацию приложения (стандартный App Router от Next.js).

### views

В классической FSD этот слой называется `pages`, однако такое название конфликтует с App Router. Решение — переименование слоя `pages` в `views`.

### features

Содержит композицию компонентов и бизнес-логику отдельных функциональных блоков.

### shared

Содержит переиспользуемые части приложения:

- `ui` — небольшие "глупые" UI-компоненты без бизнес-логики
- `lib` — файлы с утилитами
- `types` — вспомогательные типы

## Соглашения по коду

### Именование маршрутов

Все маршруты написаны в стиле `kebab-case` для лучшей совместимости и чувствительности браузеров к регистру URL.

### Нормализация CSS

В качестве CSS-сброса используется современное решение от Josh Comeau.

Источник: [https://www.joshwcomeau.com/css/custom-css-reset/](https://www.joshwcomeau.com/css/custom-css-reset/)

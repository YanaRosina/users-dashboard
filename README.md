# Users Dashboard

Полноценное приложение для управления пользователями с React фронтендом и Fastify бэкендом.

## 🚀 Технологии

### Frontend
- **React 18** с TypeScript
- **Material-UI (MUI)** для компонентов
- **Redux Toolkit** для управления состоянием
- **Axios** для HTTP запросов

### Backend  
- **Fastify** веб-фреймворк
- **TypeScript** 
- **CORS** поддержка

## 📋 Возможности

- ✅ Список пользователей с карточками
- ✅ Поиск по имени в реальном времени
- ✅ Детальная информация в модальном окне
- ✅ Responsive дизайн
- ✅ Обработка ошибок и загрузки
- ✅ TypeScript для типобезопасности

## 🛠 Установка и запуск

### Быстрый старт
```bash
# Клонируем репозиторий
git clone <repository-url>
cd users-dashboard

# Устанавливаем все зависимости
npm run install:all

# Запускаем в режиме разработки
npm run dev
```

Приложение будет доступно по адресам:
- **Frontend**: http://localhost:3000  
- **Backend API**: http://localhost:3001

### Отдельный запуск сервисов

```bash
# Только бэкенд
npm run dev:backend

# Только фронтенд
npm run dev:frontend
```

### Production сборка

```bash
# Сборка всего проекта
npm run build

# Запуск production версии
npm run start
```

## 📁 Структура проекта

```
users-dashboard/
├── backend/           # Fastify API сервер
│   ├── src/
│   │   ├── data/      # JSON данные пользователей
│   │   ├── types/     # TypeScript типы
│   │   ├── utils/     # Утилиты
│   │   └── server.ts  # Основной сервер
│   └── package.json
├── frontend/          # React приложение  
│   ├── src/
│   │   ├── components/  # React компоненты
│   │   ├── store/      # Redux store
│   │   ├── services/   # API сервисы
│   │   ├── types/      # TypeScript типы
│   │   └── hooks/      # Кастомные хуки
│   └── package.json
└── package.json       # Корневые скрипты
```


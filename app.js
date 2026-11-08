const express = require('express');
const app = express();
const port = 3000;

// 1. Текстовый эндпоинт (корневой)
app.get('/', (req, res) => {
    res.send('Сервер работает');
});

// 2. JSON эндпоинт 1: События
app.get('/api/events', (req, res) => {
    res.json([
        { id: 1, name: "Конференция по веб-разработке", date: "2024-05-15" },
        { id: 2, name: "Хакатон", date: "2024-06-01" },
        { id: 3, name: "Встреча выпускников", date: "2024-07-20" }
    ]);
});

// 3. JSON эндпоинт 2: Локации
app.get('/api/locations', (req, res) => {
    res.json([
        { id: 1, city: "Москва", venue: "Крокус Экспо" },
        { id: 2, city: "Санкт-Петербург", venue: "Ленэкспо" },
        { id: 3, city: "Казань", venue: "Казань Экспо" }
    ]);
});

// 4. Обработка 404 (Not Found)
app.use((req, res) => {
    res.status(404).json({ error: "Not Found" });
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
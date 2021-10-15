# Домашняя работа: Асинхронность

## Задание
Реализовать функцию reduce с использованием асинхронного API из объекта Homework (см. playground.js)

### Пример
```js
const asyncArray = new Homework.AsyncArray([1, 2, 3, 4])
const reducerSum = (acc, curr, i, src, cb) => Homework.add(acc, curr, cb)

reduce(asyncArray, reducerSum, 0, (res) => {
    console.log(res) // 10
})
```

### Ограничения
- Решение должно работать на Node.js 16
- Запрещено использовать:
  - Арифметические операции и операции сравнения. Вместо них следует вызывать функции из Homework
  - Любые операции для работы с массивами. Доступны только методы AsyncArray
  - Импорты. Весь вспомогательный код следует положить в замыкание
// Напиши функцию filter(), которая принимает функцию-предикат и массив. Возвращает она массив значений, для которых предикат вернет true.

// var input = [1, 2, 3, 4, 5, 6];
// function isEven(x) { return x % 2 == 0; } // проверяет на четность
// console.log(filter(input, isEven)); // [2, 4, 6]
// Функция не должна изменять исходный массив:

// console.log(input); // [1, 2, 3, 4, 5, 6]
// Аналог из lodash: http://lodash.com/docs#filter В новых браузерах у массивов есть метод filter.


const filter = (arr, func) => {
    const res = [];
    for (let item in arr) {
        func(arr[item]) ? res.push(arr[item]) : null;
    }
    return res;
};
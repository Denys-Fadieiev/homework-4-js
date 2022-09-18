// 1. Создайте функцию, которая принимает неограниченное количество входящих данных, и возвращает количество строк, переданных ей в этом массиве. Решить с использованием стрелочных функций.
const numberOfLines = (...data) => data.filter((element) => typeof element === 'string').length;
console.log(numberOfLines(1, '2', 4, '5', '6','7', 8));


// 2. Создайте функцию продвинутого калькулятора. Он принимает знак, а  затем неограниченное количество чисел, над которыми проведет указанную операцию. 
const calc = function(sign, ...num) {
  switch(sign) {
    case '+' : {
      return num.reduce((num1, num2) => num1 + num2);
    }
    case '-' : {
      return num.reduce((num1, num2) => num1 - num2);
    }
    case '*' : {
      return num.reduce((num1, num2) => num1 * num2);
    }
    case '/' : {
      return num.reduce((num1, num2) => num1 / num2);
    }
    default: return null;
  }
}

console.log(calc('+', 10, 2));


// 3. Имея массив чисел, найдите в нем самое большое. Не используйте циклы или методы перебора массива.
const getMaxOfArr = (...numbers) => Math.max.apply(null, numbers);
console.log(getMaxOfArr(2, 4, 6, 22));

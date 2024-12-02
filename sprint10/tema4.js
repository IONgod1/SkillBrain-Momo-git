const addNumber = (...arguments) => arguments.reduce((acc, current) => acc + current, 0);

const printSum = (...arguments) => console.log(addNumber(...arguments));


printSum(1, 2, 3);
printSum(1, 2, 3, 4, 5);
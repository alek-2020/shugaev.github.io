// let arr = [1, 4, 45, -3, -45];

function findBiggestSum(arr) {
    let substrLength = 1;
    let maxSumbstr = [];
    let maxSubstrSum = 0;

    arr.forEach((element, index) => {
        let substrSum = 0;

        for (let i = 0; i <= arr.length - substrLength; i++) {
            for (let j = 0; j < substrLength; j++) {
                substrSum += arr[j + i]
            }

            // console.log('строка размером', substrLength, 'на позиции', i)
            // console.log(substrSum)

            if (substrSum > maxSubstrSum) {
                maxSubstrSum = substrSum
                maxSumbstr = arr.slice(i, i + substrLength)
            }

            substrSum = 0;
        }
        substrLength++;
    });

    console.log('Подстрока с наибольшей суммой элементов', maxSumbstr)
    console.log('сумма', maxSubstrSum)
}
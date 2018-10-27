function numericSpiral(n) {

    let result = [];

    // Текущая сторона
    let side = 0;
    // глубина спирали по каждой стороне
    let occupancy = [0, 0, 0, 0]
    // С
    let counter = 1;

    for (let i = 0; i < n * 2; i++) {
        switch (side) {
            case 1:
                for (j = occupancy[0]; j < n - occupancy[1]; j++) {
                    // console.log('верх массив', occupancy[2], 'индекс', j, 'число', counter)
                    if (!result[occupancy[2]]) result[occupancy[2]] = []
                    result[occupancy[2]][j] = counter++
                }

                occupancy[2]++

                break;
            case 2:
                for (j = occupancy[2]; j < n - occupancy[3]; j++) {
                    if (!result[j]) result[j] = []
                    // console.log('право массив', j, 'позиция', n - occupancy[1] - 1, 'число', counter)
                    result[j][n - occupancy[1] - 1] = counter++;
                }

                occupancy[1]++

                break;

            case 3:
                for (j = n - occupancy[3] - 1; j > occupancy[2] - 1; j--) {
                    if (!result[n - 1 - occupancy[3]]) result[n - occupancy[3]] = []
                    // console.log('низ массив', n - 1 - occupancy[3], 'позиция', j, 'число', counter)
                    result[n - 1 - occupancy[3]][j - 1] = counter++;
                }

                occupancy[3]++

                break;


            case 4:
                for (j = n - occupancy[3]; j > occupancy[2]; j--) {
                    // console.log('лево', j - 1, 'позиция', occupancy[0], 'номер', counter, 'число', counter)
                    result[j - 1][occupancy[0]] = counter++;
                }

                occupancy[0]++

                break;
        }

        side++
        if (i % 4 === 0 && i != 0) side = 1
    }

    console.log('res', result);
}
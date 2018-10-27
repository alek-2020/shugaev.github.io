((n = 7) => {

    let result = [];

    side = 0;
    let level = 0;
    let occupancy = [0, 0, 0, 0]
    let counter = 1;

    for (let i = 0; i < n * 2; i++) {
        switch (side) {
            case 1:
                for (j = occupancy[0]; j < n - occupancy[1]; j++) {
                    // console.log('верх массив', occupancy[2], 'индекс', j, 'число', counter)
                    if (!result[level]) result[level] = []
                    result[occupancy[2]][j] = counter++
                }

                occupancy[2]++

                break;
            case 2:
                for (j = occupancy[2]; j < n - occupancy[3]; j++) {
                    if (!result[j]) result[j] = []
                    // console.log('право массив', j, 'позиция', n - level - 1, 'число', counter)
                    result[j][n - level - 1] = counter++;
                }

                occupancy[1]++

                break;

            case 3:
                for (j = n - occupancy[3] - 1 ; j > occupancy[2] - 1; j--) {
                    if (!result[n - level] ) result[n - level] = []
                    // console.log('низ массив', n - level - 1, 'позиция', j, 'число', counter)
                    result[n - 1 - level][j - 1] = counter++;
                }

                occupancy[3]++

                break;


            case 4:
                for (j = n - occupancy[3]; j >= occupancy[2]; j--) {
                    // console.log('лево', j, 'позиция', occupancy[0], 'номер', counter, 'число', counter)
                    result[j][occupancy[0]] = counter++;
                }

                occupancy[0]++

                break;
        }

        side++
        if (i % 4 === 0 && i != 0) {
            level++;
            side = 1
        }
    }

    console.log('res', result);
})()
function queenPlacer(n) {
    console.log(n)

    let occupedPlace = []
    let positions = []

    let xPos = 0;
    let yPos = 0;

    while (yPos < n) {
        if (xPos === n) xPos = 0

        while (xPos < n) {
            if (!occupedPlace.length) createFirstArray();

            let position = occupedPlace[occupedPlace.length - 1][yPos][xPos];

            if (!position) {
                placeMe(xPos, yPos);
                positions.push([xPos, yPos])

                xPos = n
                break;
            }

            // Если это последний элемент, значит мы не нашли места. катим назад
            if (xPos === n - 1) {
                function turnBack() {
                    // - 1, что бы компенсировать инкременацию
                    yPos = positions[positions.length - 1][1] - 1
                    xPos = positions[positions.length - 1][0] + 1

                    // console.log('Последний на ', yPos + 1)
                    // console.log('Вернемся на ', xPos, yPos+1)

                    positions.splice(positions.length - 1)
                    occupedPlace.splice(occupedPlace.length - 1)

                    // Если х вышел за гриницы
                    if (xPos >= n) turnBack()
                }

                turnBack()

                break
            }

            xPos++
        }
        yPos++
    }

    console.log('Позиции для размещения ферзей', positions)

    function placeMe(x, y) {
        let newPosition = JSON.parse(JSON.stringify(occupedPlace[occupedPlace.length - 1]))

        newPosition = occupyHorizontal(newPosition, y);

        newPosition = occupyVertical(newPosition, x);

        newPosition = occupyDiagonal(newPosition, x, y);

        if (yPos === 0) {
            occupedPlace[0] = newPosition
        } else {
            occupedPlace.push(newPosition)
        }
    }

    function occupyHorizontal(arr, y) {
        for (let i = 0; i < n; i++) {
            arr[y][i] = 1;
        }
        return arr
    }

    function occupyVertical(arr, x) {
        for (let i = 0; i < n; i++) {
            if (!arr[i]) arr[i] = []

            arr[i][x] = 1
        }
        return arr
    }

    function occupyDiagonal(arr, x, y) {
        // to right
        for (let i = 0; i < n - x && i < n - y; i++) {
            arr[y + i][x + i] = 1;
        }

        // to left
        for (let i = 0; i <= x && i < n - y; i++) {
            arr[y + i][x - i] = 1;
        }
        return arr;
    }

    function createFirstArray() {
        for (let i = 0; i < n; i++) {
            if (!occupedPlace[occupedPlace.length - 1]) occupedPlace.push([])
            let arr = []
            for (let j = 0; j < n; j++) {
                arr[j] = 0
            }
            occupedPlace[occupedPlace.length - 1].push(arr)
        }
    }
}
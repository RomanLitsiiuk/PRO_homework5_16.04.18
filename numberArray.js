function createNumArray() {
    var randomArray = [];
    var raiseOrder = true;
    var i;

    for (i = 0; i < 5; i++) {
        randomArray.push( +(Math.random() * 10).toFixed(0) );
    }

    for (i = 0; i < randomArray.length; i++) {
        if (randomArray[i] > randomArray[i+1] || randomArray[i] === randomArray[i+1]) {
            raiseOrder = false;
        }
    }

    console.log(randomArray);

    if (raiseOrder) {
        console.log('Строго возрастающая последовательность');
    } else {
        console.log('Строго возрастающая последовательность не соблюдена');
    }
}

createNumArray();

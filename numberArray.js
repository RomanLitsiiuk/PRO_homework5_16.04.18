function createNumArray() {
    var randomArray = [];
    var raiseOrder;
    var i;

    for (i = 0; i < 5; i++) {
        randomArray.push( +(Math.random() * 10).toFixed(0) );
    }

    console.log(randomArray);

    raiseOrder = true;
    for (i = 0; i < randomArray.length; i++) {
        if (randomArray[i] > randomArray[i+1] || randomArray[i] === randomArray[i+1]) {
            raiseOrder = false;
        }
    }

    raiseOrder ? console.log('Строго возрастающая последовательность') :
        console.log('Строго возрастающая последовательность не соблюдена');
}

createNumArray();

function reverseArray() {
    var userString = prompt('Введите слова через запятую');
    var stringArray = userString.split(', ');
    var arrayItem;
    var forwardN;
    var backN = stringArray.length - 1;

    for (forwardN = 0; forwardN < stringArray.length / 2; forwardN++) {
        arrayItem = stringArray[backN];
        stringArray[backN] = stringArray[forwardN];
        stringArray[forwardN] = arrayItem;
        backN--;
    };

    console.log(stringArray);

}

reverseArray();
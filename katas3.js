const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1 (){
    let arr = [];
    for (let i = 1; i <= 25;i++){
        arr.push (i);
    }
    return arr;
}

function kata2 (){
    let arr = [];
    for (let i = 1; i <= 25;i++){
        arr.push (i);
    }
    return arr.reverse();
}

function kata3 (){
    let arr = [];
    for (let i =1; i <= 25; i++){
        arr.push (i*-1);
    }
    return arr;
}

function kata4 (){
    let arr = [];
    for (let i = 1;i <= 25; i++){
        arr.push (i*-1);
    }
    return arr.reverse();
}

function kata5 (){
    let arr = [];
    let arrNegtivo = [];
    for (let i = 1;i <= 25; i++){
        if (i % 2 !== 0){
            arr.push (i);
            arrNegtivo.push (i*-1);
        }
    }
    return arr.reverse() + arrNegtivo;
}

function kata6 (){
    let arr = [];
    for (let i = 1; i <= 100;i++){
        if (i % 3 == 0){
            arr.push (i);
        }
    }
    return arr;
}

function kata7 (){
    let arr = [];
    for (let i = 1; i <= 100; i++){
        if (i % 7 == 0){
            arr.push(i);
        }
    }
    return arr;
}

function kata8 (){
    let arr = [];
    for (let i = 1;i <= 100; i++){
        if (i % 3 == 0  || i % 7 == 0){
            arr.push (i);
        }
    }
    return arr.reverse();
}

function kata9 (){
    let arr = [];
    for (let i = 1;i <= 100; i++){
        if (i % 5 == 0  && i % 2 !== 0){
            arr.push (i);
        }
    }
    return arr;
}

function kata10 (sampleArray){
    return sampleArray;
}

function kata11 (sampleArray){
    let arr = [];
    for (let i = 0; i < sampleArray.length; i++){
        if (sampleArray[i] % 2 == 0){
            arr.push (sampleArray[i])
        }
    }
    return arr;
}

function kata12 (sampleArray){
    let arr = [];
    for (let i = 0; i < sampleArray.length; i++){
        if (sampleArray[i] % 2 !== 0){
            arr.push (sampleArray[i])
        }
    }
    return arr;
}

function kata13(sampleArray){
    let arr = [];
    for (let i = 0; i < sampleArray.length;i++){
        if(sampleArray[i] % 8 ==0){
            arr.push(sampleArray[i])
        }
    }
    return arr;
}

function kata14(sampleArray){
    let arr = [];
    for (let i = 0;i < sampleArray.length;i++){
        arr.push (sampleArray[i]**2);
    }
    return arr;
}

function kata15 (){
    let soma = 0;
    for (let i = 1; i <= 20; i++){
        soma += i;
    }
    return soma;
}

function kata16 (sampleArray){
    let soma = 0;
    for (let i = 0; i < sampleArray.length; i++){
        soma += sampleArray[i];
    }
    return soma;
}

function kata17 (sampleArray){
    let comparacao = sampleArray[0];
    for (let i = 0; i <sampleArray.length; i++){
        if(comparacao > sampleArray[i]){
            comparacao = sampleArray[i];
        }
    }
    return comparacao;
}

function kata18 (sampleArray){
    let comparacao = sampleArray[0];
    for (let i = 0; i <sampleArray.length; i++){
        if(comparacao < sampleArray[i]){
            comparacao = sampleArray[i];
        }
    }
    return comparacao;
}
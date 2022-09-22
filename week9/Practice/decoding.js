import readlineSync from "readline-sync";

function base64Decoding() {
    //Step : 1 Accept String Input
    let inputString = readlineSync.question("Enter the String you want to Decode : ");
    const base64regex = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/

    while (!inputString || (!(base64regex.test(inputString)))) {
        inputString = readlineSync.question("Invalid Input, Please Try Again  : ");
    }

    let splitString = inputString.split("");
    // console.log(splitString);
    let count = 0;
    // for (let i = 0; i < splitString.length; i--) {
    //     if (splitString[i] == "=") {
    //         splitString.pop();
    //         count++;
    //     }
    // }

    if (splitString[splitString.length - 1] == "=") {
        if (splitString[splitString.length - 2] == "=") {
            splitString.pop();
            count++;
        }
        splitString.pop();
        count++;
    }
    // console.log(splitString);
    let base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    // base64 = base64.split("");


    let base64Values = splitString.map((ele) => {
        return base64.indexOf(ele);
    })


    // console.log(base64Values);

    let binaryCode = base64Values.map((ele) => ele.toString(2));
    // console.log(binaryCode);

    let binaryCode6Bit = binaryCode.map((bin) => {
        while (bin.length < 6) {
            bin = "0" + bin;
        }
        return bin;
    })
    binaryCode6Bit = binaryCode6Bit.join("");
    // console.log(binaryCode6Bit);
    return binaryCode6Bit;
}
// base64Decoding();

export default base64Decoding;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

function base64Decoding() {
    // Step : 1 accept string input 
    let inputstring = readLineSync.question(
        "Enter the String you want to Decode : "
    );
    const base64regex = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/
    while (!inputString || (!(base64regex.test(inputString)))) {
        inputString = raedLineSync.question(
            "Invalid Input, Please Try Again : "
            
        );
    }
    let splitString = inputString.split("");
    console.log(splitString);
    let count = 0;
    for (let i=0; i < splitString.length; i--) {
        if (splitString[i]== "=") {
            splitString.pop();
            count++;
        }
    }

}
base64Decoding();
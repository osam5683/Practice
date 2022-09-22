import readlineSync from "readline-sync";
// Encoding
function Encoder(){
    // step 1 Accept string input
    let inputString=readlineSync.question("Enter the string you want to encode : ")
// split character
    let splitString=inputString.split("");
    console.log("The string is :", splitString)
    // get ascii decimals
    // let ASCIICodes=splitString.map(function(char)){
// return char,charCodesAt();
    // }
    let ASCIICodes=splitString.map((char)=>char.charCodeAt())
console.log("The ASCII Array is: ", ASCIICodes);
// converting decimal ASCII to binary
let binaryCodes=ASCIICodes.map((num)=>num.toString(2));
console.log(binaryCodes);
let binaryCode8bit=binaryCodes.map((bin)=>{
while(bin.length<8){
    bin = "0"+bin;
}
return bin;
})
console.log("Binaries in 8 bits are:" , binaryCode8bit);
let oneBinary=binaryCode8bit.join("").split("");
console.log (oneBinary);
// splitting into 6 bits
let binaryCode6Bit= [];
while(oneBinary.length!=0){
binaryCode6Bit.push(oneBinary.splice(0,6).join(""));
}
console.log("Binary in 6 bits are :",binaryCode6Bit);
// padding and add
let LastElement= binaryCode6Bit[binaryCode6Bit.length -1 ];
if (LastElement.length!=6){
    var counter=0;
    while (LastElement.length<6){
        LastElement=LastElement+ "0";
        counter++
    }
    binaryCode6Bit[binaryCode6Bit.length-1]=LastElement
}
console.log ("Binaries in 6 Bits are :", binaryCode6Bit);
let bintoDecimal=binaryCode6Bit.map((str)=>parseInt(str,2));
console.log("Base 64 decimals :",bintoDecimal);
let base64= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
let base64final=bintoDecimal.map((dec)=>base64[dec]);
console.log("Base 64 string:",base64final);
if (counter==2){
    base64final.push("=");
} else if(counter == 4){
    base64final.push("==");
}
let finalBase64String=base64final.join("");
console.log ("Your base 64 output:", finalBase64String)
}
Encoder()

export default Encoder
function randomString(length){
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
}let charactersLength = characters.length;
for (let i = 0; i <length;i++) { 
    for(let i = 0; i < length; i++) {
        result += characters.charAT(Math.floor(Math.random() * 
        charactersLength));
    }
    return result;
}

export default randomString
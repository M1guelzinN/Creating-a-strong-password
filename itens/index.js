function password(){
    let carac = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&{}[]><?-_.()"
    let passwordLength = 12;
    let password = ""

    for(let r = 0; r < passwordLength; r++){
        let RandomN = Math.floor(Math.random() * carac.length)
        password += carac.substring(RandomN, RandomN + 1)
    }
    document.querySelector('#senha').value = password
}
const newPassEl = document.getElementById("newPass")

document.getElementById("generate").addEventListener("click", function(){
        const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let passwordLength = document.getElementById("numbers").value;
        let password = "";

        if (passwordLength < 4){
            newPassEl.innerText = `Min password lenght is 4!`
        } else if(passwordLength > 20){
            newPassEl.innerText = `Max password lenght is 20!`
        } else {
            for (let i=0; i < passwordLength; i++) {
                let randomNumb = Math.floor(Math.random() * chars.length)
                password += chars.substring(randomNumb, randomNumb+1)
            }
            newPassEl.innerText = password
            newPassEl.style.backgroundColor = "#e63946"
        }
 })


newPassEl.addEventListener("click", copyToClipboard)

 function copyToClipboard() {
    const newPassword = newPassEl.textContent
    navigator.clipboard.writeText(`${newPassword}`)
 }

 document.getElementById("clear").addEventListener("click", function(){
    newPassEl.innerText = "Generate password"
    newPassEl.style.backgroundColor = "#457b9d"

 })

 
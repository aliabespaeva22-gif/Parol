    function generatePassword() {
    let length = document.getElementById("length").value;

    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
    let password = "";

    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * chars.length);
        password += chars[random];
    }

    document.getElementById("result").textContent = password;
}

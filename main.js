require('dotenv').config()

//password for marvel acc Acaapiapp2022
//private key 783733f3eae095cf2a8f5500f21ff56efafed150

console.log("hello" + process.env.privateKey)
let ts = 222

let publicKey = "266b0d29fc2450866cd31fa680921ed2"
let md5Hash = crypto.createHash('md5').update(`${ts}${process.env.privateKey}${publicKey}`).digest("hex")
let url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${md5Hash}`;

let arrayOfCharacters;

const getCharacters = () => {
    fetch('/v1.public/creators')
    .then(res => res.json())
    .then(characters => arrayOfCharacters = characters)

    const consoleCharacters = () => {
        console.log(arrayOfCharacters)
    }
}

const displayCharacters = () => {
    const allCharacters = document.getElementById('allCharacters')
    arrayOfPosts.map(characters, index) => {
        const li = document.createElement('li')
        const text = document.createTextNode('#$(index')
        li.appendChild(text)
        allCharacters.append(li)
    })
}
// const os = require('os')
// console.log(os)
// console.log('Platform:', os.platform())
// console.log('Arg:', os.arch())
// const userInfo = os.userInfo()
// console.log('UserLogin:', userInfo.username)

const createPpl = () => {
    const arrayOfPepole = []
    let gender
    let name
    let age
    let lastName
    const femaleNames = ['Ana', 'Kate', 'Lisa', 'Jane']
    const maleNames = ['Bart', 'John', 'Mario', 'Ryszard']
    const lastNames = ['Horoba', 'Zagrobelny', 'Kowalski', 'Cyberszard']
    for(let i = 0; i < 20; i++){
        gender = ['F', 'M'][Math.floor(Math.random() * ['F', 'M'].length)]
        if(gender === 'F') {
            name = femaleNames[Math.floor(Math.random() * femaleNames.length)]
        } else if (gender === 'M') {
            name = maleNames[Math.floor(Math.random() * maleNames.length)]
        }
        lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
        age = 18 + Math.floor((78 - 18) * Math.random())

            arrayOfPepole.push({
            firstName: name,
            surname: lastName,
            gender: gender,
            age: age,
        })
    }
        return JSON.stringify(arrayOfPepole)
}


const fs = require('fs');
fs.writeFile('people.json', createPpl(), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

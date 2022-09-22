// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

//pseudo code: Make a function that will take the value within the object and see if it is divisible by 3 with modular and a boolean...
//so I would declare const and name the function divThree and then I would get the key which is number within the object and modular 3 to see if it is divisible by using an if else statement
// a) Create a test with expect statements for each of the variables provided.

describe("divThree", () => {
    it("divThree checks is key values are divisible by 3", () => {
    // object1 stores a key with that value 15
    const object1 = { number: 15 }
    // Expected output: "15 is divisible by three"
    const object2 = { number: 0 }
    // Expected output: "0 is divisible by three"
    const object3 = { number: -7 }
    // Expected output: "-7 is not divisible by three"

        expect(divThree(object1)).toEqual("15 is divisible by three")
        expect(divThree(object2)).toEqual("0 is divisible by three")
        expect(divThree(object3)).toEqual("-7 is not divisible by three")
    })
})

// b) Create the function that makes the test pass.

const divThree = (objNum) => {
    if(objNum.number % 3 !== 0) {
        return objNum.number + " is not divisible by three"
    } else if(objNum.number % 3 == 0) {
        return objNum.number + " is divisible by three"
    } 
}
//output: PASS

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("capFirst", () => {
    it("Create a function that takes in an array of words and returns an array with all the words capitalized.", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
        expect(capFirst(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capFirst(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})    

//psuedo code make function that iterates through orginal array
// take first character using built in method charAt and touppercase it and then add the rest of the string to the end by using slice 
//return to shoot out new array with wanted output


// b) Create the function that makes the test pass.

const capFirst = (oldArray) => {
   return oldArray.map((string) => {
        return(string.charAt(0)).toUpperCase() + string.slice(1)
    }) 
 } 

 //output: PASS

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("logFirstVowel", () => { 
    it("Create a function that takes in a string and logs the index of the first vowel.", () => {
        const vowelTester1 = "learn"
        // Expected output: 1
        const vowelTester2 = "academy"
        // Expected output: 0
        const vowelTester3 = "challenges"
        // Expected output: 2
        expect(logFirstVowel(vowelTester1)).toEqual(1)
        expect(logFirstVowel(vowelTester2)).toEqual(0)
        expect(logFirstVowel(vowelTester3)).toEqual(2)
    })
})


// b) Create the function that makes the test pass.
//pseudo code make each index a value inside of the vowel array
// made a value that would filter the -1 out since value showed up as -1 if there indexof does not find it (learn does not have vowels i,o,u)
//filter through voewlArr remove numbers lesser then 0
// use math.min to get lowest value which should be the first appearence of the vowel
//use spread operator to expand array in order for math.min function to run

const logFirstVowel = (str) => { 
    const vowelArr = [str.indexOf("a"), str.indexOf("e"), str.indexOf("i"), str.indexOf("o"), str.indexOf("u")]
    const zeroCatcher = vowelArr.filter(value => value >= 0) 
    return Math.min(...zeroCatcher)
 }
 
 //output: PASS
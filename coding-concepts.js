// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// const cohort = "Foxtrot 2022"
// console.log(cohort.split(""))

// a) Your answer: This should take the the string stored in cohort and split each letter into their own string
// b) Verify and explain: I got most of it correct, with each character becoming a a string but I did not mention that it turned it into an array

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!` 
}
// console.log(greeter("LEARN Student"))

// a) Your answer: I think it will log "Hello, LEARN Student!"
// b) Verify and explain: JK the output was undefined, due to having no return inside the function code, because functions need a return

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: [8,10,12,14,16]
// b) Verify and explain: Was correct, $.map takes the array and iterates through the original array then shoots a new array except it multiples each value by 2.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11,13,15]
// b) Verify and explain: Was correct, $.filter takes the the original array and in this case there was a condition in the function for odd numbers and condition returned the values of where the boolean is true which in this case were 11,13, and 15 in a new array. 

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: "Javascript"
// b) Verify and explain: This shoots out "Javascript" because when you console log we used dot notation and the languages key was picked and the languages key has the array and the 0 is the index for "Javascript" within the myCodingSkills object

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name,
    this.cohort = "Foxtrot"
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: "George Foxtrot 2022"
// b) Verify and explain: So class "Learn" is the blueprint, within the blueprint there are 3 keys one for student, cohort, and year, except name is not hardcoded and it is a parameter so it could be assigned a new argument and in this instance it is George. 

// https://github.com/nodesecurity/eslint-plugin-security/blob/master/docs/the-dangers-of-square-bracket-notation.md

function Demo() {
    this.is_admin = false
    this.public = 'foobar'
}

// exampleClass[userInput[1]] = userInput[2]
var thing = new Demo
thing[process.argv[2]] = process.argv[3]
console.log(thing)
console.log(thing.is_admin)
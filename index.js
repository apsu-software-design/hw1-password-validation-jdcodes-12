const validatePassword = require('./passwordvalidation'); //import the function
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const prompt = (`Enter a password (or q to exit): `);

//Run prompt
promptUserForPassword();

//Utilities
function checkBaseCase(password){
    if(password.toLowerCase() === 'q'){
        return false;
    }
}

//Recursive call for user prompt
function promptUserForPassword(){
    
    rl.question(prompt, (password) => {
       if(checkBaseCase(password) === false) {
          console.log("Closing input stream and exiting terminal...")
          rl.close();
          console.log("Input stream closed... Goodbye!")
          process.exit(1);
       }

       else {
            if(validatePassword(password) === true)
            {
                console.log(`${password} -- Valid password\n`)
                return promptUserForPassword() + true;
            }
            else 
            {
                console.log(`${password} -- Invalid password\n`)
                return promptUserForPassword() + false;
            }
       }
    });

}
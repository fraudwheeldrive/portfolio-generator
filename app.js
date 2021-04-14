<<<<<<< HEAD
const fs = require('fs');

const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2, process.argv.length); 

const [Name, github] = profileDataArgs;





fs.writeFile('index.html', generatePage(Name, github), err => {
    if (err) throw err; 

    console.log('Portfolio complete! Check out index.html to see the output!')
});
=======
const profileDataArgs = process.argv.slice(2, process.argv.length); 
console.log(profileDataArgs);

const printProfileData = profileDataArr => {
    //this...
    for (let i = 0; i <profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }

    console.log('===============');


    //is the same as this... 
    profileDataArr.forEach(profileItem => console.log(profileItem));
        
  };
  
  printProfileData(profileDataArgs);


  
>>>>>>> feature/capture-input

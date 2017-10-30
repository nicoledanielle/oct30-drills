function yearOfBirth(age){
    return(2017 - age);
}

function whoAmI(name,age) {   
    let yob = yearOfBirth(age);
    console.log("Hi, my name is " + name + " and I am " + age + " years old");
    console.log('I was born in ' + yob);
    }

yearOfBirth("29");

whoAmI("Chris","29");

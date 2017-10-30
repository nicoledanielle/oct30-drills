function yearOfBirth(age){
    return(2017 - age); 
}

function whoAmI(name,age) {   
    let yob = yearOfBirth(age);
    console.log("Hi, my name is " + name + " and I am " + age + " years old");
    console.log('I was born in ' + yob);

    try {
        if (age < 0) throw "is too low";
    }
    
    catch(err) {
        console.log('Age cannot be negative');
    }
    }

yearOfBirth("29");
whoAmI("Chris","29");




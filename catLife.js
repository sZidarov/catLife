function catLife (input){
    let catBreed = input[0];
    let catGender = input[1];
    let lifeLength = 0;

    switch(catBreed){
        case "British Shorthair" : 
            if (catGender==="m"){
                lifeLength = 13*12/6;
            }else if (catGender === "f"){
                lifeLength = 14*12/6;
            }
            console.log(`${lifeLength} cat months`);
            break;
        case "Siamese" : 
            if (catGender==="m"){
                lifeLength = 15*12/6;
            }else if (catGender === "f"){
                lifeLength = 16*12/6;
            }
            console.log(`${lifeLength} cat months`);
            break;
        case "Persian" : 
            if (catGender==="m"){
                lifeLength = 14*12/6;
            }else if (catGender === "f"){
                lifeLength = 15*12/6;
            }  
            console.log(`${lifeLength} cat months`);      
            break;
        case "Ragdoll" :
            if (catGender==="m"){
                lifeLength = 16*12/6;
            }else if (catGender === "f"){
                lifeLength = 17*12/6;
            }        
            console.log(`${lifeLength} cat months`);
            break;    
        case "American Shorthair" : 
        if (catGender==="m"){
            lifeLength = 12*12/6;
        }else if (catGender === "f"){
            lifeLength = 13*12/6;
        }        
        console.log(`${lifeLength} cat months`);
        break;
        case "Siberian" :
            if (catGender==="m"){
                lifeLength = 11*12/6;
            }else if (catGender === "f"){
                lifeLength = 12*12/6;
            }        
            console.log(`${lifeLength} cat months`);
            break;
        default : 
            console.log(`${catBreed} is invalid cat!`)
            break;
        
    }
}
catLife (['Siamese','f']);
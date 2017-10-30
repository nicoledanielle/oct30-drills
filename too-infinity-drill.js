function beyond(num){
    if (num === Infinity || num === -Infinity){
        console.log('And Beyond')
    }
    if (num > 0){
        console.log('To infinity')
    }
    if (num < 0){
        console.log('To negative infinity')
    }
    if (num === 0){
        console.log('Staying home')
    }
}

beyond(0);
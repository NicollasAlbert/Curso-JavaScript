function reverse(word){

    let newWord = "";

    for(let index = word.length - 1; index >= 0; index-- ) {
        newWord += word[index];
    } 
    console.log(newWord);
}

reverse('salve');


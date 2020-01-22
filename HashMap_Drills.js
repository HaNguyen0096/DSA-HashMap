const HashMap = require('./HashMap');

function main(){
    const lotr = new HashMap();
    //lotr.MAX_LOAD_RTIO = 0.5;
    //lotr.SIZE_RATIO = 3;

    lotr.set('Hobbit', 'Bilbo');
    lotr.set('Hobbit', 'Frodo');
    lotr.set('Wizard', 'Gandolf');
    lotr.set('Human', 'Aragorn');
    lotr.set('Elf', 'Legolas');
    lotr.set('Maiar', 'The Necromancer');
    lotr.set('Maiar', 'Sauron');
    lotr.set('RingBearer', 'Gollum');
    lotr.set('LadyOfLight', 'Galadriel');
    lotr.set('HalfElven', 'Arwen');
    lotr.set('Ent', 'Treebeard');
    //console.log(lotr);
    //console.log('Maiar key:', lotr.get('Maiar'))
    //console.log('Hobbit key:', lotr.get('Hobbit'))
  
    return lotr;
}

main();

const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);  
    map1.set(str2,20); //str1=str2, value:20
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10); //str1=str2, value:10

    //console.log(map1.get(str1));
    //console.log(map2.get(str3));
}
WhatDoesThisDo();

function duplicates(str){

    const words = new HashMap();
    let newWords='';
    for (let i=0; i<str.length; i++){
        words.set(str[i],str[i]);
    }
    console.log(words);
    words._hashTable.forEach(letter => {
        newWords += letter.value;
    });
    
    console.log(newWords);
    return newWords;
}
//str='google g h';
//duplicates(str);

function is_palindrome(str){
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const words = new HashMap();
    let odd=0;
    for (let i=0; i<str.length; i++){
        let check=words.get(str[i]);
        let test=str[i];
        if (words.get(str[i]) === undefined){
            words.set(str[i],1);
            let check1=words.get(str[i]);
        }
        else {
            let count = words.get(str[i]);
            words.set(str[i],count+=1);
        }
    }
    for (let i=0; i<str.length; i++){
        if(words.get(str[i]) % 2 !== 0){
            odd++;
        }
        if (odd>1){
            return false;
        }
    }
    console.log(words);
    return true;
}

str='acecarrrr rr';
console.log(is_palindrome(str));
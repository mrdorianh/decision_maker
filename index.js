
function decide(bestOf = 1,decisionsArray = ['option A','option B']){

 let choice = Math.floor(Math.random()*decisionsArray.length);
 console.log('');
 console.log(`The Decision Maker has decided: ${decisionsArray[choice]}`);
}

decide();
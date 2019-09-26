

for (i = 0; i < 10; i++) {


    if(i === 5 || i === 3){

        continue;
    }

    /* powyzej - dla tej petli pomin cala reszte i zacznij od nowa, taki delikatny break */
    console.log(i);

    if(i === 7){
        break;
    }
}

console.log("i have broken out of the loop");
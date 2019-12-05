// *** YOUR ANSWER BELOW ***
function divisible(){
    for (let i = 1; i <= 100; i++){
        if (((i % 6 === 0) && (i % 7 !== 0)) || ((i % 6 !== 0) && (i % 7 === 0))){
                console.log(i);
        }
    }
}
divisible();
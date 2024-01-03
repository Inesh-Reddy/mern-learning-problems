let value =0;

function counter(){
    value++;
    console.log(value);
    setTimeout(counter, 1000);
}

counter();


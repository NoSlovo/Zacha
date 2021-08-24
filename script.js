function funcIncludes(){
    let arr = [65,98,200,87];
    let input = +document.querySelector('input').value;
    for(c = 0; c < arr.length;c++){
        if(input == arr[c]){
            document.querySelector('div').innerHTML= true;
            break

        }else{
            document.querySelector('div').innerHTML= false;
        }
    }
}

document.querySelector('button').onclick = funcIncludes;
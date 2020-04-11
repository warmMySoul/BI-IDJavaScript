var
    str1 = '(((()())))',
    str2 = '(()((()))))';

alert(fn(str1));
alert(fn(str2));

function ff(arg){
    var
        start  = -1,
        finish = -1;

    for(var i = arg.length-1; i >=0; i--){
        if(arg[i]=='('){
            start = i;
            alert(start);
            break;
        }
    }

    for (var i = 0; i < arg.length; i++) {
        if(arg[i]==')' && i > start){
            finish = i;
            alert(finish);
            break;
        }
    }

    if(finish==-1){
        return arg;
    }

    if((arg.length - 2) == 0){
        return null;
    }

    var
        arr = new Array(arg.length-2);
    
    for(let i = 0, j = 0; i < arr.length; i++, j++){
        if(j == start || j == finish){
            j++;
        }

        arr[i] = arg[j];
    }
    
    
function fn(arg){
    var
        arr   = arg.split(''),
        count = 0;

    for(var i = 0; i < arr.length; i++){
        if(arr[i]=='('){
            count++;
        }
    }
    
    for(var i = count; i > 0; i--){
        arr = ff(arr);
    }

    if(arr == null)
        return true;

    return false;
}
    
    var str = '';
    arr.forEach(element => {
        str+=element;  
   });    
    alert(str);
    return arr;
}

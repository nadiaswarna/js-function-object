const color = 'yellow';
if(color == 'green'){
    console.log('you are a green friend');
}
else if(color == 'blue'){
    console.log('You are a blue friend');
}
else if(color == 'red'){
    console.log('you are a red friend');
}
else if (color == 'white'){
    console.log('You are a white friend');
}
else if(color === 'yellow'){
    console.log('You are a yellow himu friend');
}
else{
    console.log('you are a black black friend');
}

// switch
switch(color){
    case 'green':
        console.log('you are a green friend');
        break;
    case 'blue' :
        console.log('you are a blue friend');
        break;
        case 'white':
            console.log('you are a white friend');
            break;
            case 'red':
                console.log('you are a red friend');
                break;
                case 'yellow':
                console.log('you are a yellow friend');
                break; 
                default:
                    console.log('you are my kala kala friend') ;  
}
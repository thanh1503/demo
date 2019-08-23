// var str = "abacddbec";
// function strFind(find){
//     for(i = 0 ; i < str.length ; i++){
//         if([i]!=str[str.length-i]){
//             console.log(i);
//         }
//   }
// }
// console.log(strFind(str));
str = "abacddb8ec";
function strFind(find){
    for(i = 0 ; i < find.length ; i++){
        let temp = 0
        for(j = 0 ; j < find.length ; j++){
            if(find[i]==find[j]&&i!=j){
                temp++
            }
        }
        if(temp==0){
            console.log(find[i])
        }
    }
}
strFind(str);

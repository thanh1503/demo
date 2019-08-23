// let n = 9;
// for(let i = 0 ; i < n ; i++ ){
//       i = i++ ;
//     if(n%i==0){
//         console.log('khong phai so nguyen to');
//         break ;
//     }
//     else if(n%2==1) {
//         console.log("la so nguyen to");
//        break ;
//     }
// }
var z = 7;
function isPrime(prime){
    let y = 2;
    while(y<prime){
        if(prime%y==0){
            return false;
        }
        y++;
    }
    return true;
}
console.log(isPrime(z));
// for(let i =2 ; i<=z ;i++){
//     if(isPrime(i))
//     {
//         console.log(i + " ");

//     }

// }
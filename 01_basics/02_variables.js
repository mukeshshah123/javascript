const accountId = 144553
let accountEmail = "mukesh@google.com"
var accountpassword = "13654"
accountCity = "Jaipur"
let accountstate;

// accountId = 2 // not  allowed

accountEmail =  "hdd@caches.com"
accountpassword = "122532"
accountCity = "pune"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope

*/

console.table([accountId, accountEmail, accountpassword, accountCity, accountstate])
///Gets prime numbers up to N///

var Util = function () {
    this.hash = {};
    this.hash.count = 0;

}

Util.prototype.isPrime = function (num) {
   for (var i = num - 1; i > 1; i--) {
     if (num % i === 0) {
       return false;
     }
   }
   return true;
 };

 Util.prototype.createPrimes = function (n) {
    for (var i = 2; i < n; i++) {
      if(this.isPrime(i)){
        this.hash[i] = i;
        this.hash.count++;
      }
   }
 }

Util.prototype.getPrimes = function () {
  return this.hash;
}




var Primes = {
  first : function (n) {
   var results = [];
   var hash = {};
   hash[2] = 2;


   var isPrime = function (num) {
     ////naive approach////
     // for (var i = num - 1; i > 1; i--) {
     //   if (num % i === 0) {
     //     return false;
     //   }
     // }
     // return true;

     ////prime only approach///
     for (var key in hash) {
      if(num % key === 0) {
        return false;
      }
     }
     hash[num] = num;
     console.log(hash);
     return true;
   };

   var check = function (currNum) {
     if(results.length === n) {
      console.log("hit me");
      return;
     } else {


        if(isPrime(currNum)) {
          results.push(currNum);
        } 
        check(currNum + 1);
     }    
   } 

   check(2);
   return results;
  }
}



console.log(Primes.first(266));



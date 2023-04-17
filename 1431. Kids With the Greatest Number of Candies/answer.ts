function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
   
   // get the greatest value of array
const greatest = Math.max.apply(null, candies);
    // return boolean 
return candies.map((x) => { if ((x+extraCandies) >= greatest){ return true} else{ return false}})

};
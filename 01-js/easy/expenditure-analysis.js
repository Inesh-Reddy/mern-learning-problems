/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

/*   OBJECT ----> AS PER CLASS

Instead of maintaining multiple arrays we can use objects to make things simple

object ? -----> a way to aggregate data together just like arrays


*/
// Transaction - an object like { itemName, category, price, timestamp }.

function calculateTotalSpentByCategory(transactions) {
  const output =[{}];
  const preOutput=[];
  let cate=[];
  let obj=[{}];
  let uniqueArray =[];
  // if empty array of objects return and empty array
  let numberOfItems = transactions.length;
  if(numberOfItems == 0){
    return [];
  }
  // iterate over the transactions array of objects and fetch the  catogeries and place them in outputs array
  for(let i=0; i<numberOfItems; i++){
    let temp ;
    temp = transactions[i]["category"];
    output[i]=temp;
  }
  // using filter() method remove the duplicates and only store the unique category names in uniqueArray[]
  uniqueArray = output.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  // for each catogeory in uniqueArray iterate in transactions array &
  //sum-up the prices of the category which is same as category in UniqeArray  
  let noOfUniqueCatogeries = uniqueArray.length;
  let final =[{}];
  for(let i=0; i<noOfUniqueCatogeries; i++){
    let sum =0
    for(let j=0; j<numberOfItems; j++){
      if(transactions[j]["category"] == uniqueArray[i]){
        sum = sum + transactions[j]["price"];
      }
    }
    cate =uniqueArray[i];
    // place that particular category and sum of prices of that category as properties in the  object &
    // add that object to final [] array
    obj ={category:cate,totalSpent:sum};
    final[i]= obj;
  }
  return final; //return the final array
}
// console.log(calculateTotalSpentByCategory(transactions));
module.exports = calculateTotalSpentByCategory;

/* Start 1.Sort the people by name and return as a comma separated string. */
const people = { Mary: 17, Bob: 62, John: 32 };

function list_people(people) {
  const sortedNames = Object.keys(people).sort();
  return sortedNames.join(", ");
}

console.log(list_people(people));
/* End 1.Sort the people by name and return as a comma separated string. */

/* Start 2. Sum all integers from $start to $end (included) and print the result.  */
function sumIntegers(start, end) {
  let sum = 0;
  const step = start <= end ? 1 : -1;

  for (let i = start; start <= end ? i <= end : i >= end; i += step) {
    sum += i;
  }
  return sum;
}

// Example: start is greater than end
const start = 5;
const end = 2;
const result = sumIntegers(start, end);
console.log(result);
/* End 2. Sum all integers from $start to $end (included) and print the result.  */

/* Start 3. Script should print "Go outside" only if: it is NOT raining AND it is warm OR it is daytime. */
const raining = false;
const warm = true;
const daytime = false;

if ((!raining && warm) || daytime) {
  console.log("Go outside");
}
/* End 3. Script should print "Go outside" only if: it is NOT raining AND it is warm OR it is daytime.
 */

/* Start 5. Mathematics: */
function calculateOriginalPrice(priceAfterDiscount, discountPercentage) {
  const decimalDiscount = discountPercentage / 100;
  const originalPrice = priceAfterDiscount / (1 - decimalDiscount);
  return originalPrice;
}

const priceAfterDiscount = 1000;
const discountPercentage = 20;

const originalPrice = calculateOriginalPrice(
  priceAfterDiscount,
  discountPercentage
);
console.log("Original Price: $" + originalPrice);
/* Start 5. Mathematics: */

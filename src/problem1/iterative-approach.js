/**
 * Iterative Approach
 *
 * Uses a loop to sum all integers from 1 to n.
 *
 * Time Complexity: O(n) - Iterate through n numbers
 * Space Complexity: O(1) - Only uses constant extra space
 *
 * Pros: Simple, memory efficient
 * Cons: Slower for large n values
 */

function sum_to_n(n) {
  let sum = 0;
  for (let index = 1; index <= n; index++) {
    sum += index;
  }
  return sum;
}

// Test cases
console.log("Implementation 1 - Iterative:");
console.log(`sum_to_n(5) = ${sum_to_n(5)}`); // Expected: 15
console.log(`sum_to_n(10) = ${sum_to_n(10)}`); // Expected: 55
console.log(`sum_to_n(100) = ${sum_to_n(1000000000)}`); // Expected: 500000000995475700

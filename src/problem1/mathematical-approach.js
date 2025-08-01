/**
 * Mathematical Formula Approach
 *
 * Uses the mathematical formula: sum = n * (n + 1) / 2
 * This is derived from the arithmetic sequence formula.
 *
 * Time Complexity: O(1) - Constant time operation
 * Space Complexity: O(1) - Only uses constant extra space
 *
 * Pros: Extremely fast, optimal performance for any n
 * Cons: Requires mathematical knowledge
 */

function sum_to_n(n) {
  return (n * (n + 1)) / 2;
}

// Test cases
console.log("Implementation 2 - Mathematical:");
console.log(`sum_to_n(5) = ${sum_to_n(5)}`); // Expected: 15
console.log(`sum_to_n(100) = ${sum_to_n(100)}`); // Expected: 5050
console.log(`sum_to_n(100) = ${sum_to_n(1000000000)}`); // Expected: 500000000995475700

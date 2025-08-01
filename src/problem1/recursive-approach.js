/**
 * Trampolined Recursion Approach
 *
 * Uses trampolined recursion to avoid stack overflow issues.
 * The trampoline converts recursive calls into iterative execution.
 * Returns functions instead of making direct recursive calls.
 *
 * Time Complexity: O(n) - Still process n numbers iteratively
 * Space Complexity: O(1) - No call stack growth, constant space
 *
 * Pros: Recursive logic without stack overflow, handles large n
 * Cons: More complex implementation, slight performance overhead but still better than normal recursive approach
 */

function sum_to_n(n) {
  function trampoline(fn) {
    while (typeof fn === "function") {
      fn = fn();
    }
    return fn;
  }

  function sumHelper(n, acc = 0) {
    if (n <= 0) return acc;
    return () => sumHelper(n - 1, acc + n);
  }

  return trampoline(sumHelper(n));
}

// Test cases
console.log("Implementation 3 - Recursive:");
console.log(`sum_to_n(5) = ${sum_to_n(5)}`); // Expected: 15
console.log(`sum_to_n(100) = ${sum_to_n(100)}`); // Expected: 5050
console.log(`sum_to_n(100) = ${sum_to_n(1000000000)}`); // Expected: 500000000995475700

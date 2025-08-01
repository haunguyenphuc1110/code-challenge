# Sum to N - Three Implementations

This folder contains three unique implementations of the `sum_to_n` function in JavaScript.

## Function Specification

- **Input**: `n` - any integer
- **Output**: summation from 1 to n (e.g., `sum_to_n(5) = 1 + 2 + 3 + 4 + 5 = 15`)

## Implementations

### 1. Iterative Approach (`iterative-approach.js`)

- **Algorithm**: Simple for loop
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)
- **Best for**: General use

### 2. Mathematical Formula (`mathematical-approach.js`)

- **Algorithm**: Uses formula `n * (n + 1) / 2`
- **Time Complexity**: O(1)
- **Space Complexity**: O(1)
- **Best for**: Performance-critical, large values of n with optimal way

### 3. Trampolined Recursion (`recursive-approach.js`)

- **Algorithm**: Trampolined recursion to avoid stack overflow
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)
- **Best for**: Recursive logic without stack limitations, large numbers

## Running Tests

```bash
node iterative-approach.js
node mathematical-approach.js
node recursive-approach.js
```

function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This will cause issues if a or b are negative zero.
  }
  return a + b; 
}
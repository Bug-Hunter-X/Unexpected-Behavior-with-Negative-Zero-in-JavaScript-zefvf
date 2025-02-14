function myFunction(a, b) {
  if (a === 0 && b === 0) {
    return 0; // Handle the case where both inputs are zero. 
  } else if (a === 0 || b === 0 || a === -0 || b === -0) {
    return 0;
  }
  return a + b;
}
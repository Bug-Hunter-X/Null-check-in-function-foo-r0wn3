function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.');
    // Alternative handling: return null; or return undefined; 
    // Add more robust error handling or return a default value based on requirement
  }
  // ... rest of the function
}
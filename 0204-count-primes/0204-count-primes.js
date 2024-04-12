const countPrimes = (n) => {
  let count = 0;
  const isPrime = Array(n).fill(true);
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      count++;
      for (let j = i; j < n; j += i) isPrime[j] = false; // sieve out multiples
    }
  }
  return count;
};
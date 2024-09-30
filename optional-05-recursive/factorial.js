function factorial(n) {
    if (n === 0 || n === 1) {
      return 1; // Basis: faktorial dari 0 dan 1 adalah 1
    }
    return n * factorial(n - 1); // Rekursi: n * faktorial dari (n-1)
  }
  
  // Jangan hapus kode di bawah ini!
  export default factorial;
  
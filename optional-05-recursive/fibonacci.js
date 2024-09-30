function fibonacci(n) {
    if (n === 0) {
      return [0]; // Basis: deret Fibonacci untuk n=0 adalah [0]
    } else if (n === 1) {
      return [0, 1]; // Basis: deret Fibonacci untuk n=1 adalah [0, 1]
    }
    
    const seq = fibonacci(n - 1); // Rekursi: dapatkan deret Fibonacci hingga n-1
    seq.push(seq[seq.length - 1] + seq[seq.length - 2]); // Tambahkan elemen Fibonacci berikutnya
    return seq; // Kembalikan deret Fibonacci
  }
  
  // Jangan hapus kode di bawah ini!
  export default fibonacci;
  
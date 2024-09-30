import { strict as assert } from 'node:assert';
import test from 'node:test';
import sum from './index.js';

test('sum function tests', (t) => {
  // Test case 1: Menjumlahkan dua angka positif
  assert.equal(sum(2, 3), 5, '2 + 3 harusnya sama dengan 5');

  // Test case 2: Menjumlahkan angka positif dan nol
  assert.equal(sum(5, 0), 5, '5 + 0 harusnya sama dengan 5');

  // Test case 3: Menjumlahkan dua angka nol
  assert.equal(sum(0, 0), 0, '0 + 0 harusnya sama dengan 0');

  // Test case 4: Menjumlahkan angka positif dan negatif
  assert.equal(sum(3, -1), 0, '3 + -1 harusnya sama dengan 0 (karena negatif)');

  // Test case 5: Menjumlahkan dua angka negatif
  assert.equal(sum(-1, -2), 0, '-1 + -2 harusnya sama dengan 0 (karena negatif)');

  // Test case 6: Menjumlahkan dua argumen yang tidak valid (bukan angka)
  assert.equal(sum('a', 'b'), 0, '"a" + "b" harusnya sama dengan 0 (karena bukan angka)');
  assert.equal(sum(null, undefined), 0, 'null + undefined harusnya sama dengan 0 (karena bukan angka)');

  // Test case 7: Menjumlahkan dua angka positif yang besar
  assert.equal(sum(1000000, 500000), 1500000, '1000000 + 500000 harusnya sama dengan 1500000');
  
  // Test case 8: Menguji jenis data yang berbeda
  assert.equal(sum(10, '5'), 0, '10 + "5" harusnya sama dengan 0 (karena salah satu bukan angka)');
  assert.equal(sum([], {}), 0, '[] + {} harusnya sama dengan 0 (karena bukan angka)');

  // Test case 9: Menguji argumen dengan nilai NaN
  assert.equal(sum(NaN, 5), 0, 'NaN + 5 harusnya sama dengan 0');
  assert.equal(sum(5, NaN), 0, '5 + NaN harusnya sama dengan 0');
});

import { sum } from './index.js';
import { strict as assert } from 'node:assert';
import test from 'node:test';

test('sum function test', (t) => {
  // Test case 1: Penjumlahan dua angka positif
  assert.equal(sum(1, 2), 3, '1 + 2 seharusnya sama dengan 3');

  // Test case 2: Penjumlahan dua angka negatif
  assert.equal(sum(-1, -2), -3, '-1 + -2 seharusnya sama dengan -3');

  // Test case 3: Penjumlahan angka positif dan negatif
  assert.equal(sum(1, -2), -1, '1 + -2 seharusnya sama dengan -1');

  // Test case 4: Penjumlahan angka nol
  assert.equal(sum(0, 0), 0, '0 + 0 seharusnya sama dengan 0');
});

const calculate = (N) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  if (N < 0) return null;

  const col = [];

  for (let i = 0; i < N; i++) {
    const row = [];

    for (let j = 0; j < N; j++) {
      const index = (i + j) % alphabet.length;
      const element = alphabet[index];

      row.push(element);
    }

    col.push(row.join(' '));
  }

  return col.join('\n');
}
const delays = process.argv.slice(2);
for (let delay of delays) {
  if (isNaN(Number(delay)) || Number(delay) < 0) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, Number(delay) * 1000);
}
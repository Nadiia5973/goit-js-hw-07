const categ = document.querySelectorAll('.item');
console.log(`Number of categories: ${categ.length}`);
categ.forEach(cat => {
  const nameItem = cat.querySelector('h2').textContent;
  const lengthItem = cat.querySelectorAll('li');
  console.log(`Category: ${nameItem}`);
  console.log(`Elements: ${lengthItem.length}`);
});

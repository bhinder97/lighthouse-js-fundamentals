const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++
}
// Write a for loop that prints out the contents of ingredients:
for (ind = 0; ind < ingredients.length; ind++) {
  console.log(ingredients[ind]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (j = ingredients.length - 1; j >=0; j--) {
  console.log(ingredients[j])
}
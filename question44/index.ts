function makeSandwich(items: string[]) {
  console.log("Sandwich Summary:");
  console.log("Bread");
  for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
  }
  console.log("Bread");
  console.log();
}

makeSandwich(["Chilli Sauce", "Cheese", "Lettuce"]);
makeSandwich(["grill", "Zinger", "Tomato", "latuce"]);
makeSandwich(["Peanut Butter", "chicken"]);
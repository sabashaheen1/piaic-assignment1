function createList(): string[] {
  const items: string[] = [];

  const mountains: string[] = ["Karakoram", "Hindukash"];
  items.push(...mountains);

  const cities: string[] = ["Faisalabad", "Lahore", "Islamabad", "Karachi"];
  items.push(...cities);

  const languages: string[] = ["Punjabi", "Urdu", "Sindhi", "Pashto"];
  items.push(...languages);

  return items;
}

const myArray: string[] = createList();

console.log(myArray);
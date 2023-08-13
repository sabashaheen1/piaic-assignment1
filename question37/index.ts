function make_shirt1(size: string = "large", message: string = "I love TypeScript") {
  console.log("The shirt size is " + size + " and it will have the message: " + message);
}

make_shirt1();
make_shirt1("medium");
make_shirt1("small", "Software Engineer");
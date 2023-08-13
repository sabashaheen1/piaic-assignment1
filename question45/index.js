"use strict";
function store_car_info(manufacturer, model, ...args) {
    let carInfo = {
        "manufacturer": manufacturer,
        "model": model
    };
    for (let i = 0; i < args.length; i++) {
        const [key, value] = args[i];
        carInfo[key] = value;
    }
    return carInfo;
}
let car1 = store_car_info("Honda", "Civic", ["color", "blue"], ["year", 2023]);
console.log(car1);

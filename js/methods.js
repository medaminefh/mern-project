// String methods
let description =
	"21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz";

let result = description.includes("yghiyuik");
//console.log(result)

// 53.6544547 => 53.65$ => 3.75 = 201.19

// Number methods

// Array methods

let otherNames = ["Majdi", "Amira", "Abd elghani"];

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];

// let exemToString = names.concat(otherNames, arr1, arr2, arr3)
//let exemToString = [...names, ...otherNames, ...arr1, ...arr2, ...arr3]

/* let names = ["Mohamed amine", "Abou nasser", "Haroun", "Amira"];

let copyOfNames = [...names];

let slicedNames = copyOfNames.splice(2, 2, "Omar", "Amine");

console.log(names, copyOfNames, slicedNames); */

// map method

/*     let newArr = names.map(function(name) {
  console.log(name.length)
  return name.length
})

console.log(newArr) // [13, 11, 6]

// reduce method
let sum = newArr.reduce(function(total, value) {
  return total + value
}) */

/*         let scores = [
    50,90,80,75,30,55,36,75,84,46
  ]


// filter method (<50)
let res = scores.filter(function(score) {
  return score <= 50
})

console.log(res) */

// Object methods

let person1 = {
	firstName: "John",
	lastName: "Doe",
	age: 50,
	eyeColor: "blue",
};

const person2 = {
    firstName: "Anne",
    lastName: "Smith",
    job: "Software developer"
};

person1 = {
	age: 50,
	eyeColor: "blue",
    firstName: "Anne",
    lastName: "Smith",
    job: "Software developer"
}

console.log({person1, person2})



/* const person3 = Object.assign(person1, person2)

console.log({person1, person2, person3}) */
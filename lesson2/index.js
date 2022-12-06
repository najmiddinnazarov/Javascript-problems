// No1
// let str = "Webbrain Academy";
// let arr = str.split("");
// let upperCaseLetter = 0;
// let lowerCaseLetter = 0;
// let result = arr.filter((value) => {
//   if (value.toLowerCase() !== value.toUpperCase()) {
//     if (value == value.toUpperCase()) {
//       return upperCaseLetter++;
//     } else {
//       return lowerCaseLetter++;
//     }
//   }
// });
// console.log(`${upperCaseLetter} ta katta harf.
// ${lowerCaseLetter} ta kichik harf.`);

// No2
// let str = "WebBr@in Ac@demy";
// let result = "";
// for (const i of str) {
//   if (i !== "@") result += i;
//   else result += "a";
// }
// console.log(result);

// No3
// let str = "webbbraiiin accaddemmy";
// let arr = str.split("");
// let newArr = arr.filter((item, index) => arr.indexOf(item) === index);
// console.log(newArr.join(""));

// No4
// let str = "We66ra1n Acade4my";
// const string = (str) => {
//   let arr = str.split("");
//   let result = arr.map((value) => {
//     if (!isNaN(value) && value !== " ") {
//       return value;
//     }
//   });
//   return result.join("");
// };
// console.log(string(str));

// No5
// let str = "Webbrain";
// const string = (str) => {
//   let result = "";
//   for (const i of str) {
//     result += i.repeat(2);
//   }
//   return result;
// };
// console.log(string(str));

// No6
// const palindrom = (str) => {
//   let arr = str.split("").reverse().join("");
//   if (arr === str) return "Palindrom";
//   else return "Not palindrom";
// };
// console.log(palindrom("kuchuk"));

// No7
// const string = (a, b) => {
//   return a.length === b.length
//     ? a.toLowerCase().split("").sort().join("") ===
//         b.toLowerCase().split("").sort().join("")
//     : false;
// };
// console.log(string("web", "ewb"));

// No8
// const string = (str) => {
//   let obj = {};
//   for (const i of str) {
//     if (i !== " ") {
//       if (i in obj) obj[i]++;
//       else obj[i] = 1;
//     }
//   }
//   return obj;
// };
// console.log(string("webbrain academy"));

// No9
// const string = (str) => {};
// console.log(string("webbraaiiin")); // Error

// Objects
// No1
// let obj = { title: "Webbrain", age: 2 };
// for (const key in obj) {
//   console.log(key);
// }

// No3
// let object = {
//   title: "Webbrain",
//   age: 2,
//   child: { age: 4, name: "Webbrain", child: { age: 3 } },
// };
// let sum = 0;
// while (object) {
//   sum += object.age;
//   object = object.child;
// }
// console.log(sum);

// No3
// let object = {
//   id: 1,
//   name: "Webbrain",
//   offline: true,
//   online: true,
//   individual: false,
// };
// for (const key in object) {
//   if (typeof object[key] == "boolean") console.log(`${key}: ${object[key]}`);
// }

// Arrays
// const avarege = (arr) => {
//   while (1) {
//     if (arr.length > 0) {
//       arr.sort((a, b) => a - b);
//       let result = arr[arr.length - 1] - arr[arr.length - 2];
//       arr.splice(arr[arr.length - 1], 2, result);
//       return arr;
//     } else {
//       break;
//     }
//   }
// };
// console.log(avarege([2, 3, 2, 4, 5, 2, 3])); // Error

/////////////////object/////////////////

// No1
// object keylarini toping
// let obj = {
//   id: 1,
//   name: "WebBrain",
// };
// for (const key in obj) {
//   console.log(key);
// }

// No2
// let obj = {
//   id: 1,
//   name: "WebBrain",
// };
// for (const key in obj) {
//   if (typeof obj[key] == "number") {
//     console.log(key);
//   }
// }

// No3
// let obj = {
//   id: 1,
//   name: "WebBrain",
//   offline: true,
//   online: true,
//   individual: false,
// };
// for (const key in obj) {
//   if (typeof obj[key] == "boolean") {
//     console.log(`${key}: ${obj[key]}`);
//   }
// }

// No4
// let obj = {
//   id: 1,
//   name: "WebBrain",
//   offline: true,
//   online: true,
//   individual: false,
// };
// function Search(obj, str) {
//   for (const key in obj) {
//     if (obj[key] == str) {
//       return `${key}: ${obj[key]}`;
//     }
//   }
// }
// console.log(Search(obj, "WebBrain"));

// function Search(obj) {
//   let newArr = [];
//   for (const key in obj) {
//     if (typeof obj[key] == "string") {
//       let arr = `${key}: ${obj[key]}`;
//       newArr.push(arr);
//     }
//   }
//   return newArr;
// }
// console.log(Search(obj));

// No5
// let obj = {
//   id: 1,
//   name: "atirgul",
//   color: "qizil",
//   count: 10,
//   price: "10$",
// };
// const searchValue = (obj, i) => {
//   let arr = [];
//   for (const key in obj) {
//     if (typeof obj[key] == i) {
//       arr.push(obj[key]);
//     }
//   }
//   return arr.join(",");
// };
// console.log(searchValue(obj, "string"));

// No6
// let person = {
//   id: 1,
//   name: "Odil",
//   age: 78,
//   child: {
//     id: 1,
//     name: "Ali",
//     age: 48,
//     child: {
//       id: 1,
//       name: "Umar",
//       age: 20,
//     },
//   },
// };
// let sum = 0;
// while (person) {
//   sum += person.age;
//   person = person.child;
// }
// console.log(sum);

// No8
// let arr = [
//   { id: 1, name: "Usmon", job: "developer" },
//   { id: 2, name: "Usmon", job: "developer" },
//   { id: 3, name: "Usmon" },
//   { id: 4, name: "Usmon", job: "developer" },
//   { id: 5, name: "Usmon" },
// ];
// for (let i = 0; i < arr.length; i++) {
//   for (const key in arr[i]) {
//     if (key == "job") {
//       console.log(arr[i]);
//     }
//   }
// }

// No9
// let obj = {
//   id: 1,
//   name: "Usmon",
//   job: "developer",
// };
// let newObj = structuredClone(obj);
// console.log(newObj);

// No 10
// function obj(key, value) {
//   const obj = {};
//   obj[key] = value;
//   return obj;
// }
// console.log(obj("address", "toshkent"));

// No11
// let obj = {
//   id: 1,
//   name: "Usmon",
//   job: "developer",
//   practice: 1,
// };
// for (const key in obj) {
//   if (key == "practice") {
//     if (obj[key] >= 1) {
//       console.log("Qabul qilindi");
//     } else {
//       console.log("Ming bor uzr");
//     }
//   }
// }

// No12
// let obj = {
//   id: 1,
//   name: "Usmon",
//   job: "developer",
//   practice: 1,
//   talaba: true,
// };
// for (const key in obj) {
//   if (key == "talaba") {
//     if (obj[key]) {
//       obj.credit = true;
//     } else {
//       obj.credit = false;
//     }
//   }
// }
// console.log(obj);

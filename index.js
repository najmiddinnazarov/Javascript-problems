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

// No7
// array berilgan array ning ichida objectlar berilgan. object ichida age berilgan. age ni 18dan katta bolgan objectlarni qaytaring
// let user = {
//   id: 1,
//   name: "Odil",
//   age: 78,
//   children: [
//     {
//       id: 1,
//       name: "Umar",
//       age: 54,
//       children: [
//         { id: 1, name: "Asmo", age: 34 },
//         { id: 2, name: "Osim", age: 30 },
//         { id: 3, name: "Xattob", age: 25 },
//       ],
//     },
//     { id: 2, name: "Umar", age: 54 },
//     { id: 3, name: "Umar", age: 54 },
//   ],
// }; // Error

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

// No10
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

// No13
// let obj = {
//   id: 1,
//   name: "Usmon",
//   age: 19,
//   year: 2006,
// };
// let currentYear = 2022;
// if (currentYear - obj["year"] == obj["age"]) {
//   console.log("Ma'lumot to'g'ri kiritildi!");
// } else {
//   console.log("Ma'lumot xato kiritildi!");
// }

// No14
// arr = ["Andijon", "Namangan", "Qarshi", "toshkent"];
// let student = {
//   name: "Aziz",
//   age: 22,
// };
// student["regin"] = "Namangan";
// if (arr.includes(student.regin)) {
//   console.log("ok");
// } else {
//   console.log(
//     `Bizning filallarimiz faqat shu viloyatlarda => ${arr.join(" ")}`
//   );
// }

// No15
// let arr = [
//   { id: 4, name: "Salohiddin", parol: "3421" },
//   { id: 3, name: "Usmon", parol: "1231" },
//   { id: 1, name: "Umar", parol: "1241" },
//   { id: 5, name: "Jasur", parol: "3452" },
//   { id: 2, name: "Asmo", parol: "2312" },
// ];
// function logIn(login, parol) {
//   for (const value of arr) {
//     if (value["name"] == login && value["parol"] == parol) {
//       return "Hush kelibsiz";
//     } else {
//       return "Login yoki parol xato";
//     }
//   }
// }
// console.log(logIn("Umar", "2113"));
// console.log(logIn("Salohiddin", "3421"));

// No16
// obj = {
//   id: 1,
//   title: "the best",
//   address: { street: "Farobiy", number: "34" },
// };
// let result = "";
// for (const key in obj) {
//   result = typeof obj[key] == "object" || false;
// }
// console.log(result);

// No17
// let person = {
//   id: 1,
//   name: "Umar",
//   surname: "Ismoilov",
// };

// person["ielts"] = 5.5;
// console.log(person);

// 2,3,4,5,6-shart
// for (const key in person) {
//   if (key == "ielts") {
//     if (person[key] >= 5.5) {
//       person["student"] = true;
//       person["parol"] = Math.trunc(Math.random() * 100);
//       Object.seal(person);
//       console.log("Qabul qilindi");
//     } else {
//       person["student"] = false;
//       console.log("Qayta topshirish kerak");
//     }
//   }
// }
// console.log(person);

// const enterStudend = (parol, name) => {
//   if (parol == person["parol"] && name == person["name"]) {
//     return "Hush kelibsiz";
//   } else {
//     return "Parol yoki name xato";
//   }
// };
// console.log(enterStudend(86, "Umar"));

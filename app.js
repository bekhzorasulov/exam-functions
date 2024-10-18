// 1 misol

// const products = [
//     { name: "Laptop", price: 1000, sales: 150 },
//     { name: "Phone", price: 500, sales: 300 },
//     { name: "Watch", price: 200, sales: 100 },
// ];
// part 1
// function sortProduction(arr, key, order = "asc") {
//     return arr.sort((a, b) => {
//         if (order === "asc") {
//             return a[key] - b[key];
//         } else {
//             b[key] - a[key];
//         }
//     });
// }
// const sortPrice = sortProduction(products, "price", "asc");
// console.log(sortPrice);

// const sortSales = sortProduction(products, "sales", "desc");
// console.log(sortSales);

// part 2
// const result1 = products.sort((a, b) => a.price - b.price);
// console.log(result1);

// const result2 = products.sort((a, b) => a.sales - b.sales);
// console.log(result2);

// 2 misol
// const students = [
//     { name: "Akmal", grades: [85, 90, 80] },
//     { name: "Salim", grades: [60, 70, 65] },
//     { name: "Nozim", grades: [50, 40, 55] },
// ];
// const calc = students.filter((student) => {
//     const calcGrade =
//         student.grades.reduce((acc, curVal) => acc + curVal, 0) /
//         student.grades.length;
//     return calcGrade < 70;
// });
// console.log(calc);

// 3 misol
// const products = [
//     { name: "Laptop", price: 1000, quantity: 2 },
//     { name: "Phone", price: 500, quantity: 3 },
//     { name: "Shoes", price: 100, quantity: 4 },
// ];

// const result = products.map((product) => {
//     const totalPrice = product.price * product.quantity;
//     return { name: product.name, price: totalPrice };
// });
// console.log(result);

// 4 misol
// const products = [
//     { name: "Laptop", price: 1000, quantity: 2, tax: 100 },
//     { name: "Phone", price: 500, quantity: 3, tax: 50 },
//     { name: "Shoes", price: 100, quantity: 4, tax: 10 },
// ];
// const result = products.map((product) => {
//     const totalPrice = product.price * product.quantity + product.tax;
//     return { name: product.name, price: totalPrice };
// });
// console.log(result);

// 5 misol
// const books = [
//     { title: "Book A", author: "Author A" },
//     { title: "Book B", author: "Author A" },
//     { title: "Book C", author: "Author B" },
//     { title: "Book D", author: "Author C" },
// ];
// const result = books
//     .filter(
//         (book, index, self) =>
//         index === self.findIndex((b) => b.author === book.author)
//     )
//     .sort((a, b) => a - b);

// console.log(result);

// 6 misol
// const dates = [
//     { event: "Event A", date: new Date("2023-10-01") },
//     { event: "Event B", date: new Date("2022-12-15") },
//     { event: "Event C", date: new Date("2024-01-10") },
// ];
// const result = dates.sort((a, b) => a.date - b.date);
// console.log(result);

// 7 misol
// const products = [
//     { name: "Laptop", price: 1000 },
//     { name: "Phone", price: 500 },
//     { name: "Shoes", price: 100 },
// ];

// const result =
//     products.reduce((acc, curVal) => acc + curVal.price, 0) / products.length;
// console.log(result);

// 8 misol
// const books = [
//     { title: "Book A", year: 2001 },
//     { title: "Book B", year: 1995 },
//     { title: "Book C", year: 2010 },
//     { title: "Book D", year: 2020 },
// ];
// const result = books.sort((a, b) => a.year - b.year);
// console.log(result);

// 9 misol
// const products = [
//     { name: "Laptop", price: 1000, sold: false },
//     { name: "Phone", price: 500, sold: false },
//     { name: "Shoes", price: 100, sold: false },
// ];
// products.map(allSold);

// function allSold(product) {
//     product.sold = true;
// }
// console.log(products);

// 10 misol
// const products = [
//     { name: "Laptop", price: 1000, quantity: 2 },
//     { name: "Phone", price: 500, quantity: 3 },
//     { name: "Shoes", price: 100, quantity: 4 },
// ];
// const totalNum = products
//     .map((total) => total.quantity)
//     .reduce((acc, curVal) => acc + curVal);
// const totalSum = products
//     .map((total) => total.price * total.quantity)
//     .reduce((acc, curVal) => acc + curVal);
// console.log("totalNum " + totalNum, "totalSum " + totalSum);

// 11 misol
// const products = [
//     { name: "Laptop", quantity: 2 },
//     { name: "Phone", quantity: 3 },
//     { name: "Laptop", quantity: 1 },
//     { name: "Shoes", quantity: 4 },
// ];
// let counter = [];
// for (let product of products) {
//     if (counter.includes(product.name)) {}
// }
// console.log(counter);

// 12 misol
// const products = [
//     { name: "Laptop", category: "Electronics" },
//     { name: "Phone", category: "Electronics" },
//     { name: "Shoes", category: "Fashion" },
// ];
// const byName = products.map((a) => a.name);
// const byCategory = products.map((b) => b.category);
// console.log("Name", byName);
// console.log("Category:", byCategory);

const user = { id: 101, username: "dev_guy", location: "New York" };

// Basic destructuring with renaming and default values
const { username, location: city, status = "active" } = user;

console.log(username); // "dev_guy"
console.log(city);     // "New York" (renamed)
console.log(status); 
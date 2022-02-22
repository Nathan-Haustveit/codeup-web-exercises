// -- Mini Exercise 1
// Create a few beverage objects and assign values to each object for the following properties:
//     - brandName
//     - type
//     - volumeInLiters
//     - priceInCents
//     - expirationDate
//     - datesOfPreviousSips (use an array of strings)
// - isOpen
// Define your objects using both literal syntax to create all properties and values at once and also try defining empty objects and assign property values in separate statements using the dot notation.

var beverage1 = {
    brandName : 'coke',
    type : 'soda',
    volumeInLiters : 2,
    priceInCents : 200,
    expirationDate : ['11/24/2022'],
    datesOfPreviousSips : ['1/22', '1/29', '2/5'],
    isOpen : true
};

var beverage2 = {
brandName: 'minute maid',
type: 'lemonade',
volumeInLiters: 1,
priceInCents: 120,
expirationDate: 9/28/2022,
datesOfPreviousSips: ['1/26', '1/30', '2/10'],
isOpen: true
};

var beverage3 = {
brandName: 'Simply',
type: 'Orange Juice',
volumeInLiters: 1.5,
priceInCents: 400,
expirationDate: 3/5/2022,
datesOfPreviousSips: ['2/4', '2/5', '2/6'],
isOpen: true
}

console.log(beverage1);
console.log(beverage2);
console.log(beverage3);

//-- Mini Exercise 2
var users = [
    {
        givenName: 'Sam',
        age: 21
    },
    {
        givenName: 'Cathy',
        age: 34
    },
    {
        givenName: 'Karen',
        age: 43
    }
];
// 1. Log the names of all users in a single console log separated by spaces. // output = “Sam Cathy Karen”


console.log(users[0].givenName + ' ' + users[1].givenName + ' ' + users[2].givenName) ;

// 2. Change the names of all users to “John Doe”
users.forEach(function(name){
    name.givenName = 'John Doe';
})
console.log(users);

//   3. Increase the current age of all users by 1
// Can you accomplish each step using iteration?

users.forEach(function(user){
    user.age = user.age + 1;
})
console.log(users);

//get the total of all the ages

console.log(users[0].age+users[1].age+users[2].age)

//find the average of all ages of users

console.log((users[0].age+users[1].age+users[2].age)/3)

// log all the user information in the following format...

/*

user: Sam | age: 21
user: Cathy | age: 34
user: Karen | age: 43
 */
// for (var i = 0; i < pets.length; i += 1) {
//     console.log(pets[i].givenName);
//   }
for (var i = 0; i < users.length; i +=1)

console.log('user: ' + users[i].givenName + ' | ' + ' age: ' + users[i].age)

//log the name of the longest given name of user




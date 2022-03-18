// 1 create a file named map-filter-reduce.js in your js directory and copy the users data below into it.

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const userLanguages3 = users.filter ((users) => (users.languages).length >= 3)
console.log(userLanguages3)

//3. Use .map to create an array of strings where each element is a user's email address
const usersEmail = users.map ((users) => users.email)
console.log(usersEmail)

//4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
const totalYearsOfExperience = users.reduce ((previousValue, currentValue) => previousValue+currentValue.yearsOfExperience, 0)
console.log(totalYearsOfExperience)

//5. Use .reduce to get the longest email from the list of users.
const longestEmail = usersEmail.reduce ((previousValue, currentValue) => {
        return previousValue.length > currentValue.length ? previousValue : currentValue;
    }
);
console.log(longestEmail)
//6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

const nameString = users.reduce((previousValue, currentValue) => {
    previousValue += currentValue.name + ', '
return previousValue
},"Your instructors are: ")
console.log(nameString)




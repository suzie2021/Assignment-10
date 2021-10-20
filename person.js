const Person = {
    name: 'Armstrong',
    profession: 'Software Developer',
    city: 'Kampala'
}

const Person2 = {...Person}

module.exports = {
    person1: Person,
    person2: Person2
}


// export default {
//     Person: {
//         name: 'Armstrong',
//             profession: 'Software Developer',
//             city: 'Kampala' 
//     },
//     Person2: {
//         name: 'Armstrong',
//             profession: 'Software Developer',
//             city: 'Kampala' 
//     },
// }

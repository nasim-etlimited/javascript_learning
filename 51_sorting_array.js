// const numbers = [2, 3, 1];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

const courses = [
    {id: 1, name: 'python'},
    {id: 2, name: 'django'},
    {id: 3, name: 'b'},
    {id: 4, name: 'a'},
];

courses.sort(function(a, b) {

    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();


    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});
console.log(courses);

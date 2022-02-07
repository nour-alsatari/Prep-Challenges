'use strict';
// Important Note: 
// Kindly use filter instead of for in all of your solutions

// Resource:
// Filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// 1) ---------------------
// 
// Given an array of values use filter to extract odd values.
//  
// EX:
// [20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200] ==> [89, 41, 31, 111, 31]
// 
// ------------------------

const oddFiltration = (arr) => {

    let x = arr.filter((ele) => {
        if (ele % 2 != 0) {
            return ele;
        }
    });
    return x;

}

// 2) ---------------------
// 
// Given data of candidates return the candidates CVs that have more than 4 years of experience 
// and works as JS developer 

// EX:
// var cvs = [
//     {
//         firstName: "Jason",
//         LastName: "James",
//         yearsOfExperience: 20,
//         tech: "JS"
//     },
//     {
//         firstName: "Shira",
//         LastName: null,
//         yearsOfExperience: 5,
//         tech: ".Net"
//     },
//     {
//         firstName: "Dmitri",
//         LastName: "Akkerman",
//         yearsOfExperience: 1,
//         tech: "Python"
//     },
//     {
//         firstName: "Isabella",
//         LastName: null,
//         yearsOfExperience: 4,
//         tech: "Java"
//     }
// ]
//
//   ===>
//
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null dont add it to the full name
// ------------------------

const cvsFiltration = (arr) => {

    let qualified = arr.filter(candidate => {

        if (candidate.yearsOfExperience > 4 && candidate.tech == "JS") {
            return candidate; // only return the original item
        }
    }).map(candidate => { // modification can't be inside filter

        let obj = {} // create an obj so i don't have to mod the original one
        if (candidate.firstName == null) {
            obj.fullName = candidate.LastName
        } else if (candidate.LastName == null) {
            obj.fullName = candidate.firstName
        } else {
            obj.fullName = `${candidate.firstName} ${candidate.LastName}`;

        }
        obj.tech = candidate.tech;

        return obj
    })


    console.log(qualified)
    return qualified


}

// 3) ---------------------
//
// Given an array of words filter the names that contains one of the vowels (a, e, i, o, u)

// EX:
// ['car', 'boy', 'spy', 'building', 'why', 'dry' ] ==> ['spy', 'why', 'dry']
// 
// ------------------------

const vowelsFiltration = (arr) => {

    let regex = /[aeiou]/;
    let newArr = arr.filter(word => !regex.test(word))

    return newArr;
}

// 4) ---------------------
//
// An employer wants to compare between his employees skills, write a function that will extract the differences 
// between the employees skills.

// EX:
// first_Employee = [C, C#, Java, Angular, PHP]
// first_Employee = [C#, .Net, JavaScript, React, Angular]
// ==>
// result = [C, Java, PHP, .Net, JavaScript, React]
// Hint:
// - the 'include' method can help you, read about it.
// ------------------------

const skillComparison = (arr1, arr2) => {

    let diff1 = arr1.filter(ele => !arr2.includes(ele))

    let diff2 = arr2.filter(ele => !arr1.includes(ele))

    let bothArrays = diff1.concat(diff2);
    return bothArrays;
}

// const intersection = array1.filter(element => array2.includes(element));


module.exports = { oddFiltration, cvsFiltration, vowelsFiltration, skillComparison };


console.log("recursion js");

//function orqali darajaga ko'paytirish
// function pow (x, n) {
//     let result = 1;

//     for(let i = 0; i < n; i++) {
//         result *= x;
//         // result = x * result; // yuqoridagini kengaytirmasi
//     }

//     return result;
// }

//recurtion orqali darajaga ko'paytirish
// function pow(x, n) {
//     if(n===1){
//         return x;
//     }else{
//         return x * pow(x, n - 1);
//     }
// }



// console.log(pow(2, 1));
// console.log(pow(2, 2));
// console.log(pow(2, 3));
// console.log(pow(2, 4));
//=========================================================================================================

let students = {
    js: [{
        name: 'Jonh',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
};

// ====================== for loopda yozish ======================
// function getTotalProgressByIteration (data) {
//     let total = 0;
//     students = 0;

//     for(let course of Object.values(data)){
//         if(Array.isArray(course)) {
//             students += course.length;

//             for(let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//             }
//         } else {
//             for(let subCourse of Object.values(course)) {
//                 students += subCourse.length;
    
//                 for(let i = 0; i < subCourse.length; i++) {
//                     total += subCourse[i].progress;
//                 }
//             }
//         }
//     }

//     return total /students;
// }

// console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
    if(Array.isArray(data)) {
        let total = 0;

        for(let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    }else {
        let total = [0, 0];

        for(let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
           
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;

    }
}

const result = getTotalProgressByRecursion(students);

console.log(result[0]/result[1]);

//==============================================================================================================
//====================================Webbrain o'qtuvchi ko'rsatgan usul========================================
//==============================================================================================================


let user = {
    name: "test",
    age: 30, 
    child: {
        name: "test2",
        age: 20,
        child: {
            age: 10
        }
    }
};

let sum = 0; 

function getAge(obj) {
    sum += obj.age;

    if(obj.child) {
        getAge(obj.child)
    }
}

getAge(user);
console.log(sum);

function objects(){
  
    for (i=0;i<staff.length;i++){
        console.log(staff[i])
    }
}
objects()



const fullName = staff.map(x => `${x.firstName} ${x.firstName}`);
console.log(fullName)


const twentyOne = staff.filter(a => (a.age >21));
console.log(twentyOne)

const sorted = staff.sort((a, b) => (a.experience - b.experience));
console.log(sorted)

const total = staff.reduce((total, person) => total + person.age, 0);
let average = total/staff.length
console.log(average)

const exect = staff.filter(a => (a.language = 'Turkish' && a.age<40 && a.isActive));

const ageSorted = exect.sort((a, b) => (a-b));
console.log(ageSorted)

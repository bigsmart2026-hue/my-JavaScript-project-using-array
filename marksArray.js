let marks = [40, 55, 72, 88, 63]
let count = 0

for (let i = 0; i < marks.length; i++) {
    if (marks[i] > 60){
        count += 1
    }
}
console.log(count)
export default function calculator (props){

    let totalNum = props.data.length;

    let avgAge = Math.floor(
        props.data.reduce((l, student) => {
            return l + student.age
        }, 0) / props.data.length
    )

    // Describe how this code works.
    // What is an alternate way to write this code to calculate the
    // maximum course enrolment?
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    for(let m = 0; m < props.data.length; m++){
        if(props.data[m].course === 1){
            count1++
        } else if (props.data[m].course === 2){
            count2++
        } else count3++
    }
    let maxEnroll = count1 > count2 ? count1 :
                    count2 > count3 ? count2 : count3;

    // How could we rewrite maxGrade so that we got both the highest score
    // and the name of the student with that grade?
    let maxGrade = props.data.reduce((n, student) => {
        return n > student.grade ? n : student.grade
    }, 0);

    // How is .map() valuable in this function? 
    // How does it help us calulate the median grade?
    let sortedGrades = props.data.map((student) => {
        return student.grade
    }).sort();
    let medianGrade = sortedGrades[Math.floor((sortedGrades.length + 1) / 2)]

    let avgGrade = (props.data.reduce((o, student) => {
        return o + student.grade
    }, 0) / props.data.length).toFixed(2);

    // Describe how this code works.
    // How is the most effective marketing source being determined here?
    let countArray = [0,0,0];
    let largest = 0;
    let index = 0
    for(let p = 0; p < props.data.length; p++){
        countArray[props.data[p].source - 1]++
    }
    for (let q = 0; q < 3; q++){
        if(countArray[q] > largest){
            largest = countArray[q];
            index = q;
        }
    }
    let maxEffective = index === 0 ? "Organic"   : 
                       index === 1 ? "Marketing" : "Referral";

    return {avgAge, avgGrade, maxEffective, maxEnroll, maxGrade, medianGrade, totalNum}
}
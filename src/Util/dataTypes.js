let ageData = {
    type: "age",
    textA : "18-30",
    rangeA : 30,
    textB : "31 - 60",
    rangeB : 60,
    textC : "65+"
}

let gradeData = {
    type: "grade",
    textA : "< 80%",
    rangeA : 79,
    textB : "80% - 89%",
    rangeB : 89,
    textC : "> 90%"
}

let courseData = {
    type: "course",
    rangeA: 1,
    rangeB: 2,
    rangeC: 3,
    textA : "WD Remote",
    textB : "UX Full Time",
    textC : "WD Full Time"
}

let sourceData = {
    type: "source",
    rangeA: 1,
    rangeB: 2,
    rangeC: 3,
    textA : "Organic",
    textB : "Marketing",
    textC : "Referral"
}

let dataTypes = [ageData, courseData, gradeData, sourceData]

export default dataTypes;

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('student').del()
    .then(function () {
      // Inserts seed entries
      return knex('student').insert([
        {name: "Joey Ramone", age: 18, email:"rocknrollhighschool@gmail.com", course: 1, grade: 85, source: 1},
        {name: "Brian Wilson", age: 18, email:"petsounds@apple.com", course: 3, grade: 80, source: 2},
        {name: "Chet Atkins", age: 25, email:"mrguitar@gmail.com", course: 2, grade: 90, source: 3},
        {name: "Bo Diddley", age: 29, email:"bo@diddley.io", course: 3, grade: 88, source: 3},
        {name: "Elton John", age: 36, email:"benny@thejets.com", course: 3, grade: 60, source: 2},
        {name: "Fleetwood Mac", age: 42, email:"rumours@tusk.gov", course: 1, grade: 75, source: 2},
        {name: "Miles Davis", age: 68, email:"so@what.edu", course: 3, grade: 94, source: 3},
        {name: "Elliott Smith", age: 32, email:"xo@myspace.com", course: 2, grade: 82, source: 2},
        {name: "Michael Jackson", age: 25, email:"maninthemirror@gmail.com", course: 2, grade: 90, source: 1},
        {name: "Janelle Monae", age: 29, email:"electriclady@gmail.com", course: 3, grade: 87, source: 3},
        {name: "Jimi Hendrix", age: 27, email:"purple@haze.com", course: 3, grade: 84, source: 2},
        {name: "Phil Collins", age: 42, email:"nojacketrequired@yahoo.com", course: 1, grade: 77, source: 1},
        {name: "Willie Nelson", age: 68, email:"georgia@mymind.gov", course: 3, grade: 84, source: 3},
        {name: "James Hetfield", age: 55, email:"ridethelightning@aol.com", course: 2, grade: 75, source: 3},
        {name: "Rivers Cuomo", age: 32, email:"onlyindreams@gmail.com", course: 2, grade: 86, source: 1}
      ]);
    });
};

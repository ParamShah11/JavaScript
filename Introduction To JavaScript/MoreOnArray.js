const marvel_heroes = ["Captain America","Thor","Iron Man"]

const dc_heroes = ["Superman","Batman"]

marvel_heroes.push(dc_heroes)

console.log(marvel_heroes);
console.log(marvel_heroes[3][0]);

let all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes)

// Spread Operator

const all_new_heroes = [...marvel_heroes,...dc_heroes]
console.log(all_new_heroes);


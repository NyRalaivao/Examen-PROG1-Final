

let directions = ["NORD" , "SUD" , "SUD" , "EST" , "OUEST" , "NORD" , "OUEST"];


function reduceDirections(directions) {
    let newDirections = [];
    for (let i = 0; i < directions.length; i++) {
        if (directions[i] == "NORD" && directions[i+1] == "SUD" || directions[i] == "SUD" && directions[i+1] == "NORD") {
            newDirections.filter(directions[i], directions[i+1]);
        }
        if (directions[i] == "EST" && directions[i+1] == "OUEST" || directions[i] == "OUEST" && directions[i+1] == "EST") {
            newDirections.filter(directions[i], directions[i+1]);
        }
    } return directions;
}

console.log(reduceDirections(directions));
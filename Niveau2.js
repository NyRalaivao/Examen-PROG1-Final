let map = ["....X", "X....", ".....", "..X..", "X...X"];
let N = 5;

function countMaxBobsleigh(N, map) {
    for (let i = 0; i < map.length; i++) {
        if (map.length == N || map.indexOf(i).length == N) {
            throw new Error ("Ooops! le nombre de colonne et/ou le nombre de ligne ne correspond pas à N")
        };
        for (let j = 0; j < map.indexOf(i).length; j++) {
            if (map(i)(j))
        }
    }
    console.log(N);
    
}
// learningevents needs to be first, until code is refactored @ filtering.js:26
// all should be case sensitive
const cop = {
    id : "cop",
    labels : [
        "community of practice",
        "community of practices",
        "cop",
        "cops",
        "com of practice"
    ]
}

const landl = {
    id : "landl",
    labels : [
        "lunch and learn",
        "lunch and learns",
        "l & l",
        "l&l",
        "lunch & learn", 
        "landl",
        "lunchandlearn",
        "lunch n learn"
    ]
}
const learningevents = {
    id : "learningevents",
    labels : [
        "learningevents",
        "learnevents",
        "learning events",
        "learn events",
        "learning event",
        ...landl.labels,
        ...cop.labels
    ]
}

module.exports = [
    learningevents,
    cop, 
    landl, 
];
// employee data here

var employees = [
    {
        name: "Ahmed",
        photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores: [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        name: "Jacob Deming",
        photo: "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
        scores: [
            4,
            2,
            5,
            1,
            3,
            2,
            2,
            1,
            3,
            2
        ]
    },
    {
        name: "Jeremiah Scanlon",
        photo: "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
        scores: [
            5,
            2,
            2,
            2,
            4,
            1,
            3,
            2,
            5,
            5
        ]
    },
    {
        name: "Johnny B. Goode",
        photo: "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
        scores: [
            2,
            2,
            5,
            2,
            1,
            1,
            1,
            2,
            2,
            5
        ]
    },
    {
        name: "Tommy Bahama",
        photo: "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
        scores: [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            5,
            5
        ]
    },
    {
        name: "Joleana Jimenez",
        photo: "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
        scores: [
            5,
            5,
            5,
            5,
            4,
            1,
            3,
            2,
            2,
            5
        ]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = employees;
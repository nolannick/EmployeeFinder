let employees = require('../data/employees.js');

module.exports = function (app) {

    /**
     * GET the employees
     */
    app.get('/api/employees', function (req, res) {
        res.json(employees);
    });




    app.post('/api/employees', function (req, res) {

        const userData = req.body;
        let compareSumArray = [];
        let matchIndex = 0;
        let match = {};

        //loops through the employees data to associate matches
        for (let i = 0; i < employees.length; i++) {
            let surveySum = 0;
            console.log ("survey Sum", surveySum);
            //loops through the array of answers from employee and compares to user data
            for (let x = 0; x < 10; x++) {
                surveySum = surveySum + Math.abs(parseInt(employees[i].scores[x]) - parseInt(userData.scores[x]));
                console.log("second loop survey sum", surveySum);
            };
            //adds the sum to an array that corresponds to the employee index
            compareSumArray.push(parseInt(surveySum));
            console.log(compareSumArray);
        };

        //finds the matching employee and stores the index of that employee
        for (i = 1; i < employees.length; i++) {
            if (compareSumArray[i] <= compareSumArray[i-1]) {
                matchIndex = i;
                console.log("matching EE:", matchIndex);
            } else {
                console.log("ELSE matching EE:", matchIndex);
            };
        };

        //returning the match in order to populate the success modal
        match = {
            'name': employees[matchIndex].name,
            'photo': employees[matchIndex].photo
        };

        console.log(match);
        employees.push(req.body);
        res.json(match);

    });
}

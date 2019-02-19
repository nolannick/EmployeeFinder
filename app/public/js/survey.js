$(function () {
    const validateForm = function () {
        let isValid = true;

        $('input').each(function () {
            if (!$(this).val()) {
                isValid = false;
            }
        });

        $('.custom-select').each(function (i, element) {
            if (!$(this).val()) {
                isValid = false;
            }
        });

        return isValid
    }
    //displays the modal with bestmatch. Still needs to be configured to work with bestMatch
    const displayModal = function (match) {
        $('#match-name').text(match.name);
        $('#match-img').attr('src', match.photo);

        // Show the modal with the best match
        $('#results-modal').modal('toggle');
    }



    const surveyToArray = function () {
        event.preventDefault();
        //creates an array of selections made
        if (validateForm()) {
            console.log(true);
            let arrayResponse =
                [$('#q1').val(),
                $('#q2').val(),
                $('#q3').val(),
                $('#q4').val(),
                $('#q5').val(),
                $('#q6').val(),
                $('#q7').val(),
                $('#q8').val(),
                $('#q9').val(),
                $('#q10').val()];

            console.log(arrayResponse);
            console.log($('#q1').val());

            let surveyArray = {
                name: $('#name').val().trim(),
                photo: $('#photo').val().trim(),
                scores: arrayResponse
            }
            //posts selections to the API, returns the match. This is erroring for some reason...
            $.ajax({
                url: "api/employees",
                method: 'POST',
                data: surveyArray
            }).then(function (response) {
                console.log(response);
                displayModal(response);
            });
        } else {
            $('#error')
                .text('Please fill out all fields in order to submit')
                .addClass('alert alert-danger');
        }
    }


    $('#submit').on('click', surveyToArray);
});
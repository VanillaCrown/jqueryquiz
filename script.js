$(document).ready(function () {
    var correctAnswer = "C"; 

$('.option').click(function () {
        $('.option').removeClass('selected');
        $(this).addClass('selected');
        selectedAnswer = $(this).text().charAt(0); 
});
    $('.option').hover(function () {
        $('#submit-btn').show();
    });           
    $('#submit-btn').click(function () {
        if (selectedAnswer === correctAnswer) {
            $('#result').text('Correct!');
        } else {
            $('#result').text('Incorrect');}
        $('#result').show();
    });
});



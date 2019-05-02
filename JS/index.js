$('.button').on('click',function(){
    var input = $('#input').val();
    if(!input){
        $('#task7').append("Enter something in the textbox <br>");
        return;
    }
    $('#task7').append("You input: "+input+'<br>');
    e.preventDefault();
}); 
$(document).ready(function() {
// write your code here
$.getJSON('data.json', function(obj) {
    // possibly create arrays for html? 
    console.log(obj);
    $.each(obj, function(index, val) {
        $('#table').append('<tr>' + '<td class="name">' + val.name + '</td>' + 
        '<td>' + val.description + '</td>' + 
        '<td>' + '<input type="button" onclick="location.href=' + 
        "'https://www.google.com/maps?q=" + 
        val.location + "'" + ';" value="See it on Google!"' + '/>' + '</td>' + 
        '</tr>');
    });
});
});






 /*$('#table').append('<td>' + val.name + '</td>');
        $('#table').append('<td>' + val.description + '</td>');
        $('#table').append('<td>https://www.google.com/maps?q=' + val.location + '</td>');*/
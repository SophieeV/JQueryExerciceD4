var nameRegex=/[A-Z][a-z]*(-[A-Z][a-z]?)?/;
var birthRegex=/(\d{2})(|-|\/|)(\d{2})(|-|\/|)(\d{4})/;
var jobRegex=/[A-Z a-z]/;
$(document).ready(function(){
    $("#b1").click(function(event){
        if(nameRegex.test($("#surname").val())== false){
            event.preventDefault();
            $('#surname').css("border","3px solid red");
            alert("format non valide");
        }else{
            $('#name').css("border","3px solid green");
        }
        if(nameRegex.test($("#name").val())== false){
            event.preventDefault();
            alert("format non valide");
            $('#name').css("border","3px solid red");
        }else{
            $('#name').css("border","3px solid green");
        }
        if(birthRegex.test($("#birthdate").val())== false){
            event.preventDefault();
            alert("date de naissance non valide");
            $('#birthdate').css("border","3px solid red");
            return true;
        }else{
            $('#birthdate').css("border","3px solid green");
        }
        if(nameRegex.test($("#birthplace").val())== false){
            event.preventDefault();
            alert("lieu de naissance non valide");
            $('#birthplace').css("border","3px solid red");
            return true;
        }else{
            $('#birthdate').css("border","3px solid green");
        }
        if(jobRegex.test($("#job").val())== false){
            event.preventDefault();
            alert("profession non valide");
            $('#job').css("border","3px solid red");
        }else{
            $('#job').css("border","3px solid green");
        }
        if(($("#company").val())== false){
            event.preventDefault();
            alert("société non valide");
            $('#company').css("border","3px solid red");

        }else{
            $('#company').css("border","3px solid green");
        }
       alert ("nom: " +$("#surname").val() +"\n"+ "prénom: " +$("#name").val() +"\n"+ "date de naissance: "+$("#birthdate").val() +"\n"+ "lieu de naissance: " +$("#birthplace").val() +"\n"+ "profession: "+$("#job").val() +"\n"+ "société: "+$("#company").val())
});
});

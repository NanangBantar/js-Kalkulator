function insert(num){
    document.form_kal.tv_kal.value = document.form_kal.tv_kal.value+num;
}

function equals(){
    var exp =  document.form_kal.tv_kal.value;

    if(exp){
    document.form_kal.tv_kal.value =eval(exp);
    } 
}

function clean(){
    document.form_kal.tv_kal.value ="";
}

function back(){
    var exp =  document.form_kal.tv_kal.value;
    document.form_kal.tv_kal.value = exp.substring(0,exp.length-1);
}

function isNumberKey(evt)
{
         var charCode = (evt.which) ? evt.which : event.keyCode
         if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;

         return true;
}
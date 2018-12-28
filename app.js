function insert(num){
    document.form_kal.tv_kal.value = document.form_kal.tv_kal.value+num;
}

const e = document.getElementById("button2");
e.addEventListener('click',function(){
    let exp =  document.form_kal.tv_kal.value;
    if(exp){
        document.form_kal.tv_kal.value = eval(exp);
           }
})

const c = document.getElementById("clean");
c.addEventListener('click',function(){
    document.form_kal.tv_kal.value ="";
})

const b = document.getElementById("back");
b.addEventListener('click',function(){
    let exp =  document.form_kal.tv_kal.value;    
    document.form_kal.tv_kal.value = exp.substring(0,exp.length-1);
})

function isNumberKey(evt)
{
         var charCode = (evt.which) ? evt.which : event.keyCode
         if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;

         return true;
}

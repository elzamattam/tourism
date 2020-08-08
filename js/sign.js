function valform()

{
    var fname=document.getElementById("fname").value;

    if(fname=="")
    {
        document.getElementById("username").innerHTML="Please fill the First Name";
          return false;
    }
}
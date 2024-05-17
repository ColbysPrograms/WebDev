
var text=document.getElementById('text');
var objective=document.getElementById('objective');
var resume=document.getElementById('resume');
var projects=document.getElementById('projects');
var about=document.getElementById('about');
var contact=document.getElementById('contact');
objective.addEventListener("click", clickHandler);
resume.addEventListener('click', clickHandler);
projects.addEventListener('click', clickHandler);
about.addEventListener('click', clickHandler);
contact.addEventListener('click', clickHandler);

function textChange(input){
    // text.style.visibility="hidden";
    inputElement=document.getElementById(input);
    inputElementContent=inputElement.innerHTML;
    text.innerHTML=inputElementContent;
    text.style.visibility="visible";
}
function textRemove(){
    text.innerHTML="";
}
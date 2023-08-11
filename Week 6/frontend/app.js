const fname = document.getElementById('fname');
const sname = document.getElementById('sname');
const submitBtn = document.getElementById('submit');
const cohort = document.getElementById('cohortNo');
const domain = "@thejitu.com"

contentFilled = ()=>{
    const isInputsFilled = fname.value && sname.value && cohort.value;
    submitBtn.disabled = !isInputsFilled;
}

fname.addEventListener('input', contentFilled);
sname.addEventListener('input', contentFilled);
cohort.addEventListener('input', contentFilled);

function email(){
    const email = fname.value+'.'+sname.value+domain
    
    document.getElementById('email').innerHTML = email 
    alert(`Registered successfully!Your email is ${email}. Cohort ${cohortNo.value}`)
    // console.log(email);
}   

submitBtn.addEventListener('click',email)

contentFilled()

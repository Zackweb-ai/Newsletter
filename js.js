let button = document.querySelector('#button');
let input = document.querySelector('#email');
let message = document.querySelector('.message')


input.addEventListener('keyup', (e) => {
    let email = e.target.value;
    if (email.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))) {
        button.classList.add('active')
    }else {
        button.classList.remove('active');
    }
});
button.addEventListener('click', (e) => {
    e.preventDefault(); 
    if (!email.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))) {
        input.classList.add('error')
        message.classList.add('d-block')
    } else{
        window.location.href = `/thanks.html?email=${email.value}`;
    }
    
});


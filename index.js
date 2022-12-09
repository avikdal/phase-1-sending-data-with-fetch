// function takes two strings as arguments

function submitData(name, email){
    return fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`,
        }) 
    })
    .then((res) => res.json())
    .then((obj) => document.querySelector('body').append(obj.id))
    .catch((error) => { alert("whoopsie, try again"); 
    document.querySelector('body').append(error.message);
})
}

submitData("jo", "hotmail");


function handleSubmit(){
    const name1 = document.getElementById('name1').value;
    console.log("name1: ", name1)
    localStorage.setItem("first name", name1);
    localStorage.setItem("second name", "AI");

    sessionStorage.setItem("player1", '0');
    sessionStorage.setItem('player2', '0');
    
    return;
}



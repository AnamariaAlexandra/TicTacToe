function handleSubmit(){
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;


    localStorage.setItem("first name", name1);
    localStorage.setItem("second name", name2);

    sessionStorage.setItem("player1", '0');
    sessionStorage.setItem('player2', '0');
    
    return;
}

const name1 = localStorage.getItem('first name')
const name2 = localStorage.getItem('second name')

// if ( name1 == 0 ){

//     console.log('Tic Tac Toe');
//     console.log(name1, name2);
// }


if (name1 == 0 && name2 == 0 ){

    document.getElementById('name1').innerText = "Player1";
    document.getElementById('name2').innerText = "Player2";

}
else if (name2 == 0 ){

    document.getElementById('name1').innerText = name1;
    document.getElementById('name2').innerText =" Player2";
    
}else if(name1 == 0 ){

    document.getElementById('name1').innerText = "Player1";
    document.getElementById('name2').innerText = name2;
}else{

    document.getElementById('name1').innerText = name1;
    document.getElementById('name2').innerText = name2;

}

// second page

const player1 = document.getElementsByClassName('score-value1')
const player2 = document.getElementsByClassName('score-value2')
const box = document.querySelectorAll('.box')

console.log(box)

var counter = 0;
var k = 0

box.forEach( element => {
    
    console.log(counter)
    element.addEventListener('click', ()=>{
    
        if (counter < 9){

            if (counter%2 == 0){
                if(element.firstElementChild.classList[0] == undefined && element.firstElementChild.classList[0] != 'zero-shape'){
                    // console.log(element.firstElementChild.classList[0]) 
                    element.firstElementChild.classList.add('x-shape')
                    element.firstElementChild.nextElementSibling.classList.add('x-inside')
                    counter++;
                    k++;
                }
            }else if (counter%2 == 1){
                if(element.firstElementChild.classList[0] != 'x-shape' && element.firstElementChild.classList[0] == undefined){
                    // console.log(element.firstElementChild.classList[0]) 
                    element.firstElementChild.classList.add('zero-shape')
                    element.firstElementChild.nextElementSibling.classList.add('zero-inside')
                    counter++;
                    k++;
                }
            }

            if(element.classList[1][3] == 2 || element.classList[1][3] == 8 || element.classList[1][3] == 5)
                { // { console.log("hello world",element.previousElementSibling.firstElementChild.classList[0], element.nextElementSibling.firstElementChild.classList[0], element.firstElementChild.classList[0])
                if(element.previousElementSibling.firstElementChild.classList[0] === element.nextElementSibling.firstElementChild.classList[0] && element.nextElementSibling.firstElementChild.classList[0] === element.firstElementChild.classList[0]){
                    console.log("case: ", element.classList[1][3]);
                    counter = 100;
                }else if (element.parentElement.childNodes[3].firstElementChild.classList[0] === element.parentElement.childNodes[9].firstElementChild.classList[0] && element.parentElement.childNodes[9].firstElementChild.classList[0] ===  element.parentElement.childNodes[15].firstElementChild.classList[0]){
                    console.log("case orizontal")
                    counter = 100;
                }
            }

            if(element.classList[1][3] == 1 || element.classList[1][3] == 7 || element.classList[1][3] == 4 )
                { // console.log(element.nextElementSibling.firstElementChild.classList[0], element.nextElementSibling.nextElementSibling.firstElementChild.classList[0], element.firstElementChild.classList[0])
                if( element.nextElementSibling.firstElementChild.classList[0] === element.nextElementSibling.nextElementSibling.firstElementChild.classList[0] && element.nextElementSibling.firstElementChild.classList[0] === element.firstElementChild.classList[0] ){
                        console.log("case: ", element.classList[1][3]);
                        counter = 100
                }else if(element.parentElement.childNodes[1].firstElementChild.classList[0] === element.parentElement.childNodes[7].firstElementChild.classList[0] && element.parentElement.childNodes[7].firstElementChild.classList[0] ===  element.parentElement.childNodes[13].firstElementChild.classList[0]){
                    console.log("case orizontal")
                    counter = 100;
                }
            }

            if (element.classList[1][3] == 3 || element.classList[1][3] == 6 || element.classList[1][3] == 9 ){
                if(element.previousElementSibling.firstElementChild.classList[0] === element.previousElementSibling.previousElementSibling.firstElementChild.classList[0] && element.previousElementSibling.firstElementChild.classList[0] === element.firstElementChild.classList[0]){
                    console.log("case: ", element.classList[1][3])
                    counter = 100
                }else if(element.parentElement.childNodes[5].firstElementChild.classList[0] === element.parentElement.childNodes[11].firstElementChild.classList[0] && element.parentElement.childNodes[11].firstElementChild.classList[0] ===  element.parentElement.childNodes[17].firstElementChild.classList[0]){
                    console.log("case orizontal")
                    counter = 100;
                }
            }

            // console.log(element.parentElement.childNodes[1], element.parentElement.childNodes[9], element.parentElement.childNodes[17])
            
            if(element.classList[1][3] == 1 || element.classList[1][3] == 5 || element.classList[1][3] == 9 ){
                if (element.parentElement.childNodes[1].firstElementChild.classList[0] === element.parentElement.childNodes[9].firstElementChild.classList[0] && element.parentElement.childNodes[9].firstElementChild.classList[0] ===  element.parentElement.childNodes[17].firstElementChild.classList[0]){
                    console.log("Case diagonal")
                    counter = 100;
                }
            }

            if(element.classList[1][3] == 3 || element.classList[1][3] == 5 || element.classList[1][3] == 7){
                if(element.parentElement.childNodes[5].firstElementChild.classList[0] === element.parentElement.childNodes[9].firstElementChild.classList[0] && element.parentElement.childNodes[9].firstElementChild.classList[0] ===  element.parentElement.childNodes[13].firstElementChild.classList[0]){
                    console.log("case diagonal")
                    counter = 100;
                }
            }

        }
        if (counter == 9){

            const node = document.createElement('p')
            const textNode = document.createTextNode(" Draw!")
            node.appendChild(textNode);
            // console.log(document.getElementById('right-hand-side'))
            document.getElementById('right-hand-side').appendChild(node).classList.add('draw')
            counter = -1;
        }

        if(counter == 100){

            if ( k%2 == 1){
        
                sessionStorage.setItem("player1", parseInt(sessionStorage.getItem('player1')) + 1);
                addToStorage();

                const head = document.querySelectorAll('td');

                const retrieved = JSON.parse(sessionStorage.getItem('table_data'));
            
                const node  = document.createElement('td')
                const node2  = document.createElement('td')

                const text = document.createTextNode(retrieved.col1)
                const text2 = document.createTextNode(retrieved.col2)
                console.log(head)

                node.appendChild(text);
                node2.appendChild(text2)

                head[0].innerText = retrieved.col1
                head[1].innerText = retrieved.col2

                const node3 = document.createElement('p')
                const win = document.createTextNode('Player 1 won!')
                node3.appendChild(win)
                document.getElementById('right-hand-side').appendChild(node3).classList.add('draw')
                counter++

            }else{

                sessionStorage.setItem("player2", parseInt(sessionStorage.getItem('player2')) + 1);
                addToStorage();

                const head = document.querySelectorAll('td');

                const retrieved = JSON.parse(sessionStorage.getItem('table_data'));
            
                const node  = document.createElement('td')
                const node2  = document.createElement('td')

                const text = document.createTextNode(retrieved.col1)
                const text2 = document.createTextNode(retrieved.col2)

                console.log(head)

                node.appendChild(text);
                node2.appendChild(text2)

                head[0].innerText = retrieved.col1
                head[1].innerText = retrieved.col2
                
                const node3 = document.createElement('p')
                const win = document.createTextNode('Player 2 won!')
                node3.appendChild(win)
                document.getElementById('right-hand-side').appendChild(node3).classList.add('draw')
                console.log("Player2 won")
                counter++;
            }  
        }
    });
})

    const col1 = [];
    const col2 = [];

function addToStorage() {

    sessionStorage.setItem("player1", sessionStorage.getItem('player1'));
    sessionStorage.setItem('player2', sessionStorage.getItem('player2')) 
    

    let player1 = sessionStorage.getItem('player1')
    let player2 = sessionStorage.getItem('player2')
    col1.push(player1);
    col2.push(player2);
    
    window.sessionStorage.setItem('table_data', JSON.stringify({
        col1:col1[col1.length-1],
        col2:col2[col2.length -1]
    }));

}

function refresh(){
    
    window.location.reload();

    




}

function resetScore(){

    sessionStorage.setItem("player1", '0');
    sessionStorage.setItem('player2', '0');
    refresh();
}
const boxes = document.querySelectorAll('.box');
let wins = document.querySelector('#wins');
let loses = document.querySelector('#loses');
let draws = document.querySelector('#draws');
const clearBtn = document.querySelector('.reset');
const okBtn = document.querySelectorAll('.okay');
const container1 = document.querySelector('.container1');
const container2 = document.querySelector('.container2');
const container3 = document.querySelector('.container3');
for(i=0;i<3;i++){
    let temp = okBtn[i];
    temp.addEventListener('click',function(){
        container1.style.transform = "translateY(-500px)";
        container2.style.transform = "translateY(-500px)";
        container3.style.transform = "translateY(-500px)";
        updateDisplay();
        clear();
    })
}


let arr = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9']
];

let checkWinner = false;
let count = 0;
let win = 0;
let lose = 0;
let draw = 0;

clearBtn.addEventListener('click',function(){
    win = 0;
    lose = 0;
    draw = 0;
    clear();
    updateDisplay();
})

for (i = 1; i < 10; i++) {

    let x = i;
    let box = boxes[i - 1];

    box.addEventListener('click', function () 
    {
        if (box.innerHTML == '') 
        {
            box.innerHTML = '<div class="kanta"></div>';
            insertKantaInArray(x);
            winLogic();
            if (checkWinner == true) 
            {
                setTimeout(function () 
                {
                    if ((count % 2) == 0) 
                    {
                        lose++;
                      
                        container2.style.transform = "translateY(00px)";
                    }
                    else 
                    {
                        
                        win++;
                        container1.style.transform = "translateY(00px)";
                    }
                   


                }, 100);
                return;
            }
            console.log(arr);
            if (count == 9) {
                setTimeout(function () {
                   
                    container3.style.transform = "translateY(00px)";
                    draw++;
                   
                }, 100);
            }
            else {
                insertZeroInArray();
                winLogic();
                if (checkWinner == true) {
                    setTimeout(function () {
                        if ((count % 2) == 0) {
                            
                            container2.style.transform = "translateY(00px)";
                            lose++;
                        }
                        else {
                          
                            container1.style.transform = "translateY(00px)";
                            won++;
                        }
                      

                    }, 100);
                    return;
                }
            }

        }
    })
}




function insertKantaInArray(x) {
    count++;
    if ((x == 1) || (x == 2) || (x == 3)) {
        arr[0][x - 1] = 'X';
    }
    if ((x == 4) || (x == 5) || (x == 6)) {
        arr[1][x - 4] = 'X';
    }
    if ((x == 7) || (x == 8) || (x == 9)) {
        arr[2][x - 7] = 'X';
    }
}

function insertZeroInArray() {
    count++;
    // first move priority should be occupying the centre box ,autoLogic's main function is to defend,, first turn is always of player. -->
    if ((arr[1][1] != 'X') && (arr[1][1] != 'O')) {
        arr[1][1] = 'O';
        five.innerHTML = '<div class="zero"></div>';
    }

    // following are all the winning chances of computer, and its move...
    // 1
    else if ((((arr[0][0] == 'O') && (arr[0][1] == 'O')) || ((arr[2][0] == 'O') && (arr[1][1] == 'O')) || ((arr[2][2] == 'O') && (arr[1][2] == 'O'))) && ((arr[0][2] != 'X') && (arr[0][2] != 'O'))) {
        arr[0][2] = 'O';
        three.innerHTML = '<div class="zero"></div>';
    }
    // 2
    else if ((((arr[1][0] == 'O') && (arr[1][2] == 'O')) || ((arr[0][2] == 'O') && (arr[2][2] == 'O')) || ((arr[1][0] == 'O') && (arr[1][1] == 'O'))) && ((arr[1][2] != 'O') && (arr[1][2] != 'X'))) {
        arr[1][2] = 'O';
        six.innerHTML = '<div class="zero"></div>';
    }
    // 3
    else if ((((arr[2][0] == 'O') && (arr[2][1] == 'O')) || ((arr[0][0] == 'O') && (arr[1][1] == 'O')) || ((arr[0][2] == 'O') && (arr[1][2] == 'O'))) && ((arr[2][2] != 'X') && (arr[2][2] != 'O'))) {
        arr[2][2] = 'O';
        nine.innerHTML = '<div class="zero"></div>';
    }
    // 4
    else if ((((arr[0][1] == 'O') && (arr[0][2] == 'O')) || ((arr[1][0] == 'O') && (arr[2][0] == 'O')) || ((arr[2][2] == 'O') && (arr[1][1] == 'O'))) && ((arr[0][0] != 'X') && (arr[0][0] != 'O'))) {
        arr[0][0] = 'O';
        one.innerHTML = '<div class="zero"></div>';
    }
    // 5
    else if ((((arr[2][1] == 'O') && (arr[2][2] == 'O')) || ((arr[0][0] == 'O') && (arr[1][0] == 'O')) || ((arr[0][2] == 'O') && (arr[1][1] == 'O'))) && ((arr[2][0] != 'X') && (arr[2][0] != 'O'))) {
        arr[2][0] = 'O';
        seven.innerHTML = '<div class="zero"></div>';
    }
    // 6
    else if ((((arr[1][1] == 'O') && (arr[1][2] == 'O')) || ((arr[0][0] == 'O') && (arr[2][0] == 'O'))) && ((arr[1][0] != 'O') && (arr[1][0] != 'X'))) {
        arr[1][0] = 'O';
        four.innerHTML = '<div class="zero"></div>';
    }
    // 7
    else if ((((arr[0][1] == 'O') && (arr[1][1] == 'O')) || ((arr[2][2] == 'O') && (arr[2][0] == 'O'))) && ((arr[2][1] != 'O') && (arr[2][1] != 'X'))) {
        arr[2][1] = 'O';
        eight.innerHTML = '<div class="zero"></div>';
    }
    // 8
    else if ((((arr[2][1] == 'O') && (arr[1][1] == 'O')) || ((arr[0][2] == 'O') && (arr[0][0] == 'O'))) && ((arr[0][1] != 'O') && (arr[0][1] != 'X'))) {
        arr[0][1] = 'O';
        two.innerHTML = '<div class="zero"></div>';
    }
    // 9
    else if ((((arr[1][0] == 'O') && (arr[1][2] == 'O')) || ((arr[0][1] == 'O') && (arr[2][1] == 'O')) || ((arr[2][2] == 'O') && (arr[0][0] == 'O')) || ((arr[2][0] == 'O') && (arr[0][2] == 'O'))) && ((arr[1][1] != 'O') && (arr[1][1] != 'X'))) {
        arr[1][1] = 'O';
        five.innerHTML = '<div class="zero"></div>';
    }

    // following are all the winning chances of player, and its defence...
    // 1
    else if ((((arr[0][0] == 'X') && (arr[0][1] == 'X')) || ((arr[2][0] == 'X') && (arr[1][1] == 'X')) || ((arr[2][2] == 'X') && (arr[1][2] == 'X'))) && ((arr[0][2] != 'O') && (arr[0][2] != 'X'))) {
        arr[0][2] = 'O';
        three.innerHTML = '<div class="zero"></div>';
    }
    // 2
    else if ((((arr[1][0] == 'X') && (arr[1][2] == 'X')) || ((arr[0][2] == 'X') && (arr[2][2] == 'X'))) && ((arr[1][2] != 'O') && (arr[1][2] != 'X'))) {
        arr[1][2] = 'O';
        six.innerHTML = '<div class="zero"></div>';
    }
    // 3
    else if ((((arr[2][0] == 'X') && (arr[2][1] == 'X')) || ((arr[0][0] == 'X') && (arr[1][1] == 'X')) || ((arr[0][2] == 'X') && (arr[1][2] == 'X'))) && ((arr[2][2] != 'O') && (arr[2][2] != 'X'))) {
        arr[2][2] = 'O';
        nine.innerHTML = '<div class="zero"></div>';
    }
    // 4
    else if ((((arr[0][1] == 'X') && (arr[0][2] == 'X')) || ((arr[1][0] == 'X') && (arr[2][0] == 'X')) || ((arr[2][2] == 'X') && (arr[1][1] == 'X'))) && ((arr[0][0] != 'O') && (arr[0][0] != 'X'))) {
        arr[0][0] = 'O';
        one.innerHTML = '<div class="zero"></div>';
    }
    // 5
    else if ((((arr[2][1] == 'X') && (arr[2][2] == 'X')) || ((arr[0][0] == 'X') && (arr[1][0] == 'X')) || ((arr[0][2] == 'X') && (arr[1][1] == 'X'))) && ((arr[2][0] != 'O') && (arr[2][0] != 'X'))) {
        arr[2][0] = 'O';
        seven.innerHTML = '<div class="zero"></div>';
    }
    // 6
    else if ((((arr[1][1] == 'X') && (arr[1][2] == 'X')) || ((arr[0][0] == 'X') && (arr[2][0] == 'X'))) && ((arr[1][0] != 'O') && (arr[1][0] != 'X'))) {
        arr[1][0] = 'O';
        four.innerHTML = '<div class="zero"></div>';
    }
    // 7
    else if ((((arr[0][1] == 'X') && (arr[1][1] == 'X')) || ((arr[2][2] == 'X') && (arr[2][0] == 'X'))) && ((arr[2][1] != 'O') && (arr[2][1] != 'X'))) {
        arr[2][1] = 'O';
        eight.innerHTML = '<div class="zero"></div>';
    }
    // 8
    else if ((((arr[2][1] == 'X') && (arr[1][1] == 'X')) || ((arr[0][2] == 'X') && (arr[0][0] == 'X'))) && ((arr[0][1] != 'O') && (arr[0][1] != 'X'))) {
        arr[0][1] = 'O';
        two.innerHTML = '<div class="zero"></div>';
    }
    // 9
    else if ((((arr[1][0] == 'X') && (arr[1][2] == 'X')) || ((arr[0][1] == 'X') && (arr[2][1] == 'X')) || ((arr[2][2] == 'X') && (arr[0][0] == 'X')) || ((arr[2][0] == 'X') && (arr[0][2] == 'X'))) && ((arr[1][1] != 'O') && (arr[1][1] != 'X'))) {
        arr[1][1] = 'O';
        five.innerHTML = '<div class="zero"></div>';
    }

    // randomly puts anywhere if opponent does not have any winning chance. ( can improve this by making calculated moves to win )
    else {
        let x = true;
        while (x) {
            let row = getRandomInteger();
            let col = getRandomInteger();

            if ((arr[row][col] == 'X') || (arr[row][col] == 'O')) {
                continue;
            }

            arr[row][col] = 'O';
            if (row == 0) {
                if (col == 0) {
                    one.innerHTML = '<div class="zero"></div>';
                }
                else if (col == 1) {
                    two.innerHTML = '<div class="zero"></div>';
                }
                else {
                    three.innerHTML = '<div class="zero"></div>';
                }
            }
            else if (row == 1) {
                if (col == 0) {
                    four.innerHTML = '<div class="zero"></div>';
                }
                else if (col == 1) {
                    five.innerHTML = '<div class="zero"></div>';
                }
                else {
                    six.innerHTML = '<div class="zero"></div>';
                }
            }
            else {
                if (col == 0) {
                    seven.innerHTML = '<div class="zero"></div>';
                }
                else if (col == 1) {
                    eight.innerHTML = '<div class="zero"></div>';
                }
                else {
                    nine.innerHTML = '<div class="zero"></div>';
                }
            }
            x = false;
        }

    }
}

function getRandomInteger() {
    return Math.floor(Math.random() * 2);
}

function winLogic() {
    if ((arr[0][0] == 'X') && (arr[0][1] == 'X') && (arr[0][2] == 'X')) {
        checkWinner = true;
    }
    else if ((arr[1][0] == 'X') && (arr[1][1] == 'X') && (arr[1][2] == 'X')) {
        checkWinner = true;
    }
    else if ((arr[2][0] == 'X') && (arr[2][1] == 'X') && (arr[2][2] == 'X')) {
        checkWinner = true;
    }

    else if ((arr[0][0] == 'X') && (arr[1][0] == 'X') && (arr[2][0] == 'X')) {
        checkWinner = true;
    }
    else if ((arr[0][1] == 'X') && (arr[1][1] == 'X') && (arr[2][1] == 'X')) {
        checkWinner = true;
    }
    else if ((arr[0][2] == 'X') && (arr[1][2] == 'X') && (arr[2][2] == 'X')) {
        checkWinner = true;
    }

    else if ((arr[0][0] == 'O') && (arr[0][1] == 'O') && (arr[0][2] == 'O')) {
        checkWinner = true;
    }
    else if ((arr[1][0] == 'O') && (arr[1][1] == 'O') && (arr[1][2] == 'O')) {
        checkWinner = true;
    }
    else if ((arr[2][0] == 'O') && (arr[2][1] == 'O') && (arr[2][2] == 'O')) {
        checkWinner = true;
    }

    else if ((arr[0][0] == 'O') && (arr[1][0] == 'O') && (arr[2][0] == 'O')) {
        checkWinner = true;
    }
    else if ((arr[0][1] == 'O') && (arr[1][1] == 'O') && (arr[2][1] == 'O')) {
        checkWinner = true;
    }
    else if ((arr[0][2] == 'O') && (arr[1][2] == 'O') && (arr[2][2] == 'O')) {
        checkWinner = true;
    }

    else if ((arr[0][0] == 'X') && (arr[1][1] == 'X') && (arr[2][2] == 'X')) {
        checkWinner = true;
    }
    else if ((arr[0][2] == 'X') && (arr[1][1] == 'X') && (arr[2][0] == 'X')) {
        checkWinner = true;
    }

    else if ((arr[0][0] == 'O') && (arr[1][1] == 'O') && (arr[2][2] == 'O')) {
        checkWinner = true;
    }
    else if ((arr[0][2] == 'O') && (arr[1][1] == 'O') && (arr[2][0] == 'O')) {
        checkWinner = true;
    }

    else {
        checkWinner = false;
    }
}

function clear() {
    for (j = 0; j < 9; j++) {
        let temp = boxes[j];
        temp.innerHTML = '';
    }
    arr = [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9']
    ];
    checkWinner = false;
    count = 0;
}

function updateDisplay(){
    wins.innerText = `WINS: ${win}`;
    loses.innerText = `LOSES: ${lose}`;
    draws.innerText = `DRAWS: ${draw}`;
}
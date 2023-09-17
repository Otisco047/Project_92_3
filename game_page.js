player1_name = localStorage.getItem("p1key");
player2_name = localStorage.getItem("p2key");
document.getElementById("player1_name").innerHTML = player1_name;
document.getElementById("player2_name").innerHTML = player2_name;
document.getElementById("q_turn").innerHTML = "Question turn: " + player1_name;
document.getElementById("a_turn").innerHTML = "Answer turn:" + player2_name;
player1_score = 0;
player2_score = 0;
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
q_turn = "player1";
a_turn = "player2";

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " x " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if (get_answer == actual_answer) {
        if (a_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        } else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (q_turn == "player1") {
        q_turn = "player2";
        a_turn = "player1";
        document.getElementById("q_turn").innerHTML = "Question turn: - " + player2_name;
        document.getElementById("a_turn").innerHTML = "Answer turn:" + player1_name;

    } else {
        q_turn = "player1";
        a_turn = "player2";
        document.getElementById("q_turn").innerHTML = "Question turn: - " + player1_name;
        document.getElementById("a_turn").innerHTML = "Answer turn:" + player2_name;

    }
    document.getElementById("output").innerHTML = "";
}
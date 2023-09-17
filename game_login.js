function addUser() {
    p1name=document.getElementById("player1_name_input").value;
    p2name=document.getElementById("player2_name_input").value;
    localStorage.setItem("p1key",p1name);
    localStorage.setItem("p2key",p2name);
    window.location="game_page.html";
}
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgCont = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg");
let turn = true; //x
let w_p = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgCont.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () =>{
    for(let pattern of w_p){
        let p1v = boxes[pattern[0]].innerText;
        let p2v = boxes[pattern[1]].innerText;
        let p3v = boxes[pattern[2]].innerText;
        if(p1v != "" && p2v != "" && p3v != ""){
            if(p1v === p2v && p2v === p3v){
                console.log("Winner is", p1v);

                showWinner(p1v);

            }
        }
    }
    
};
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turn){
            box.innerText="O";
            turn = false;
        }else{
            box.innerText="X";
            turn = true;
        }
        box.disabled = true;
        
        checkWinner();
    });
});

const resetGame = () => {
    turn = true;
    enableBoxes();
    msgCont.classList.add("hide");

}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
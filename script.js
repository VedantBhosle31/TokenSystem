let TokenQueue = [];
function FetchData() {
    temp = document.cookie.split(';');
    TokenQueue = temp[1].split(',');
    Build();
}
function Update() {
    let Remove = document.getElementById("Remove").value;
    let Add = document.getElementById("Add").value;
    let High = document.getElementById("Highest").value;

    // console.log(Remove, Add, High)
    // console.log(typeof (Remove))
    // console.log(Remove.length)
    // console.log(!Remove) 
    RemoveToken(Remove);
    AddToken(Add);
    Highest(High);
}

function AddToken(num) {
    if (num) {

        TokenQueue.push(num);
        console.log(TokenQueue);
        Build();
    }
}

function RemoveToken(Remove) {
    if (Remove) {

        index = TokenQueue.findIndex(function (elm) {
            return elm == Remove
        });
        console.log(index)
        if (index != -1) {
            a = TokenQueue.slice(0, index)
            b = TokenQueue.slice(index + 1, TokenQueue.length)
            TokenQueue = a.concat(b)
            Build();

        }
    }
}


function Build() {
    current = TokenQueue.slice(0, 5)
    upcoming = TokenQueue.slice(5, 10)
    document.getElementById("CurrentToken").innerHTML = "Ongoing Token " + current
    document.getElementById("UpcomingToken").innerHTML = "Upcoming Token " + upcoming

    document.cookie = TokenQueue

}
function Highest(num) {
    console.log("This is num =" + num + ".")
    if (num) {
        document.getElementById("HighestTower").innerHTML = "Highest Tower Tonight " + num;
        console.log("Highest added")

    }


}

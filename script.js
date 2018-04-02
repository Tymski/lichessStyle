setTimeout(doStuff, 1);

function doStuff() {

    console.log("Lichess Style");

    clock = document.getElementsByClassName("clock")[1];
    clock2 = document.getElementsByClassName("clock")[0];
    body = document.getElementsByTagName("body")[0];
    // siteTitle = document.getElementById("site_title");
    let home = document.createElement("section");
    home.innerHTML = `<a href="/">lichess.org</a>`;
    topmenu.insertBefore(home, topmenu.firstChild);


    setInterval(() => {
        if (typeof clock != 'undefined')
            if (clock.classList.value.split(" ").pop() == "running") {
                body.classList.add("myTurn");
                body.classList.remove("oppTurn");
            } else {
                body.classList.add("oppTurn");
                body.classList.remove("myTurn");
            }
    }, 17);

    setTimeout(() => {
        lichessSay = document.getElementsByClassName("lichess_say")[0];
        hints = document.getElementsByClassName("presets")[0];
        if (typeof hints != 'undefined') {
            hints = document.getElementsByClassName("presets")[0].children;
            if(hints.length == 4){
                hints[0].dataset.hint = "Die!";
                hints[1].dataset.hint = "Bad luck!";
                hints[2].dataset.hint = "Don't have fun!";
                hints[3].dataset.hint = "Me too!";
            }
        }
        if (typeof lichessSay != 'undefined') {
            lichessSay.placeholder = "Please be rude in the chat!";
        }
    }, 3000);

    setInterval(() => {
        statusElements = document.getElementsByClassName("status");
        if (statusElements.length > 0) {
            moves = document.getElementsByClassName("moves")[0];
            rematch = document.getElementsByClassName("rematch")[0];
            if (typeof moves != 'undefined') {
                if (typeof rematch != 'undefined' && rematch.classList.contains("disabled")) {
                    moves.classList.remove("shortened");
                    moves.classList.add("elongated");
                } else {
                    moves.classList.remove("elongated");
                    moves.classList.add("shortened");
                }
            }
        }
        sidebox = document.getElementsByClassName("side_box padded")[0];
        if(typeof sidebox == 'undefined')return;
        sideboxHeight = sidebox.offsetHeight;
        streamer = document.getElementsByClassName("context-streamer")[0];
        streamerHeight= 0;
        if(typeof streamer != 'undefined'){
            streamerHeight = streamer.offsetHeight;
        }
        usertv = document.getElementsByClassName("top user_tv")[0];
        usertvHeight = 0;
        if (typeof usertv != 'undefined') {
            usertvHeight = usertv.offsetHeight;
        }
        chatHeight = 512 - sideboxHeight - streamerHeight - usertvHeight;
        chat.style.height = chat.style.maxHeight = chat.style.minHeight = chatHeight.toString() + "px !important"
        document.getElementsByClassName("side_box mchat")[0].style.height = chatHeight.toString() + "px"
    }, 20);

}
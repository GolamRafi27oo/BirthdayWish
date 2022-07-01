var sound = document.getElementById('sound');
var top = document.getElementById('top');

var audio = new Audio("image/Thousand Years.mp3");

/*
document.getElementById('sound').onclick = function() {

   
}*/

var show = document.getElementById('show');

show.onclick = function () {
    if(document.getElementById('passcode').value == 000){
        document.getElementById('test').innerHTML = `
        <div id="start" class="image">
        <img src="image/bd.gif" alt="">
        <div>
            <img class="boy" src="image/boy.gif" alt="">
            <h2>test124</h2>
        </div>
    </div>
    <div class="main"> 
        <div class="duck">
            <img src="image/party.gif" alt="">
        </div>
        <div class="footer cake">
            <img src="image/cake.gif" alt="">
        </div>
        <div class="footer fly">
            <img src="image/balon1.gif" alt="">
        </div>
        <div class="footer">
            <img src="image/doll.gif" alt="">
        </div>
        <div class="letter">
            <div>
                <h1>A Letter For You</h1>
                <p>
                    <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                      OPEN
                    </a>
                </p>
                <div class="collapse" id="collapseExample">
                    <div class="card-body text">
                        <h2>Dear Love</h2>
                        <p>Love of my heart, I wise you with all my soul that you have a nice day, that this day you receive the sincere greetings of the people who love you and accept you as you are.
                        </br>
                        </br>
                        With
                        </p>
                        <img src="image/heart2.gif" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div>
            <img src="image/giphy.gif" alt="">
            <img class="man" src="image/man.gif" alt="">
        </div>
    </div>
        
    `;
    audio.play();
    
    document.getElementById("top").className = "topremove";

    }else{
        alert('Wrong Passcode');
    }
}
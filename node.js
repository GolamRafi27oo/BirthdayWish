var sound = document.getElementById('sound');
var audio = new Audio("image/Thousand Years.mp3"); //change song

show.onclick = function () {
    if(document.getElementById('passcode').value == 0001){
        //edit html
        document.getElementById('birthday').innerHTML = `
        <div id="start" class="image">
            <img src="image/bd.gif" alt="">
            <div>
                <img class="boy" src="image/boy.gif" alt="">

                <h2>Name</h2>     <!--Edit name-->

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

                            <h2>Dear X</h2>              <!--Edit name-->
                            <p>write your letter .....................................
                            ..........................................................<!--Edit letter-->
                            
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

    }
    else{
        alert('Wrong Passcode');
    }
}

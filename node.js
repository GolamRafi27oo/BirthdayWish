var sound = document.getElementById('sound');


var audio = new Audio("image/Thousand Years.mp3");


document.getElementById('sound').onclick = function() {
    document.getElementById('test').innerHTML = `
    <div id="start" class="image">
    <img src="image/bd.gif" alt="">
    <div>
        <img class="boy" src="image/boy.gif" alt="">
        <h2>test124</h2>
    </div>
</div>
<div>
    <div>
        <img src="image/party.gif" alt="">
    </div>
    <div class="footer">
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
            <p>
                <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  A Letter For You
                </a>
            </p>
            <div class="collapse" id="collapseExample">
                <div class="card-body text">
                    <h2>Dear X</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laboriosam eaque voluptate mollitia, impedit vero neque excepturi delectus, 
                        quod et officiis molestiae porro sequi veniam laudantium eveniet obcaecati deserunt esse.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas voluptatum voluptatibus cum, perspiciatis ad accusamus sed! Labore debitis molestias neque iure animi nisi magnam distinctio! Alias nemo dolorem placeat?
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
    
    `;
    audio.play();
}
 
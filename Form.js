class Form{
    constructor(){

    }
    display(){
        var title = createElement("h2");
        title.html("CAR RACING GAME");
        title.position(100,100);
        var input = createInput("name");
        var button = createButton("PLAY");
        var gretting = createElement("h3");
        input.position(200,100);
        button.position(300,100);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playercount = playercount+1;
            player.updatename(name);
            player.updatecount(playercount);
            gretting.html("HELLO"+name);
            gretting.position(300,300);
        });
    }
}
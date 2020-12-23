class Game{
    constructor(){

    }
     getState(){
        var gameref = database.ref("carracing/gamestate");
        gameref.on("value", function(data){
            gamestate = data.val();
        });
    }
    update(state){
        database.ref("carracing/").update({gamestate: state});
    }
    start(){
        if(gamestate === 0){
            player = new Player();
            form = new Form();
            form.display();
            player.getcount();
        }
    }
}

class Player{
    constructor(){

    }
    getcount(){
        var gameref = database.ref("carracing/playercount");
        gameref.on("value", function(data){
            playercount = data.val();
        });
    }
    updatecount(count){
        database.ref("carracing/").update({playercount: count});
    }
    updatename(name){
        var playerindex = "player"+playercount
        database.ref("carracing/"+playerindex).set({name: name});
    }
}
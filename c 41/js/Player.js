class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank1=null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getrank(){
    database.ref('rank').on("value",(data)=>{
      this.rank1=data.val();
    })
  }

  static updaterank(rank1){
database.ref('/').update({
  rank:rank1

});

  }
}

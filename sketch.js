var player;
var floor_1;
var floor_2;

function setup() {
  createCanvas(windowWidth,windowHeight);
  matter.init();
  player = matter.makeBall(width / 4, 500, 100, { friction: 1, restitution: 0.6 });
  floor_1 = matter.makeBarrier(width / 4, height, width/2, 50);
  floor_2 = matter.makeBarrier(width * 7 / 8, height, width/4, 50);
}

//windowサイズ変更時に実行
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//キーボード押下時に実行
function keyPressed(){
  if(key == 'w' || key == 'W'){
    player.setVelocityY(-8);
  }
}

//毎フレーム実行
function draw() {

  //横移動
  if(keyIsPressed) {
    if(key == 'd'){
      player.setVelocityX(3);
    }
    
    if(key == 'a'){
      player.setVelocityX(-3);
    }
  }

  //リスポーン
  if (player.isOffCanvas()) {
    player = matter.makeBall(width / 4, 500, 100, { friction: 1, restitution: 0.6 });
  }

  //----------------------------------------------------------
  //描画処理
  background(0);
  fill(127);
  floor_1.show();
  floor_2.show();

  fill(255);
  player.show();
  //----------------------------------------------------------

}

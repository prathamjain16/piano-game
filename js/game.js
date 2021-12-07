class Game {

  start() {
    form = new Form();
    form.display();

    

    pianoTile = createSprite(width / 2 - 50, height - 100);
    pianoTile.addImage("pianoTile", pianoTile);
    pianoTile.scale = 0.07;
    // pianoTile.addImage("blast", blastImage); //C42 //SA

    //C41 //BP //SA
    // var obstaclesPositions = [
    //   { x: width / 2 + 250, y: height - 800, image: obstacle2Image },
    //   { x: width / 2 - 150, y: height - 1300, image: obstacle1Image },
    //   { x: width / 2 + 250, y: height - 1800, image: obstacle1Image },
    //   { x: width / 2 - 180, y: height - 2300, image: obstacle2Image },
    //   { x: width / 2, y: height - 2800, image: obstacle2Image },
    //   { x: width / 2 - 180, y: height - 3300, image: obstacle1Image },
    //   { x: width / 2 + 180, y: height - 3300, image: obstacle2Image },
    //   { x: width / 2 + 250, y: height - 3800, image: obstacle2Image },
    //   { x: width / 2 - 150, y: height - 4300, image: obstacle1Image },
    //   { x: width / 2 + 250, y: height - 4800, image: obstacle2Image },
    //   { x: width / 2, y: height - 5300, image: obstacle1Image },
    //   { x: width / 2 - 180, y: height - 5500, image: obstacle2Image }
    // ];

  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);


  }

//   play() {
//     this.handleElements();
//     this.handleResetButton();

//   showRank() {
//     swal({
//       title: `Awesome!${"\n"}Rank${"\n"}${player.rank}`,
//       text: "You reached the finish line successfully",
//       imageUrl:
//         "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
//       imageSize: "100x100",
//       confirmButtonText: "Ok"
//     });
//   }

//   gameOver() {
//     swal({
//       title: `Game Over`,
//       text: "Oops you lost the race....!!!",
//       imageUrl:
//         "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
//       imageSize: "100x100",
//       confirmButtonText: "Thanks For Playing"
//     });
//   }
}
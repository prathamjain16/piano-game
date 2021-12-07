class Form {
  constructor() {
    // this.input = createInput("").attribute("placeholder", "Enter your name");
    this.songOne = createButton("Jalebi Baby");
    this.songTwo = createButton("Sakhiyan");
    this.songThree = createButton("Levitating");
    this.songFour = createButton("Love Nwantiti");
    this.songFive = createButton("Kinna Chir");
    // this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h1", "Pianistic!!");
  }

  setElementsPosition() {
    // this.titleImg.position(120, 100);
    // this.input.position(width / 2 - 110, height / 2 - 80);
    this.songOne.position(width / 2 - 10, height / 2 - 200);
    this.songTwo.position(width / 2 - 10, height / 2 - 100);
    this.songThree.position(width / 2 - 10, height / 2 - 0);
    this.songFour.position(width / 2 - 10, height / 2 + 100);
    this.songFive.position(width / 2 - 10, height / 2 + 200);
    this.greeting.position(width / 2 - 140, height / 2 - 375);
  }

  setElementsStyle() {
    // this.titleImg.class("gameTitle");
    // this.input.class("customInput");
    this.songOne.class("customButton");
    this.songTwo.class("customButton");
    this.songThree.class("customButton");
    this.songFour.class("customButton");
    this.songFive.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

//   handleMousePressed() {
//     this.playButton.mousePressed(() => {
//       this.input.hide();
//       this.playButton.hide();
//       var message = `
//       Hello ${this.input.value()}
//       </br>wait for another player to join...`;
//       this.greeting.html(message);
//       playerCount += 1;
//       player.name = this.input.value();
//       player.index = playerCount;
//       player.addPlayer();
//       player.updateCount(playerCount);
//       player.getDistance();
//     });
//   }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    // this.handleMousePressed();
  }
}
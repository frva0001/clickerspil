"use strict";

window.addEventListener("load", ready);

let isGameRunning = false;

function ready() {
   console.log("JavaScript ready!");
   document.querySelector("#btn_start").addEventListener("click", startGame);
   document.querySelector("#game_elements").classList.add("hidden");
   document.querySelector("#game_ui").classList.add("hidden");
   document.querySelector("#start").classList.remove("hidden");
   document.querySelector("#level_complete").classList.add("hidden");
}

function startGame() {
   points = 0;
   lives = 3;

   isGameRunning = true;
   resetPoints();
   resetLives();
   startTimer();

   // skjul startskærm
   document.querySelector("#start").classList.add("hidden");
   document.querySelector("#gameover").classList.add("hidden");
   document.querySelector("#level_complete").classList.add("hidden");
   document.querySelector("#game_elements").classList.remove("hidden");
   document.querySelector("#game_ui").classList.remove("hidden");

   //reset liv
   document.querySelector("#heart1").classList.remove("deactive");
   document.querySelector("#heart2").classList.remove("deactive");
   document.querySelector("#heart3").classList.remove("deactive");
   document.querySelector("#heart1").classList.add("active");
   document.querySelector("#heart2").classList.add("active");
   document.querySelector("#heart3").classList.add("active");

   // start alle animationer
   startAllAnimations();

   // Registrer click
   document.querySelector("#coin_container").addEventListener("mousedown", clickCoin);
   document.querySelector("#diamond1_container").addEventListener("mousedown", clickDiamond1);
   document.querySelector("#diamond2_container").addEventListener("mousedown", clickDiamond2);
   document.querySelector("#diamond3_container").addEventListener("mousedown", clickDiamond3);
   document.querySelector("#skull_container").addEventListener("mousedown", clickSkull);
   document.querySelector("#bomb_container").addEventListener("mousedown", clickBomb);

   // Registrer når bunden rammes
   document.querySelector("#coin_container").addEventListener("animationiteration", coinRestart);
   document.querySelector("#diamond1_container").addEventListener("animationiteration", diamond1Restart);
   document.querySelector("#diamond2_container").addEventListener("animationiteration", diamond2Restart);
   document.querySelector("#diamond3_container").addEventListener("animationiteration", diamond3Restart);
   document.querySelector("#skull_container").addEventListener("animationiteration", skullRestart);
   document.querySelector("#bomb_container").addEventListener("animationiteration", bombRestart);

   //MUSIK
   document.querySelector("#sound_background").currentTime = 0;
   document.querySelector("#sound_background").play();
}

function startAllAnimations() {
   document.querySelector("#coin_container").classList.add("falling");
   document.querySelector("#diamond1_container").classList.add("falling");
   document.querySelector("#diamond2_container").classList.add("falling");
   document.querySelector("#diamond3_container").classList.add("falling");
   document.querySelector("#skull_container").classList.add("falling");
   document.querySelector("#bomb_container").classList.add("falling");

   document.querySelector("#coin_container").classList.add("position1");
   document.querySelector("#diamond1_container").classList.add("position2");
   document.querySelector("#diamond2_container").classList.add("position3");
   document.querySelector("#diamond3_container").classList.add("position4");
   document.querySelector("#skull_container").classList.add("position5");
   document.querySelector("#bomb_container").classList.add("position6");
}

// point functions

let points = 0;

function displayPoints() {
   document.querySelector("#money_count").textContent = points;
}

function increasePoints100() {
   console.log("increasePoints100" + " " + points);
   points += 100;
   displayPoints();
}

function increasePoints300() {
   console.log("increasePoints300" + " " + points);
   points += 300;
   displayPoints();
}

function increasePoints400() {
   console.log("increasePoints400" + " " + points);
   points += 400;
   displayPoints();
}

function increasePoints500() {
   console.log("increasePoints500" + " " + points);
   points += 500;
   displayPoints();
}

function resetPoints() {
   points = 0;
   displayPoints();
}

// sprite click functions

// coin

function clickCoin() {
   console.log("coin clicked");

   const coin = this; // document.querySelector("#coin1_container");

   coin.removeEventListener("mousedown", clickCoin);

   coin.classList.add("paused");

   coin.querySelector("img").classList.add("point-click");

   coin.addEventListener("animationend", coinGone);

   document.querySelector("#sound_coin").currentTime = 0;
   document.querySelector("#sound_coin").play();

   increasePoints100();
}

function coinGone() {
   console.log("coin gone");

   const coin = this; //document.querySelector("#coin1_container");

   coin.removeEventListener("animationend", coinGone);

   coin.querySelector("img").classList.remove("point-click");

   coin.classList.remove("paused");

   coinRestart.call(this);

   coin.addEventListener("mousedown", clickCoin);
}

function coinRestart() {
   console.log("coin restart");
   const coin = this;

   if (isGameRunning) {
      coin.classList.remove("falling");
      coin.offsetWidth;
      coin.classList.add("falling");
   }

   coin.classList.remove("position1", "position2", "position3", "position4", "position5", "position6");

   const p = Math.ceil(Math.random() * 6 + 1);
   coin.classList.add(`position${p}`);
}

// diamond1

function clickDiamond1() {
   console.log("diamond1 clicked");

   const diamond1 = this; // document.querySelector("#coin1_container");

   diamond1.removeEventListener("mousedown", clickDiamond1);

   diamond1.classList.add("paused");

   diamond1.querySelector("img").classList.add("point-click");

   diamond1.addEventListener("animationend", diamond1Gone);

   document.querySelector("#sound_diamond1").currentTime = 0;
   document.querySelector("#sound_diamond1").play();

   increasePoints300();
}

function diamond1Gone() {
   console.log("diamond1 gone");

   const diamond1 = this; //document.querySelector("#diamond1_container");

   diamond1.removeEventListener("animationend", diamond1Gone);

   diamond1.querySelector("img").classList.remove("point-click");

   diamond1.classList.remove("paused");

   diamond1Restart.call(this);

   diamond1.addEventListener("mousedown", clickDiamond1);
}

function diamond1Restart() {
   console.log("diamond1 restart");
   const diamond1 = this;

   if (isGameRunning) {
      diamond1.classList.remove("falling");
      diamond1.offsetWidth;
      diamond1.classList.add("falling");
   }

   diamond1.classList.remove("position1", "position2", "position3", "position4", "position5", "position6");

   const p = Math.ceil(Math.random() * 6 + 1);
   diamond1.classList.add(`position${p}`);
}

// diamond2

function clickDiamond2() {
   console.log("diamond2 clicked");

   const diamond2 = this; // document.querySelector("#coin1_container");

   diamond2.removeEventListener("mousedown", clickDiamond2);

   diamond2.classList.add("paused");

   diamond2.querySelector("img").classList.add("point-click");

   diamond2.addEventListener("animationend", diamond2Gone);

   document.querySelector("#sound_diamond2").currentTime = 0;
   document.querySelector("#sound_diamond2").play();

   increasePoints400();
}

function diamond2Gone() {
   console.log("diamond2 gone");

   const diamond2 = this; //document.querySelector("#diamond1_container");

   diamond2.removeEventListener("animationend", diamond2Gone);

   diamond2.querySelector("img").classList.remove("point-click");

   diamond2.classList.remove("paused");

   diamond2Restart.call(this);

   diamond2.addEventListener("mousedown", clickDiamond2);
}

function diamond2Restart() {
   console.log("diamond2 restart");
   const diamond2 = this;

   if (isGameRunning) {
      diamond2.classList.remove("falling");
      diamond2.offsetWidth;
      diamond2.classList.add("falling");
   }

   diamond2.classList.remove("position1", "position2", "position3", "position4", "position5", "position6");

   const p = Math.ceil(Math.random() * 6 + 1);
   diamond2.classList.add(`position${p}`);
}

// diamond3

function clickDiamond3() {
   console.log("diamond3 clicked");

   const diamond3 = this; // document.querySelector("#coin1_container");

   diamond3.removeEventListener("mousedown", clickDiamond3);

   diamond3.classList.add("paused");

   diamond3.querySelector("img").classList.add("point-click");

   diamond3.addEventListener("animationend", diamond3Gone);

   document.querySelector("#sound_diamond3").currentTime = 0;
   document.querySelector("#sound_diamond3").play();

   increasePoints500();
}

function diamond3Gone() {
   console.log("diamond3 gone");

   const diamond3 = this; //document.querySelector("#diamond1_container");

   diamond3.removeEventListener("animationend", diamond3Gone);

   diamond3.querySelector("img").classList.remove("point-click");

   diamond3.classList.remove("paused");

   diamond3Restart.call(this);

   diamond3.addEventListener("mousedown", clickDiamond3);
}

function diamond3Restart() {
   console.log("diamond3 restart");
   const diamond3 = this;

   if (isGameRunning) {
      diamond3.classList.remove("falling");
      diamond3.offsetWidth;
      diamond3.classList.add("falling");
   }

   diamond3.classList.remove("position1", "position2", "position3", "position4", "position5", "position6");

   const p = Math.ceil(Math.random() * 6 + 1);
   diamond3.classList.add(`position${p}`);
}

// lives functions

let lives = 3;

function decreaseLives() {
   console.log("decreaseLives");
   displayDecreasedLives();
   lives--;

   if (lives <= 0) {
      gameOver();
   }
}

function displayDecreasedLives() {
   console.log("#heart" + lives);
   document.querySelector("#heart" + lives).classList.remove("active");
   document.querySelector("#heart" + lives).classList.add("deactive");
}

function resetLives() {
   lives = 3;
   displayDecreasedLives();
}

// skull

function clickSkull() {
   console.log("skull clicked");

   const skull = this; // document.querySelector("#coin1_container");

   skull.removeEventListener("mousedown", clickSkull);

   skull.classList.add("paused");

   skull.querySelector("img").classList.add("bad-click");

   skull.addEventListener("animationend", skullGone);

   document.querySelector("#sound_skull").currentTime = 0;
   document.querySelector("#sound_skull").play();

   decreaseLives();
}

function skullGone() {
   console.log("skull gone");

   const skull = this; //document.querySelector("#diamond1_container");

   skull.removeEventListener("animationend", skullGone);

   skull.querySelector("img").classList.remove("bad-click");

   skull.classList.remove("paused");

   skullRestart.call(this);

   skull.addEventListener("mousedown", clickSkull);
}

function skullRestart() {
   console.log("skull restart");
   const skull = this;

   if (isGameRunning) {
      skull.classList.remove("falling");
      skull.offsetWidth;
      skull.classList.add("falling");
   }
   skull.classList.remove("position1", "position2", "position3", "position4", "position5", "position6");

   const p = Math.ceil(Math.random() * 6);
   skull.classList.add(`position${p}`);
}

// bomb

function clickBomb() {
   console.log("bomb clicked");

   const bomb = this; // document.querySelector("#coin1_container");

   bomb.removeEventListener("mousedown", clickBomb);

   bomb.classList.add("paused");

   bomb.querySelector("img").classList.add("bad-click");

   bomb.addEventListener("animationend", bombGone);

   document.querySelector("#sound_bomb").currentTime = 0;
   document.querySelector("#sound_bomb").play();

   decreaseLives();
}

function bombGone() {
   console.log("bomb gone");

   const bomb = this; //document.querySelector("#diamond1_container");

   bomb.removeEventListener("animationend", bombGone);

   bomb.querySelector("img").classList.remove("bad-click");

   bomb.classList.remove("paused");

   bombRestart.call(this);

   bomb.addEventListener("mousedown", clickBomb);
}

function bombRestart() {
   console.log("bomb restart");
   const bomb = this;

   if (isGameRunning) {
      bomb.classList.remove("falling");
      bomb.offsetWidth;
      bomb.classList.add("falling");
   }

   bomb.classList.remove("position1", "position2", "position3", "position4", "position5", "position6");

   const p = Math.ceil(Math.random() * 6);
   bomb.classList.add(`position${p}`);
}

// gameover and level complete functions

function gameOver() {
   console.log("GAME OVER");
   document.querySelector("#gameover").classList.remove("hidden");
   document.querySelector("#sound_gameOver").currentTime = 0;
   document.querySelector("#sound_gameOver").play();
   document.querySelector("#btn_try_again").addEventListener("click", startGame);
   stopGame();
}

function levelComplete() {
   console.log("LEVEL COMPLETE");
   document.querySelector("#level_complete").classList.remove("hidden");
   document.querySelector("#sound_levelComplete").currentTime = 0;
   document.querySelector("#sound_levelComplete").play();
   document.querySelector("#btn_restart").addEventListener("click", ready);

   stopGame();
}

function stopGame() {
   document.querySelector("#coin_container").classList.remove("falling");
   document.querySelector("#diamond1_container").classList.remove("falling");
   document.querySelector("#diamond2_container").classList.remove("falling");
   document.querySelector("#diamond3_container").classList.remove("falling");
   document.querySelector("#skull_container").classList.remove("falling");
   document.querySelector("#bomb_container").classList.remove("falling");

   document.querySelector("#coin_container").removeEventListener("mousedown", clickCoin);
   document.querySelector("#diamond1_container").removeEventListener("mousedown", clickDiamond1);
   document.querySelector("#diamond2_container").removeEventListener("mousedown", clickDiamond2);
   document.querySelector("#diamond3_container").removeEventListener("mousedown", clickDiamond3);
   document.querySelector("#skull_container").removeEventListener("mousedown", clickSkull);
   document.querySelector("#bomb_container").removeEventListener("mousedown", clickBomb);

   document.querySelector("#sound_background").pause();

   document.querySelector("#game_elements").classList.add("hidden");
   document.querySelector("#game_ui").classList.add("hidden");

   isGameRunning = false;

   document.querySelector("#time_sprite").classList.remove("shrink");
}

//timer

function startTimer() {
   document.querySelector("#time_sprite").classList.add("shrink");
   document.querySelector("#time_sprite").addEventListener("animationend", timeIsUp);
}

function timeIsUp() {
   console.log("times up");
   if (points >= 5000) {
      levelComplete();
   } else {
      gameOver();
   }
}

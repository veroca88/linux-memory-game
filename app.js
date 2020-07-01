document.addEventListener("DOMContentLoaded", () => {
  const arrayOfCards = [
    {
      name: "archlinux",
      img: "images/archlinux.jpg",
    },
    {
      name: "centos",
      img: "images/centos.jpg",
    },
    {
      name: "debian",
      img: "images/debian.png",
    },
    {
      name: "fedora",
      img: "images/fedora.jpg",
    },
    {
      name: "popos",
      img: "images/popos.png",
    },
    {
      name: "redhat",
      img: "images/redhat.jpg",
    },
    {
      name: "suse",
      img: "images/suse.jpg",
    },
    {
      name: "ubuntu",
      img: "images/ubuntu.png",
    },
    {
      name: "archlinux",
      img: "images/archlinux.jpg",
    },
    {
      name: "centos",
      img: "images/centos.jpg",
    },
    {
      name: "debian",
      img: "images/debian.png",
    },
    {
      name: "fedora",
      img: "images/fedora.jpg",
    },
    {
      name: "popos",
      img: "images/popos.png",
    },
    {
      name: "redhat",
      img: "images/redhat.jpg",
    },
    {
      name: "suse",
      img: "images/suse.jpg",
    },
    {
      name: "ubuntu",
      img: "images/ubuntu.png",
    },
  ];
  arrayOfCards.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid-container");
  const score = document.querySelector("#score");
  const boxMessage = document.querySelector(".message-box");
  const crono = document.querySelector("#startClock");
  const footer = document.querySelector("#footer");
  const level = window.location.search;

  let onPressCard = [];
  let onPressCardId = [];
  let winningCards = [];
  let counter = 0;
  let time;

  function startGame(dificulty) {
    console.log("Start Game - difficulty", dificulty);
    if (dificulty === "?easy=") counter = 45;
    if (dificulty === "?hard=") counter = 25;
    time = setInterval(function () {
      counter--;
      if (counter >= 0) {
        span = document.getElementById("count");
        span.innerHTML = counter;
      }
      if (counter === 0) {
        alert("Game Over!");
        window.location.href = "index.html";
        clearInterval(counter);
      }
    }, 1000);
  }

  // Start cronometer

  function cronometer() {
    crono.addEventListener("click", startGame(level));
  }

  // funtion stop Cronometer

  function stopGame() {
    clearInterval(time);
  }

  // Create the board and assign back of card and id

  function createBoard() {
    for (let i = 0; i < arrayOfCards.length; i++) {
      const card = document.createElement("img");

      card.setAttribute("src", "images/matrix.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  // Check pair of card

  function checkPair() {
    const cards = document.querySelectorAll("img");
    const firstTry = onPressCardId[0];
    const secondTry = onPressCardId[1];

    if (onPressCard[0] === onPressCard[1]) {
      winningCards.push(onPressCard);
    } else {
      cards[firstTry].setAttribute("src", "images/matrix.png");
      cards[secondTry].setAttribute("src", "images/matrix.png");
    }
    onPressCard = [];
    onPressCardId = [];
    score.textContent = winningCards.length;
    if (winningCards.length === arrayOfCards.length / 2) {
      boxMessage.textContent = "Everything that has a beginning has an end.";
      stopGame();
      alert("You win!");
      window.location.href = "index.html";
    }
  }

  // Flip card
  function flipCard() {
    const cardId = this.getAttribute("data-id");
    onPressCard.push(arrayOfCards[cardId].name);
    console.log(arrayOfCards[cardId].name);
    onPressCardId.push(cardId);
    this.setAttribute("src", arrayOfCards[cardId].img);
    if (onPressCard.length === 2) {
      console.log("length", onPressCard.length);
      setTimeout(checkPair, 500);
    }
  }

  createBoard();
  cronometer();
});

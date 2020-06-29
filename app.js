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

  let onPressCard = [];
  let onPressCardId = [];
  let winningCards = [];

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
  //Message promt

  function message(status) {
    const youWinMessage = "Deja vu!!!";
    const youLostMessage =
      "I can only show you the door. You're the one that has to walk through it. Try again...";
    const someInfo = document.querySelector(".boxMessage");
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
      message.textContent =
        "Everithing that has a beginning has an end. You win!!!";
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
});
arrayOfCards;

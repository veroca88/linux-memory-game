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
      img: "images/debian.jpg",
    },
    {
      name: "fedora",
      img: "images/fedora.jpg",
    },
    {
      name: "popos",
      img: "images/popos.jpg",
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
      img: "images/ubuntu.jpg",
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
      img: "images/debian.jpg",
    },
    {
      name: "fedora",
      img: "images/fedora.jpg",
    },
    {
      name: "popos",
      img: "images/popos.jpg",
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
      img: "images/ubuntu.jpg",
    },
  ];
  arrayOfCards.sort(() => 0.5 - Math.random());
  const grid = document.querySelector(".grid-container");

  const score = document.querySelector("#score");
  const message = document.querySelector(".message-box");

  const onPressCard = [];
  const onPressCardId = [];
  const winningCards = [];

  // Create the board and assign back of card and id

  function createBoard() {
    for (let i = 0; i < arrayOfCards.length; i++) {
      const containerImage = document.createElement("div");
      const card = document.createElement("img");
      containerImage.setAttribute("backgroundColor", "black");

      card.setAttribute("src", "images/matrix.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      containerImage.appendChild(card);
      grid.appendChild(containerImage);
    }
  }
  // Check pair of card

  function checkPair() {
    const youWinMessage = "Deja vu!!!";
    const youLostMessage =
      "I can only show you the door. You're the one that has to walk through it. Try again...";
    const cards = document.querySelectorAll("img");
    const firstTry = onPressCardId[0];
    const secondTry = onPressCardId[1];

    if (onPressCard[0] === onPressCard[1]) {
      console.log("first", onPressCard[0], "second", onPressCard[1]);
      message.textContent = youWinMessage;
      cards[firstTry].setAttribute("src", "images/matrix.png");
      cards[secondTry].setAttribute("src", "images/matrix.png");
      winningCards.push(onPressCard);
    } else {
      (message.textContent = youLostMessage),
        cards[firstTry].setAttribute("src", "images/matrix.png"),
        cards[secondTry].setAttribute("src", "images/matrix.png");
    }
    onPressCard = [];
    onPressCardId = [];
    score.textContent = winningCards.length;
    if (winningCards.length === arrayOfCards.length / 2) {
      score.textContent = "Everithing that has a beginning has an end.";
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
      setTimeout(checkPair, 500);
    }
  }
  createBoard();
});
arrayOfCards;

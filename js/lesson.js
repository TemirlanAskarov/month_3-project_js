// // TAB SLIDER

const tabContentBlocks = document.querySelectorAll(".tab_content_block");
const tabContentItems = document.querySelectorAll(".tab_content_item");
const tabContentItemParent = document.querySelector(".tab_content_items");
let currentTab = 0;

const hideTabContent = () => {
  tabContentBlocks.forEach((block) => {
    block.style.display = "none";
  });

  tabContentItems.forEach((item) => {
    item.classList.remove("tab_content_item_active");
  });
};

const showTabContent = (id) => {
  tabContentBlocks[id].style.display = "block";
  tabContentItems[id].classList.add("tab_content_item_active");
};

const autoTabItems = () => {
  hideTabContent();
  currentTab = (currentTab + 1) % tabContentItems.length;
  showTabContent(currentTab);
};

hideTabContent();
showTabContent(currentTab);

setInterval(autoTabItems, 3000);

tabContentItemParent.onclick = (event) => {
  if (event.target.classList.contains("tab_content_item")) {
    tabContentItems.forEach((item, index) => {
      if (event.target === item) {
        hideTabContent();
        showTabContent(index);
        currentTab = index;
      }
    });
  }
};

//////// CONVERTER

const somInput = document.querySelector("#som");
const usdInput = document.querySelector("#usd");
const eurInput = document.querySelector("#eur");

const converter = (element, targetElem1, targetEleme2) => {
  element.oninput = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "../data/converter.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();

    request.onload = () => {
      const data = JSON.parse(request.response);
      if (element.id === "som") {
        targetElem1.value = (element.value / data.usd).toFixed(2);
        targetEleme2.value = (element.value / data.eur).toFixed(2);
      } else if (element.id === "usd") {
        targetElem1.value = (element.value * data.usd).toFixed(2);
        targetEleme2.value = ((element.value * data.usd) / data.eur).toFixed(2);
      } else if (element.id === "eur") {
        targetElem1.value = (element.value / data.eur).toFixed(2);
        targetEleme2.value = ((element.value * data.eur) / data.usd).toFixed(2);
      } else if (element === "") {
        targetElem1.value = "";
        targetEleme2.value = "";
      }
    };
  };
};

converter(somInput, usdInput, eurInput);
converter(usdInput, somInput, eurInput);
converter(eurInput, somInput, usdInput);

/// CARD SWITCHER

const card = document.querySelector(".card");
const btnNext = document.querySelector("#btn-next");
const btnPrev = document.querySelector("#btn-prev");

let cardId = 0;

const requestTodos = (cardId = 0) => {
  cardId++;
  fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
    .then((responce) => responce.json())
    .then((data) => {
      card.innerHTML = `
       <p>${data.title}</p>
       <p style="color: ${data.completed ? "green" : "red"} ">${
        data.completed
      }</p>
       <span>${data.id}</span>
       
       `;
    });
};

btnNext.onclick = () => {
  if (cardId === 199) {
    cardId = 0;
  } else {
    cardId++;
  }
  requestTodos(cardId);
};

btnPrev.onclick = () => {
  if (cardId === 0) {
    cardId = 199;
  } else {
    cardId--;
  }
  requestTodos(cardId);
};

requestTodos();

////// Request on posts
const requestPosts = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((responce) => responce.json())
    .then((data) => console.log(data));
};

requestPosts();

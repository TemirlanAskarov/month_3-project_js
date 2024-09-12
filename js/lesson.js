// // TAB SLIDER

const tabContentBlocks = document.querySelectorAll(".tab_content_block");
const tabContentItems = document.querySelectorAll(".tab_content_item");
const tabContentItemParent = document.querySelector(".tab_content_items");
let currentTab = 0; // Используем let, чтобы иметь возможность изменять значение

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

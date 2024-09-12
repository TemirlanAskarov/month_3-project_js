// MODAL

const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector("#btn-get");
const modalCloseButton = document.querySelector(".modal_close");

let modalShown = false;

const openModal = () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.style.display = "none";
  document.body.style.overflow = "";
};

const checkScroll = () => {
  console.log("scroll");
  if (modalShown) return;

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  if (scrollTop + clientHeight >= scrollHeight) {
    openModal();
    modalShown = true;
    window.removeEventListener("scroll", checkScroll);
  }
};

modalTrigger.onclick = openModal;
modalCloseButton.onclick = closeModal;

modal.onclick = (event) => {
  if (event.target === modal) {
    closeModal();
  }
};

window.addEventListener("scroll", checkScroll);

setInterval(openModal, 10000);

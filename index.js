//mobile menu
const mobileIconBar = document.querySelector(".bars");
const mobileMenu = document.querySelector(".mobile__menu");

mobileIconBar.addEventListener("click", (event) => {
  const icon = event.target.closest(".hamburger__icon");
  if (!icon) return;
  mobileIconBar.classList.toggle("open");
  mobileMenu.classList.toggle("is-hidden");
});

// tabby
const tabby = document.querySelector(".main__content-two-tabby");
const tabBtn = tabby.querySelector(".main__content-two-tabby-buttons");

const tabbyContent = tabby.querySelector(".tabby__contents");
const tabbyContents = [...tabbyContent.querySelectorAll(".jsTabContent")];

//tab button
const tab = [...tabby.querySelectorAll(".tab")];

tabBtn.addEventListener("click", (event) => {
  const tabbyBtn = event.target.closest(".tab");
  const target = tabbyBtn.dataset.target;
  const content = tabbyContent.querySelector("#" + target);

  tabbyContents.forEach((t) => t.classList.remove("is-selected"));
  content.classList.add("is-selected");

  //tab
  tab.forEach((t) => t.classList.remove("is-select"));
  tabbyBtn.classList.add("is-select");
});

//Accordion
const accordions = document.querySelector(".contents__four-faq");

accordions.addEventListener("click", (event) => {
  const accordionBtn = event.target.closest(".faq__head");
  if (!accordionBtn) return;

  const accordion = accordionBtn.parentElement.children[1];

  const accordionContent = accordion;

  const accordionInner = accordionContent.children[0];

  //faq rotate
  const faqRotate = accordion.previousElementSibling.children[1].children[0];
  faqRotate.classList.toggle("is-selected");
  //faq head color
  const faqHead = accordion.previousElementSibling.children[0];
  faqHead.classList.toggle("is-selected");

  let height;

  if (accordion.classList.contains("is-open")) {
    height = 0;
  } else {
    height = accordionInner.getBoundingClientRect().height;
  }

  accordion.classList.toggle("is-open");
  accordion.style.height = `${height}px`;
});

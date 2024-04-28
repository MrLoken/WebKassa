const buttons = document.querySelectorAll(".yayayay");
const companyCordion = document.querySelectorAll(".accordionComp");

// companyCordion.forEach((el) => {
//   el.addEventListener("click", () => {});
//   const content = el.querySelector(".content");
//
//   if (content.style.maxHeight) {
//     document
//       .querySelectorAll(".content")
//       .forEach((el) => (el.style.maxHeight = null));
//   } else {
//     document.querySelectorAll(".content").forEach((el) => {
//       el.style.maxHeight = null;
//       content.style.maxHeight = content.scrollHeight + "px";
//     });
//   }
// });

companyCordion.forEach((el) => {
  el.addEventListener("click", () => {
    companyCordion.forEach((item) => {
      item.classList.remove("active");
      item.querySelector("button").classList.remove("activesigma");
    });
    if (el.classList.contains("active")) {
      el.classList.remove("active");
      el.querySelector("button").classList.remove("activesigma");
    } else {
      el.classList.add("active");
      el.querySelector("button").classList.add("activesigma");
    }
  });
});

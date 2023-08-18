const moreBtn = document.querySelector(".info .metadata .moreBtn");
const title = document.querySelector(".info .metadata .title");

moreBtn.addEventListener("click", () => {
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
});

function toggleSubscribe() {
  let btnSubscribe = document.querySelector(".subscribe");
  if (btnSubscribe.textContent === "SUBSCRIBE") {
    btnSubscribe.textContent = "SUBSCRIBED 🔔";
    btnSubscribe.classList.add("subscribed");
  } else {
    btnSubscribe.textContent = "SUBSCRIBE";
    btnSubscribe.classList.remove("subscribed");
  }
}

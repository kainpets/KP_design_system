const navigation = document.querySelector(".primary-navigation");
const mobileNavigationToggle = document.querySelector(".mobile-nav-toggle");

mobileNavigationToggle.addEventListener("click", (e) => {
  const visibility = navigation.getAttribute("data-visible");
  if (visibility === "false") {
    navigation.setAttribute("data-visible", true);
    mobileNavigationToggle.setAttribute("aria-expanded", true)
  } else {
    navigation.setAttribute("data-visible", false);
    mobileNavigationToggle.setAttribute("aria-expanded", false)
  }
});

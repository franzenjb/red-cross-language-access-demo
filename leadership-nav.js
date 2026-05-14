const currentViewLabels = document.querySelectorAll("[data-current-view]");
const navigableLinks = document.querySelectorAll("[data-view]");
const sections = document.querySelectorAll("[data-section-view]");
let manualSelectionUntil = 0;

function setCurrentView(view) {
  currentViewLabels.forEach((label) => {
    label.textContent = view;
  });

  navigableLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.view === view);
  });
}

navigableLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (link.dataset.view) {
      manualSelectionUntil = Date.now() + 900;
      setCurrentView(link.dataset.view);
    }
  });
});

const initialHash = window.location.hash.replace("#", "");
const initialSection = initialHash
  ? document.querySelector(`[data-section-view][id="${initialHash}"]`)
  : document.querySelector("[data-section-view]");

if (initialSection) {
  setCurrentView(initialSection.dataset.sectionView);
}

const observer = new IntersectionObserver(
  (entries) => {
    if (Date.now() < manualSelectionUntil) {
      return;
    }

    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible) {
      setCurrentView(visible.target.dataset.sectionView);
    }
  },
  {
    rootMargin: "-20% 0px -55% 0px",
    threshold: [0.1, 0.35, 0.6],
  },
);

sections.forEach((section) => observer.observe(section));

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
  if (initialHash) {
    window.setTimeout(() => {
      manualSelectionUntil = Date.now() + 500;
      initialSection.scrollIntoView({ block: "start" });
      setCurrentView(initialSection.dataset.sectionView);
    }, 50);
  }
}

let scrollTicking = false;

function currentOffset() {
  return window.matchMedia("(max-width: 680px)").matches ? 140 : 90;
}

function updateCurrentFromScroll() {
  if (Date.now() < manualSelectionUntil) {
    scrollTicking = false;
    return;
  }

  const offset = currentOffset();
  const current = [...sections].reduce((active, section) => {
    return section.getBoundingClientRect().top <= offset ? section : active;
  }, sections[0]);

  if (current) {
    setCurrentView(current.dataset.sectionView);
  }

  scrollTicking = false;
}

function queueCurrentUpdate() {
  if (!scrollTicking) {
    scrollTicking = true;
    window.requestAnimationFrame(updateCurrentFromScroll);
  }
}

window.addEventListener("scroll", queueCurrentUpdate, { passive: true });
window.addEventListener("resize", queueCurrentUpdate);
window.setTimeout(queueCurrentUpdate, 100);

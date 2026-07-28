const projects = [
  {
    title: "Older Adults · Activities",
    desc: "Senior center activity listings — bingo, fitness classes, drop-in studio, and games.",
    images: ["images/activities.png", "images/activities-current.png"],
  },
  {
    title: "Adventures in Learning",
    desc: "Preschool program page for children ages 3–5, covering curriculum and enrollment.",
    images: ["images/adventures-in-learning.png"],
  },
  {
    title: "Community Garden",
    desc: "Landing page for Santa Clara's community garden plots, events, and member guidelines.",
    images: ["images/community-garden.png", "images/community-garden-current.png"],
  },
  {
    title: "Early Learners",
    desc: "Program overview page for early childhood recreation classes.",
    images: ["images/early-learners.png", "images/early-learners-2.png"],
  },
  {
    title: "Get Involved",
    desc: "Hub page pointing residents to volunteering, boards, and community participation.",
    images: ["images/get-involved.png", "images/get-involved-current.png"],
  },
  {
    title: "Golf & Tennis",
    desc: "Facility and program page for the city's golf and tennis offerings.",
    images: ["images/golf-tennis.png"],
  },
  {
    title: "Health & Wellness",
    desc: "Program listings for wellness classes and health-focused recreation services.",
    images: ["images/health-wellness.png", "images/health-wellness-current.png"],
  },
  {
    title: "Memberships & Activity Passes",
    desc: "Membership tiers and activity pass information for recreation facilities.",
    images: ["images/memberships.png", "images/memberships-current-1.png", "images/memberships-current-2.png"],
  },
  {
    title: "Older Adults (50+)",
    desc: "Section landing page for the department's Older Adults program area.",
    images: ["images/older-adults-current.png"],
  },
  {
    title: "Parks & Facilities",
    desc: "Directory page for city parks, reservations, and facility information.",
    images: ["images/parks-facilities-current-1.png", "images/parks-facilities-current-2.png"],
  },
  {
    title: "Roberta Jones Junior Theatre",
    desc: "Season announcements, show details, and ticketing info for the youth theatre program.",
    images: ["images/rjjt.png", "images/rjjt-current-1.png", "images/rjjt-current-2.png"],
  },
  {
    title: "Senior Center Memberships",
    desc: "Membership options and pricing specific to the Senior Center.",
    images: ["images/senior-center-memberships.png", "images/senior-center-memberships-current.png"],
  },
  {
    title: "Sponsorship Opportunities",
    desc: "Page outlining sponsorship packages supporting parks and recreation programs.",
    images: ["images/sponsorship-opportunities.png", "images/sponsorship-opportunities-current.png"],
  },
  {
    title: "Sport Parks & Fields",
    desc: "Directory of sport fields, courts, and athletic facilities across the city.",
    images: ["images/sport-parks-fields-1.png", "images/sport-parks-fields-2.png"],
  },
  {
    title: "Swimming & Aquatics",
    desc: "Lap swim schedules, swim center info, and aquatic program listings.",
    images: ["images/swimming.png", "images/swim-1.png", "images/swim-2.png"],
  },
  {
    title: "Volunteer Opportunities",
    desc: "Ways for residents to volunteer across parks and recreation programs.",
    images: ["images/volunteer-opportunities.png", "images/volunteer-opportunities-current-1.png", "images/volunteer-opportunities-current-2.png"],
  },
  {
    title: "Youth & Teen Center",
    desc: "After-school program info, hours, contact details, and youth programming.",
    images: ["images/ytc.png", "images/ytc-current.png", "images/ytc-current-2.png"],
  },
];

const grid = document.getElementById("projectGrid");

projects.forEach((project, index) => {
  const card = document.createElement("button");
  card.className = "card";
  card.type = "button";
  card.setAttribute("aria-label", `View ${project.title} project images`);

  const countBadge =
    project.images.length > 1
      ? `<span class="card-count">${project.images.length} pages</span>`
      : "";

  card.innerHTML = `
    <div class="card-thumb">
      <img src="${project.images[0]}" alt="${project.title} screenshot" loading="lazy">
      ${countBadge}
    </div>
    <div class="card-body">
      <h3 class="card-title">${project.title}</h3>
      <p class="card-desc">${project.desc}</p>
    </div>
  `;

  card.addEventListener("click", () => openLightbox(index, 0));
  grid.appendChild(card);
});

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxCount = document.getElementById("lightboxCount");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxBackdrop = document.getElementById("lightboxBackdrop");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

let currentProject = 0;
let currentImage = 0;

function openLightbox(projectIndex, imageIndex) {
  currentProject = projectIndex;
  currentImage = imageIndex;
  renderLightbox();
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function renderLightbox() {
  const project = projects[currentProject];
  lightboxImg.src = project.images[currentImage];
  lightboxImg.alt = `${project.title} screenshot ${currentImage + 1}`;
  lightboxTitle.textContent = project.title;
  lightboxCount.textContent =
    project.images.length > 1
      ? `${currentImage + 1} / ${project.images.length}`
      : "";
  const showNav = project.images.length > 1;
  lightboxPrev.style.display = showNav ? "flex" : "none";
  lightboxNext.style.display = showNav ? "flex" : "none";
}

function showPrev() {
  const project = projects[currentProject];
  currentImage = (currentImage - 1 + project.images.length) % project.images.length;
  renderLightbox();
}

function showNext() {
  const project = projects[currentProject];
  currentImage = (currentImage + 1) % project.images.length;
  renderLightbox();
}

lightboxClose.addEventListener("click", closeLightbox);
lightboxBackdrop.addEventListener("click", closeLightbox);
lightboxPrev.addEventListener("click", showPrev);
lightboxNext.addEventListener("click", showNext);

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") showPrev();
  if (e.key === "ArrowRight") showNext();
});

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

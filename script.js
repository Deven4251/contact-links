const menu = document.querySelector('.menu');
const toggle = document.querySelector('.toggle');
const mainLabel = document.getElementById('mainLabel');
const names = [
  "Facebook",
  "WhatsApp",
  "X (Twitter)",
  "Supabase",
  "LinkedIn",
  "Instagram",
  "GitHub",
  "YouTube"
];

// Attach events to all menu items
menu.querySelectorAll('li').forEach((li, idx) => {
  li.addEventListener('mouseenter', () => {
    mainLabel.textContent = names[idx];
  });
  li.addEventListener('mouseleave', () => {
    mainLabel.textContent = ""; // Clear label when not hovering
  });
});

// Toggle button logic
toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

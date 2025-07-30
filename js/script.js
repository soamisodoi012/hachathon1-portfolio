function redirectToEmail() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const subject = encodeURIComponent(`Portfolio Contact: ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

  window.location.href = `mailto:soamisodoi012@gmail.com?subject=${subject}&body=${body}`;
}

function showSkillCategory(category) {
  document.querySelectorAll('.skill-category').forEach(el => el.style.display = 'none');
  document.getElementById(category).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
  showSkillCategory('programming');
});
const text = "Hi there!";
const typewriterElement = document.getElementById("typewriter");
let index = 0;
let deleting = false;

function typeEffect() {
  if (!deleting) {
    typewriterElement.textContent = text.substring(0, index + 1);
    index++;
    if (index === text.length) {
      deleting = true;
      setTimeout(typeEffect, 1000); // pause before deleting
      return;
    }
  } else {
    typewriterElement.textContent = text.substring(0, index - 1);
    index--;
    if (index === 0) {
      deleting = false;
      setTimeout(typeEffect, 500); // pause before typing again
      return;
    }
  }

  setTimeout(typeEffect, 150);
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});

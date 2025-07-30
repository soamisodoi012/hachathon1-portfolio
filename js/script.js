
function redirectToEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const subject = encodeURIComponent(`Portfolio Contact: ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:soamisodoi012@gmail.com?subject=${subject}&body=${body}`;
}

// function showSkillCategory(category) {
//     const categories = document.querySelectorAll('.skill-category');
//     categories.forEach(cat => cat.style.display = 'none');
//     document.getElementById(category).style.display = 'block';
// }
function showSkillCategory(category) {
    document.querySelectorAll('.skill-category').forEach(el => el.style.display = 'none');
    document.getElementById(category).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    showSkillCategory('programming');
});

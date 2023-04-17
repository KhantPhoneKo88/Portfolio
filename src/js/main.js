const moblieMenuBtn = document.getElementById("hamburgerBtn");
const closeMobileMenuBtn = document.getElementById("closeMobileMenuBtn");
const mobileMenu = document.getElementById("moblieMenu");
const contactForm = document.getElementById("contactForm");

moblieMenuBtn.addEventListener("click", function (e) {
  mobileMenu.classList.toggle("hidden");
});
closeMobileMenuBtn.addEventListener("click", function (e) {
  mobileMenu.classList.toggle("hidden");
});

let prevScrollPos = window.pageYOffset;
window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector(".navbar").classList.remove("hidden");
  } else {
    document.querySelector(".navbar").classList.add("hidden");
  }
  prevScrollPos = currentScrollPos;
};

// email.js
emailjs.init("MyWwipu9Gtlr7TnTT");

if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    try {
      const formData = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#message").value,
      };
      await emailjs.send("service_1y0ckgx", "template_d8jcszi", formData);
      location.reload();
    } catch (err) {
      alert("Failed to send email");
    }
  });
}

//close mobile nav
const links = mobileMenu.querySelectorAll("a");
if (links) {
  links.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  });
}

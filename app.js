
// -------- HERO SWITCH (Home1 vs Home2) --------
const hero1 = document.querySelector(".hero-1");
const hero2 = document.querySelector(".hero-2");

document.getElementById("hero1").addEventListener("change", () => {
  hero1.style.display = "block";
  hero2.style.display = "none";
});

document.getElementById("hero2").addEventListener("change", () => {
  hero2.style.display = "block";
  hero1.style.display = "none";
});

// -------- SMOOTH SCROLLING --------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// -------- BOOKING FORM VALIDATION --------
const bookingForm = document.querySelector(".booking-form");

if (bookingForm) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = bookingForm.querySelector('input[name="name"]').value.trim();
    const phone = bookingForm.querySelector('input[name="phone"]').value.trim();
    const service = bookingForm.querySelector('select[name="service"]').value;
    const date = bookingForm.querySelector('input[name="date"]').value;

    if (name.length < 3) {
      alert("Please enter a valid name (min 3 characters).");
      return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!service) {
      alert("Please select a service.");
      return;
    }

    if (!date) {
      alert("Please choose a preferred date.");
      return;
    }

    alert(`Thank you ${name}! Your ${service} booking has been received for ${date}.`);
    bookingForm.reset();
  });
}

// -------- SERVICE CARD CLICK AUTO-SCROLL --------
document.querySelectorAll(".service-card").forEach(card => {
  card.addEventListener("click", (e) => {
    const targetId = card.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// -------- PRICING TABLE HIGHLIGHT --------
document.querySelectorAll(".pricing tbody tr").forEach(row => {
  row.addEventListener("mouseenter", () => {
    row.style.backgroundColor = "#fffae6";
  });
  row.addEventListener("mouseleave", () => {
    row.style.backgroundColor = "transparent";
  });
});
```

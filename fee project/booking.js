document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Collect values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const people = document.getElementById("people").value;

  // Simple validation
  if (!name || !email || !phone || !date || !time || !people) {
    alert("Please fill all the fields before booking.");
    return;
  }

  // Phone number check
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  // Simulate backend saving (store in localStorage)
  const bookingData = {
    name,
    email,
    phone,
    date,
    time,
    people
  };
  localStorage.setItem("bookingData", JSON.stringify(bookingData));

  // Show confirmation message
  const confirmation = document.getElementById("confirmation");
  confirmation.style.display = "block";
  confirmation.innerHTML = `
    ✅ Thank you, <b>${name}</b>!<br>
    Your table for <b>${people}</b> on <b>${date}</b> at <b>${time}</b> has been successfully booked.
  `;

  // Reset form
  document.getElementById("bookingForm").reset();
});

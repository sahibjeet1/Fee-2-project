
document.addEventListener("DOMContentLoaded", () => {
  const map = document.getElementById("map");
  map.innerHTML = `
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.873053807548!2d90.41251817585398!3d23.78903268732082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b4e1b7dfef%3A0xa3b6ea4c8456b48a!2sRestaurant!5e0!3m2!1sen!2sin!4v1698300000000!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style="border:0;"
      allowfullscreen=""
      loading="lazy">
    </iframe>
  `;

  document.getElementById("backBtn").addEventListener("click", () => {
    window.location.href = "index.html";
  });
});

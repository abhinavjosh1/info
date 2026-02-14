const contactContainer = document.getElementById("contact-container");

if (contactContainer) {
  contactContainer.innerHTML = `
    <p class="contact-intro">
      For research discussions, academic collaboration, feel free to reach out.
    </p>

    <div class="contact-grid">
      <div class="contact-item">
        <span class="label">Email</span>
        <a href="mailto:abhinavjoshicse@gmail.com">abhinavjoshicse@gmail.com</a>
      </div>

      <div class="contact-item">
        <span class="label">Office</span>
        <span>Research Lab, Department of Artificial Intelligence</span>
      </div>

      <div class="contact-item">
        <span class="label">Institution</span>
        <span>SVNIT Surat, Gujarat, India</span>
      </div>

      <div class="contact-item">
        <span class="label">Visiting Hours</span>
        <span>Mon – Fri · 2:00 PM – 4:00 PM</span>
      </div>

    </div>
  `;
}

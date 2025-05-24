document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");
  const navButtons = document.querySelector(".nav-buttons");
  const navLinkItems = document.querySelectorAll(".nav-links a");

  // Toggle menu when button is clicked
  menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
    navButtons.classList.toggle("show");
  });

  // Close menu when a navigation link is clicked
  navLinkItems.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.classList.remove("show");
      navButtons.classList.remove("show");

      // Hapus class active dari semua link
      navLinkItems.forEach((item) => item.classList.remove("active"));
      // Tambahkan class active ke link yang diklik
      this.classList.add("active");
    });
  });

  // Fungsi untuk mengatur link aktif berdasarkan section yang terlihat
  function setActiveSection() {
    const sections = document.querySelectorAll("section[id]");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const scroll = window.scrollY;

      if (scroll >= sectionTop && scroll < sectionTop + sectionHeight) {
        const currentId = section.getAttribute("id");

        navLinkItems.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${currentId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  // Tambahkan event listener untuk scroll
  window.addEventListener("scroll", setActiveSection);

  // Set link aktif saat halaman dimuat
  function setActiveLinkOnLoad() {
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;

    navLinkItems.forEach((link) => {
      const href = link.getAttribute("href");

      if (currentPath.endsWith("index.html") || currentPath === "/") {
        if (currentHash && href === currentHash) {
          link.classList.add("active");
        } else if (!currentHash && href === "#beranda") {
          link.classList.add("active");
        }
      } else if (href === currentPath) {
        link.classList.add("active");
      }
    });
  }

  // Jalankan fungsi saat halaman dimuat
  setActiveLinkOnLoad();
});
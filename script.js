// Pequenas interações da landing page
document.getElementById("year").textContent = new Date().getFullYear();

// Os links de inscrição levam à secção que contém o Google Forms.
document.querySelectorAll('a[href="#inscricao"]').forEach((link) => {
  link.addEventListener("click", () => {
    const section = document.getElementById("inscricao");
    if (section) section.classList.add("signup-highlight");
  });
});

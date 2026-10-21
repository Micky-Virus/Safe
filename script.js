document.addEventListener("DOMContentLoaded", () => {
  // Meta Pixel Subscribe event for every Telegram CTA.
  document.querySelectorAll("[data-subscribe]").forEach((button) => {
    button.addEventListener("click", () => {
      if (typeof window.fbq === "function") {
        window.fbq("track", "Subscribe");
      }
    });
  });
});

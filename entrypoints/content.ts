export default defineContentScript({
  matches: ["*://github.com/*"],
  main() {
    // Only redirect if we're on the exact homepage
    if (window.location.pathname === "/" || window.location.pathname === "") {
      // Check if this is an internal navigation (user clicked something on GitHub)
      const isInternalNavigation = document.referrer.includes("github.com");

      // Only redirect if it's NOT an internal navigation
      if (!isInternalNavigation) {
        window.location.replace("https://github.com/feed");
      }
    }
  },
});

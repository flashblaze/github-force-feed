export default defineContentScript({
  matches: ['*://github.com/*'],
  main() {
    // Only redirect if we're on the exact homepage
    if (window.location.pathname === '/' || window.location.pathname === '') {
      console.log('Redirecting to feed');
      window.location.replace('https://github.com/feed');
    }
  },
});

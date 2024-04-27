
document.addEventListener('DOMContentLoaded', (event) => {
  const taglines = [
    "Just a guy trying to figure out how to do the most good with what he's got (humble, yet self-important?)",
    "Driven multidisciplinary professional striving to apply mental models and new tools to solve challenging problems (resume-ready, hopefully)",
    "Innovative professional maximizing impact by collaboratively applying cutting edge tools to solve tomorrow's problems dynamically (SEO optimized!)",
    "Dilettante who dreams of being a polymath (both self-deprecating and pedantic)"
  ];

  let currentIndex = 0;
  const taglineElement = document.getElementById('tagline');
  taglineElement.textContent = taglines[currentIndex];

  setInterval(() => {
    taglineElement.classList.add('tagline-exiting');

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % taglines.length;
      taglineElement.textContent = taglines[currentIndex];
      taglineElement.classList.remove('tagline-exiting');
      taglineElement.classList.add('tagline-entering');

      setTimeout(() => {
        taglineElement.classList.remove('tagline-entering');
      }, 500);
    }, 500);
  }, 8000);
});

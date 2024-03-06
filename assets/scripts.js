
document.addEventListener('DOMContentLoaded', (event) => {
  const taglines = [
    "Realistic: Guy who's trying to figure out how to do the most good with what he's got",
    "Standard: Driven multidisciplinary professional striving to apply new tools and mental models to solve challenging problems.",
    "SEO: Innovative professional maximizing impact by collaborating in the application of cutting edge tools to solve tomorrow's problems dynamically",
    "Self-Deprecating: Dilettante who aspires to be a polymath"
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
  }, 4000);
});

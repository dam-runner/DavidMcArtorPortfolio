
document.addEventListener('DOMContentLoaded', (event) => {
  const taglines = [
    "Guy who's trying to figure out how to do the most good with what he's got",
    "Driven multidisciplinary professional striving to apply new tools and mental models to solve challenging problems",
    "Innovative professional maximizing impact by collaborating in the application of cutting edge tools to solve tomorrow's problems dynamically",
    "Dilettante who dreams of being a polymath"
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

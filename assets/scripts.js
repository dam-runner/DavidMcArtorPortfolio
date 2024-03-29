
document.addEventListener('DOMContentLoaded', (event) => {
  const taglines = [
    "Just a guy who's trying to figure out how to do the most good with what he's got (humble)",
    "Driven multidisciplinary professional striving to apply new tools and mental models to solve challenging problems (resume-ready)",
    "Innovative professional maximizing impact by collaborating in the application of cutting edge tools to solve tomorrow's problems dynamically (SEO optimized!)",
    "Dilettante who dreams of being a polymath (mildly self-deprecating)"
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

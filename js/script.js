// HACKER TEXT
const hackerElement = document.getElementById('hacker');

let isOriginal = true;
let scrambleInterval = null; // Track current interval

function hackerEffect(element, newText) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  const originalText = element.textContent;
  let iteration = 0;
  const interval = 40;

  // Cancel any existing interval
  if (scrambleInterval) clearInterval(scrambleInterval);

  scrambleInterval = setInterval(() => {
    let display = originalText.split("")
      .map((char, i) => {
        if (i < iteration) {
          return newText[i];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");

    element.textContent = display;

    iteration += 1 / 2;

    if (iteration >= newText.length) {
      clearInterval(scrambleInterval);
      scrambleInterval = null;
      element.textContent = newText;
    }
  }, interval);
}

hackerElement.addEventListener("mouseenter", () => {
  const targetText = isOriginal
    ? hackerElement.getAttribute("data-alt")
    : hackerElement.getAttribute("data-original");

  hackerEffect(hackerElement, targetText);
  isOriginal = !isOriginal;
});

// RANDOM AI PAGE
document.addEventListener("DOMContentLoaded", () => {
  const randomLinks = document.querySelectorAll(".random-ai");

  const aiPages = [
    "html/paginas-ias/deep-dream-generator.html",
    "html/paginas-ias/deepL-Write.html",
    "html/paginas-ias/docsBot.html",
    "html/paginas-ias/elevenLabs.html",
    "html/paginas-ias/gemini.html",
    "html/paginas-ias/leonardo-AI.html",
    "html/paginas-ias/napkin-AI.html",
    "html/paginas-ias/nvidia-ACE.html",
    "html/paginas-ias/pixVerse.html",
    "html/paginas-ias/quillbot.html",
    "html/paginas-ias/sora.html",
    "html/paginas-ias/suno-AI.html",
    "html/paginas-ias/whimsical.html",
    "html/paginas-ias/zzz-code-AI.html"
  ];

  randomLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default <a> behavior

      const randomIndex = Math.floor(Math.random() * aiPages.length);
      const selectedPage = aiPages[randomIndex];

      window.location.href = selectedPage;
    });
  });
});

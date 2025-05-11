const hackerElement = document.getElementById('hacker');

let isOriginal = true;

function hackerEffect(element, newText) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
  const originalText = element.textContent;
  let iteration = 0;
  const interval = 50;

  const scramble = setInterval(() => {
    let display = originalText.split("")
      .map((char, i) => {
        if (i < iteration) {
          return newText[i];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");

    element.textContent = display;

    iteration += 1 / 3;

    if (iteration >= newText.length) {
      clearInterval(scramble);
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

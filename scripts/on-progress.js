// List of sarcastic quotes
const quotes = [
    "Everything is broken. Including my motivation.",
    "Under construction. Overthinking everything.",
    "I'm not lazy, the site's just on a spiritual break.",
    "404: Progress not found.",
    "This was supposed to be done yesterday.",
    "It looked fine on my computer.",
    "Being fixed by a highly trained team of raccoons.",
    "We hired an AI to fix it. It's crying now.",
    "Why work when you can panic stylishly?",
    "Coming soon-ish. Hopefully."
  ];
  
  // Display random quote
  const quoteEl = document.getElementById('quote');
  quoteEl.textContent = quotes[Math.floor(Math.random() * quotes.length)];
  
  // Timer counts UP from 30 minutes (1800 seconds)
  let seconds = 1800; // Starting from 30 minutes (1800 seconds)
  const counter = document.getElementById('counter');
  
  setInterval(() => {
    seconds++;
  
    const hours = Math.floor(seconds / 3600);
    const remainingMinutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
  
    const hoursTens = Math.floor(hours / 10);
    const hoursOnes = hours % 10;
    const minutesTens = Math.floor(remainingMinutes / 10);
    const minutesOnes = remainingMinutes % 10;
    const secondsTens = Math.floor(remainingSeconds / 10);
    const secondsOnes = remainingSeconds % 10;
  
    document.getElementById('hoursTens').textContent = hoursTens;
    document.getElementById('hoursOnes').textContent = hoursOnes;
    document.getElementById('minutesTens').textContent = minutesTens;
    document.getElementById('minutesOnes').textContent = minutesOnes;
    document.getElementById('secondsTens').textContent = secondsTens;
    document.getElementById('secondsOnes').textContent = secondsOnes;
  
    counter.textContent = seconds;
  }, 1000);

  
  // Footer auto year
const year = new Date().getFullYear();
document.getElementById('year').textContent = year;
document.getElementById('footer').textContent = `© ${year} Srijan Raj Shakya (Bokshii)`;

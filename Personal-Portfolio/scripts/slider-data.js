// Optional: external JSON-based slide injection (for dynamic data)
// scripts/slider-data.js

const slides = [
  "🏆 <strong>Hackathon Winner</strong> – National 2024",
  "📱 <strong>Built</strong> Full-Stack Mobile App",
  "🌐 <strong>Cloud-Deployed</strong> API System",
  "🤖 <strong>AI Chatbot</strong> with GPT-4 API",
  "📊 <strong>Live Analytics</strong> Dashboard",
  "🔐 <strong>Blockchain</strong> based Voting Dapp",
  "🎮 <strong>GameDev</strong> Unity Multiplayer Project",
];

function loadSliderData() {
  const track = document.getElementById('featuredTrack');
  if (!track || !slides) return;

  slides.forEach(item => {
    const div = document.createElement('div');
    div.className = 'slide';
    div.innerHTML = item;
    track.appendChild(div);
  });
}

window.addEventListener('DOMContentLoaded', loadSliderData);

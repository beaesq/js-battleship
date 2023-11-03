import { startGame, startGameLoop } from "./game";
import './style.css';

window.onload = () => {
  const meta = document.createElement('meta');
  meta.setAttribute('name', 'viewport');
  meta.setAttribute('content', 'width=device-width, initial-scale=1.0');
  document.head.appendChild(meta);
  
  const players = startGame();
  // startGameLoop(players);
}

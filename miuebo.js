window.addEventListener('DOMContentLoaded', (event) => {
    while (document.styleSheets.length) {
        document.styleSheets[0].disabled = true;
        document.head.removeChild(document.styleSheets[0].ownerNode);
    }

    const style = document.createElement('style');
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto:wght@400&display=swap');
        body {
            background-color: #000;
            color: white;
            font-family: 'Roboto', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            text-align: center;
            background-image: url('https://i.ibb.co/cb7jrzP/mussi.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            padding: 20px;
        }
        .reflective-text {
            font-size: 48px;
            animation: breathing-glow 2s infinite ease-in-out;
            color: white;
            font-family: 'Poppins', sans-serif;
        }
        .small-text {
            font-size: 24px;
            color: #777;
            font-family: 'Roboto', sans-serif;
        }
        @keyframes breathing-glow {
            0%, 100% {
                text-shadow: 0 0 8px rgba(255, 255, 255, 0.5),
                0 0 16px rgba(255, 255, 255, 0.5),
                0 0 24px #0ff;
            }
            50% {
                text-shadow: 0 0 20px rgba(255, 255, 255, 0.75),
                0 0 30px rgba(255, 255, 255, 0.75),
                0 0 40px #0ff;
            }
        }
    `;
    document.head.appendChild(style);
    document.body.innerHTML = '';

    const container = document.createElement('div');
    container.className = 'container';
    container.innerHTML = `
        <h1 class="reflective-text">0800 owning</h1>
        <p class="small-text">doxcat.net</p>
    `;
    document.body.appendChild(container);
});

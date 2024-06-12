// /*
// * Author: Dante Villa
// */

// let a = document.getElementById('a');
// let b = document.getElementById('b');

// // First button
// a.addEventListener('mouseenter', function () {
//   let o = this.firstChild.nodeValue;
//   if (o == "No") {
//     this.firstChild.nodeValue = "Si";
//     b.firstChild.nodeValue = "No";
//   }
// });

// // Second button
// b.addEventListener('mouseenter', function () {
//   let o = this.firstChild.nodeValue;
//   if (o == "No") {
//     this.firstChild.nodeValue = "Si";
//     a.firstChild.nodeValue = "No";
//   }
// });

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Globo {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + Math.random() * 100;
            this.radius = Math.random() * 20 + 10;
            this.color = this.getRandomPastelColor();
            this.speed = Math.random() * 2 + 1;
        }

        getRandomPastelColor() {
            const r = Math.floor(Math.random() * 127 + 127);
            const g = Math.floor(Math.random() * 127 + 127);
            const b = Math.floor(Math.random() * 127 + 127);
            return `rgb(${r},${g},${b})`;
        }

        update() {
            this.y -= this.speed;
            if (this.y + this.radius < 0) {
                this.y = canvas.height + this.radius;
                this.x = Math.random() * canvas.width;
                this.color = this.getRandomPastelColor();
            }
        }

        draw() {
            // Dibujar el globo elíptico
            ctx.beginPath();
            ctx.ellipse(this.x, this.y, this.radius, this.radius * 1.3, 0, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }
    }

    let globos = [];
    for (let i = 0; i < 50; i++) {
        globos.push(new Globo());
    }

    function drawBackground() {
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, 'rgba(255, 183, 197, 1)'); // Rosa pastel
        gradient.addColorStop(1, 'rgba(204, 229, 255, 1)'); // Azul pastel
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function animate() {
        drawBackground();
        globos.forEach(globo => {
            globo.update();
            globo.draw();
        });
        requestAnimationFrame(animate);
    }

    animate();

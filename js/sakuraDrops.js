var $canvasEl = $('canvas');
var canvas = $canvasEl[0];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
if (canvas.width < 768) { $canvasEl.css('display', 'none'); }
const ctx = canvas.getContext('2d');
const SAKURA_SUM = 60;
const sakuraArray = [];
class Sakura {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height * 2 - canvas.height;
    this.width = Math.random() * 15 + 25;
    this.height = Math.random() * 12 + 20;
    this.opacity = this.w / 50;
    this.rotate = Math.random();
    this.xSpeed = Math.random() * 2 + 1;
    this.ySpeed = Math.random() + 1.5;
    this.rotateSpeed = Math.random() * 0.02;
  }
  draw() {
    if (this.x > canvas.width || this.y > canvas.height) {
      this.x = -sakuraImg.width;
      this.y = Math.random() * canvas.height * 2 - canvas.height;
      this.rotate = Math.random();
      this.rotateSpeed = Math.random() * 0.02;
      this.xSpeed = Math.random() * 2 + 0.5;
      this.ySpeed = Math.random() + 1;
    }
    ctx.globalAlpha = this.opacity;
    ctx.drawImage(
      sakuraImg,
      this.x,
      this.y,
      this.width * (0.6 + Math.abs(Math.cos(this.rotate)) / 3),
      this.height * (0.8 + Math.abs(Math.sin(this.rotate)) / 5)
    );
  }
  animate() { this.x += this.xSpeed + mouseX * 5; this.y += this.ySpeed + mouseX * 2; this.rotate += this.rotateSpeed; this.draw(); }
}
function render() { ctx.clearRect(0, 0, canvas.width, canvas.height); sakuraArray.forEach((s)=>s.animate()); window.requestAnimationFrame(render); }
const sakuraImg = new Image();
sakuraImg.src = './img/sakura.png';
sakuraImg.addEventListener('load', () => { for (let i=0;i<SAKURA_SUM;i++){ sakuraArray.push(new Sakura()); } render(); });
$(window).on('resize', function () { canvas.width = window.innerWidth; canvas.height = window.innerHeight; });
let mouseX = 0;
function touchHandler(e) { var oe = e.originalEvent || e; var clientX = oe.clientX || (oe.touches && oe.touches[0] && oe.touches[0].clientX); if (clientX != null) mouseX = clientX / window.innerWidth; }
$(window).on('mousemove', touchHandler);
$(window).on('touchmove', touchHandler);
var $closeSakura = $('#closeSakura');
$closeSakura.on('click', function () { if ($canvasEl.css('display') === 'block') { $canvasEl.css('display', 'none'); $closeSakura.html('打开樱花飘落'); } else { $canvasEl.css('display', 'block'); $closeSakura.html('关闭樱花飘落'); } });


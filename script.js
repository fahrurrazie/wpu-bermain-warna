// const button = document.querySelector('btn');

// document.body (sama dengan dibawah)
// const body = document.querySelector('body');

const button = document.querySelector('.btn');
button.addEventListener('click', function () {
  document.body.classList.toggle('biru-muda');
});

const acakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');

acakWarna.appendChild(teksTombol);

// menaruh button setelah class button
button.after(acakWarna);

acakWarna.addEventListener('click', function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');
sMerah.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

sHijau.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});
sBiru.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

document.body.addEventListener('mousemove', function (event) {
  const xPosition = Math.round((event.clientX / window.innerWidth) * 225);
  const yPosition = Math.round((event.clientY / window.innerWidth) * 225);
  document.body.style.backgroundColor = 'rgb(' + xPosition + ',' + yPosition + ',100)';
});

document.getElementById('envelope').addEventListener('click', function() {
    document.getElementById('envelope').classList.add('hidden');
    document.getElementById('question').classList.remove('hidden');
});

document.getElementById('yes').addEventListener('click', function() {
    document.getElementById('question').classList.add('hidden');
    document.getElementById('letter').classList.remove('hidden');
    document.getElementById('music').play();
    document.getElementById('question').style.display = 'none';
});

document.getElementById('no').addEventListener('click', function() {document.getElementById('rejection').classList.remove('hidden');
document.getElementById('question').style.display = 'none'
});

document.getElementById('retry').addEventListener('click', function() {
  document.getElementById('rejection').classList.add('hidden');
  document.getElementById('no').classList.add('hidden');
  document.getElementById('question').style.display = 'initial';
});

document.getElementById('close').addEventListener('click', function() {
  alert('Obrigado por ler a carta!');
  setTimeout(function() {
    location.reload(); // Recarregar a página após aceitar o presente
  }, 500); // Aguardar 1 segundos antes de recarregar a páginal
});

document.getElementById('gift').addEventListener('click', function() {
  document.getElementById('letter').classList.add('hidden');
  document.getElementById('gift-question').classList.remove('hidden');
});

document.getElementById('yes-gift').addEventListener('click', function() {
  document.getElementById('gift').classList.add('hidden');
  document.getElementById('gift-response').classList.remove('hidden');
  document.getElementById('gift-question').style.display = 'none';
});


document.getElementById('no-gift').addEventListener('click', function() {
  alert('Obrigado por ler a carta!');
  setTimeout(function() {
    location.reload(); // Recarregar a página após aceitar o presente
  }, 500); // Aguardar 1 segundos antes de recarregar a páginal
});

document.getElementById('accept-gift').addEventListener('click', function() {
  document.getElementById('gift-question').classList.add('hidden');
    document.getElementById('gift-response').classList.remove('hidden');
  alert("Obrigado por aceitar, o carro chegará nas proximas horas!!!")
  setTimeout(function () {
     location.reload(); // Recarregar a página após aceitar o presente
     }, 500); // Aguardar 1 segundos antes de recarregar a páginal
})

document.getElementById('decline-gift-final').addEventListener('click', function() {
  moveButton();
});

document.getElementById('decline-gift-final').addEventListener('click', function() {
  moveButton();
});

function moveButton() {
  const button = document.getElementById('decline-gift-final');
  const x = Math.floor(Math.random() * 300);
  const y = Math.floor(Math.random() * 300);
  button.style.position = 'absolute';
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
}
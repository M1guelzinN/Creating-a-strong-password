const alerta = document.querySelector('#aviso');

function CreateAPassword() {
  const carac = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&{}[]><?-_.()';
  const passwordLength = 12;
  let password = '';

  for (let r = 0; r < passwordLength; r += 1) {
    const RandomN = Math.floor(Math.random() * carac.length);
    password += carac.substring(RandomN, RandomN + 1);
  }

  document.querySelector('#senha').value = password;
  alerta.innerHTML = `Senha<br><strong>${password}</strong><br> foi copiada`;
}

function copy() {
  const copiar = document.querySelector('#senha').value;
  navigator.clipboard.writeText(copiar);

  alerta.classList.toggle('active');
  setTimeout(() => {
    alerta.classList.toggle('active');
  }, 2000);
}

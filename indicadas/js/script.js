// Ainda sem oficinas indicadas cadastradas.
// Para adicionar, siga o mesmo modelo usado na pasta "credenciadas":
// { nome: "", razao: "", titular: "", doc: "", banco: "", agencia: "", conta: "", tipoConta: "", cnpj: "", pix: "" }
const oficinas = [
  {
    nome: "Oficina Auto Mais Recuperadora",
    razao: "Auto Mais Recuperadora de Veículos LTDA",
    titular: "Auto Mais Recuperadora de Veículos",
    doc: "",
    banco: "Stone (197)",
    agencia: "0001",
    conta: "1884060-3",
    tipoConta: "Conta Corrente",
    cnpj: "45.399.328/0001-60",
    pix: "45.399.328/0001-60"
  },
  {
    nome: "Oficina Autobahn",
    razao: "Autobahn Centro Automotivo LTDA",
    titular: "Aparecida de Fatima da Silva",
    doc: "",
    banco: "Santander",
    agencia: "4108",
    conta: "13.002262-5",
    tipoConta: "Conta Corrente",
    cnpj: "52.841.164/0001-45",
    pix: "52.841.164/0001-45"
  }
];

oficinas.sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));

const iconeCopiar = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
const iconeCheck = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

function campoHtml(label, valor){
  if(!valor) return "";
  return `
    <div class="campo">
      <div class="campo-texto">
        <span class="campo-label">${label}</span>
        <span class="campo-valor">${valor}</span>
      </div>
      <button class="btn-copiar" onclick="copiar(this, '${valor.replace(/'/g, "\\'")}')" title="Copiar">
        ${iconeCopiar}
      </button>
    </div>
  `;
}

function renderCard(o){
  return `
    <div class="card" data-nome="${o.nome.toLowerCase()}">
      <div class="card-top">
        <div>
          <div class="card-nome">${o.nome}</div>
          ${o.razao ? `<div class="card-razao">${o.razao}</div>` : ""}
        </div>
        <span class="banco-badge">${o.banco}</span>
      </div>
      <div class="campos">
        ${campoHtml("Agência", o.agencia)}
        ${campoHtml(o.tipoConta, o.conta)}
        ${campoHtml("CNPJ", o.cnpj)}
        ${campoHtml("PIX", o.pix)}
      </div>
      <div class="titular-linha">Titular: <b>${o.titular}</b>${o.doc ? " — " + o.doc : ""}</div>
    </div>
  `;
}

const grid = document.getElementById('grid');
const contador = document.getElementById('contador');
const vazio = document.getElementById('vazio');
const busca = document.getElementById('busca');

function renderizar(lista){
  grid.innerHTML = lista.map(renderCard).join('');
  vazio.style.display = lista.length ? 'none' : 'block';
  contador.textContent = lista.length + (lista.length === 1 ? ' oficina' : ' oficinas');
}

busca.addEventListener('input', () => {
  const termo = busca.value.trim().toLowerCase();
  const filtradas = oficinas.filter(o =>
    o.nome.toLowerCase().includes(termo) || (o.razao && o.razao.toLowerCase().includes(termo))
  );
  renderizar(filtradas);
});

function copiar(btn, valor){
  navigator.clipboard.writeText(valor).then(() => {
    btn.innerHTML = iconeCheck;
    btn.classList.add('copiado');
    setTimeout(() => {
      btn.innerHTML = iconeCopiar;
      btn.classList.remove('copiado');
    }, 1400);
  }).catch(() => {
    const temp = document.createElement('textarea');
    temp.value = valor;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
    btn.innerHTML = iconeCheck;
    btn.classList.add('copiado');
    setTimeout(() => {
      btn.innerHTML = iconeCopiar;
      btn.classList.remove('copiado');
    }, 1400);
  });
}

renderizar(oficinas);

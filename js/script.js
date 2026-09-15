const oficinas = [
  {
    nome: "Castor Motos",
    razao: "",
    titular: "Rogério de Oliveira Gamaro",
    doc: "CPF: 005.835.127-20",
    banco: "Itaú",
    agencia: "6696",
    conta: "73138-6",
    tipoConta: "Conta Corrente",
    cnpj: "12.328.205/0001-80",
    pix: "(21) 98747-1325"
  },
  {
    nome: "DG Motos",
    razao: "D.G Motocraft LTDA",
    titular: "Douglas Silva Braga",
    doc: "",
    banco: "PagSeguro",
    agencia: "0001",
    conta: "16571741-4",
    tipoConta: "Conta Corrente",
    cnpj: "36.925.713/0001-03",
    pix: "dgrecuperadora@gmail.com"
  },
  {
    nome: "Oficina Ediglei",
    razao: "Trajano Motopeças e Serviços LTDA",
    titular: "Trajano Motopeças e Serviços LTDA",
    doc: "",
    banco: "Mercado Pago",
    agencia: "0001",
    conta: "7887919392-9",
    tipoConta: "Conta Corrente",
    cnpj: "31.318.398/0001-32",
    pix: "(21) 96599-2523"
  },
  {
    nome: "F.Guerreiro",
    razao: "",
    titular: "Fernando Oliveira Soares",
    doc: "",
    banco: "Itaú",
    agencia: "6148",
    conta: "93638-5",
    tipoConta: "Conta Corrente",
    cnpj: "25.217.301/0001-00",
    pix: "25.217.301/0001-00"
  },
  {
    nome: "Oficina Fuscauto",
    razao: "Vitor Alex dos Anjos Silva - Peças e Oficina Mecânica",
    titular: "Vitor Alex dos Anjos Silva",
    doc: "",
    banco: "Banco do Brasil",
    agencia: "5722-3",
    conta: "169528",
    tipoConta: "Conta Corrente",
    cnpj: "23.568.616/0001-69",
    pix: "23.568.616/0001-69"
  },
  {
    nome: "Oficina RBP",
    razao: "RBP Funilaria e Pintura LTDA",
    titular: "RBP Funilaria e Pintura",
    doc: "",
    banco: "Itaú",
    agencia: "2582",
    conta: "05945-3",
    tipoConta: "Conta Corrente",
    cnpj: "27.075.421/0001-38",
    pix: "27.075.421/0001-38"
  },
  {
    nome: "Oficina Recami",
    razao: "Nova Recami 2001 Auto Mecânica LTDA",
    titular: "Nova Recami 2001 Auto Mecânica LTDA",
    doc: "",
    banco: "Itaú (341)",
    agencia: "1282",
    conta: "65627-9",
    tipoConta: "Conta Corrente",
    cnpj: "00.836.024/0001-85",
    pix: "00.836.024/0001-85"
  },
  {
    nome: "Oficina Recc",
    razao: "Recc Centro Automotivo LTDA",
    titular: "Oficina Recc Centro Automotivo LTDA",
    doc: "",
    banco: "Caixa",
    agencia: "4655 (OP: 003)",
    conta: "00001031-3",
    tipoConta: "Conta Corrente",
    cnpj: "30.547.895/0001-40",
    pix: "30.547.895/0001-40"
  },
  {
    nome: "Oficina Retocar",
    razao: "Reboque Rio Assistência 24 Horas e Reparação Automotiva LTDA",
    titular: "Reboque Rio Assistência 24 Horas e Reparação Automotiva LTDA",
    doc: "",
    banco: "Santander",
    agencia: "0226",
    conta: "13007122-8",
    tipoConta: "Conta Corrente",
    cnpj: "56.069.342/0001-12",
    pix: "56.069.342/0001-12"
  },
  {
    nome: "Oficina RRX",
    razao: "RRX Assistência e Comércio de Veículos LTDA (RRX Rastreadores)",
    titular: "Grupo RRX Ass e Com de V LTDA",
    doc: "",
    banco: "Itaú",
    agencia: "1282",
    conta: "19356-2",
    tipoConta: "Conta Corrente",
    cnpj: "20.958.402/0001-00",
    pix: "20.958.402/0001-00"
  },
  {
    nome: "Oficina Tecauto",
    razao: "Sem CNPJ",
    titular: "Luiz Carlos Fernandes Santos Vieira",
    doc: "CPF: 025.520.617-88",
    banco: "Caixa",
    agencia: "0200",
    conta: "00029303-1",
    tipoConta: "Conta Poupança",
    cnpj: "",
    pix: "025.520.617-88"
  },
  {
    nome: "Oficina Retocart de Sarzedo",
    razao: "56.899.978 Stephanie Reis",
    titular: "Stephanie Reis",
    doc: "",
    banco: "Sicredi Região Centro RS/MG",
    agencia: "0434",
    conta: "22353-5",
    tipoConta: "Conta Corrente",
    cnpj: "56.899.978/0001-91",
    pix: "56.899.978/0001-91"
  },
  {
    nome: "Oficina Rikcar de Sarzedo",
    razao: "Pablo Luis Pereira de Paula 14092541600",
    titular: "Pablo Luis Pereira de Paula",
    doc: "",
    banco: "Nubank",
    agencia: "0001",
    conta: "72850175-7",
    tipoConta: "Conta Corrente",
    cnpj: "36.746.946/0001-49",
    pix: "36.746.946/0001-49"
  },
  {
    nome: "Oficina Stylus Car de Sarzedo",
    razao: "50.385.725 Jose Ricardo de Freitas",
    titular: "José Ricardo de Freitas",
    doc: "",
    banco: "Santander",
    agencia: "3058",
    conta: "13007905-7",
    tipoConta: "Conta Corrente",
    cnpj: "50.385.725/0001-13",
    pix: "50.385.725/0001-13"
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

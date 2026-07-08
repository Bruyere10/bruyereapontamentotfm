const atividadesDisponiveis = [
    "Troca de motor N4/ N3 em veículo",
    "Troca de motor Diesel 2.2 KP1",
    "Troca de motor Diesel 2.2 Comander / Toro / RampageAC",
    "Troca de motor T3 / T4",
    "Revisão motor veículo",
    "Pesagem de óleo quente",
    "Check list veículo 0Km",
    "Checklist veículo Usado",
    "Check list Ducato e K0",
    "Troca de componente do motor em veículo (Front Cover, corrente, VVT...)",
    "Troca de catalisador em veículos aspirados",
    "Troca de catalisador em veículos turbo Fiat",
    "Troca de catalisador em veículo Peugeot e 281",
    "Instrumentação de catalisador veículo",
    "Troca de catalisador Diesel veículo",
    "Troca de turbina Diesel veículo",
    "Troca de turbina T3 e T4 veículo",
    "Troca de turbina GME veículo",
    "Revisão de motor em cela",
    "Troca de velas em veículo",
    "Troca de motor em carrinho preparado aspirado e turbo",
    "Preparação de carrinho para rodagem em cela.(Novo)",
    "Troca de motor GME veículo",
    "Motor controle total",
    "Motor controle parcial",
    "Atualização de componentes",
    "Desmontagem fim de prova aspirado e turbo",
    "Desmontagem fim de prova turbo GME, diesel e EC5",
    "Instrumentação de cabeçote (Incoder)",
    "Instrumentação de turbina",
    "Troca de cabeçote",
    "Troca de frontcover",
    "Troca de motor Start Cart",
    "Troca de sensores indicom na cela turbo",
    "Troca de sensores indicom aspirado",
    "Troca de bicos e bomba em veículo",
    "Benchmarking Escaneamento 3D",
    "PowerBook Motor Benchmarking",
    "PowerBook Transmissão Benchmarking",
    "PowerBook Eletrificados H.V Benchmarking",
    "PowerBook Sistemas Benchmarking",
    "Preparação Workshop Motores/Transmissão/Eletrificação/Sistemas Benchmarking",
    "Montagem Workshop Motores/Transmissão/Eletrificação/Sistemas Benchmarking",
    "Suporte técnico Workshop Motores/Transmissão/Eletrificação/Sistemas Benchmarking",
    "Desmontagem Workshop Motores/Transmissão/Eletrificação/Sistemas Benchmarking",
    "Suporte técnico em apresentações Workshop Welcome Benchmarking",
    "Checklist veículo Benchmarking",
    "Levar e Buscar carro Benchmarking locadora/concessionária",
    "Movimentar veículos Benchmarking Oficina/Benchmarking veículos/Pátio",
    "Diagnose em veículos Benchmarking",
    "Retirada de bateria H.V veículos Benchmarking",
    "Desenergização veículos híbridos",
    "Outros - Atividade rápida",
    "Outros - Atividade curta",
    "Outros - Atividade média",
    "Outros - Atividade longa",
    "Alinhamento de motor em cela",
    "TFM Cancelada"
];

const btnAdd = document.querySelector(".btn-add");
const btnSalvar = document.querySelector(".btn-salvar");
const btnBuscar = document.querySelector(".btn-buscar");
const btnAbrirSugestao = document.querySelector(".btn-abrir-sugestao");
const btnSugerirAtividade = document.querySelector(".btn-sugerir-atividade");
const form = document.getElementById("form-apontamento");
const container = document.getElementById("atividades-lista");
const detalhesContainer = document.getElementById("detalhes-lista");
const buscaTfmInput = document.getElementById("busca-tfm");
const sugestaoAtividadeInput = document.getElementById("sugestao-atividade");
const sugestaoObservacaoInput = document.getElementById("sugestao-observacao");
const resultadoBusca = document.getElementById("resultado-busca");
const modalTfm = document.getElementById("modal-tfm");
const modalTfmConteudo = document.getElementById("modal-tfm-conteudo");
const modalSugestao = document.getElementById("modal-sugestao");
const modalAtividade = document.getElementById("modal-atividade");
const modalHelp = document.getElementById("modal-help");
const btnHelp = document.querySelector(".btn-help");
const btnConfirmarAtividade = document.querySelector(".btn-confirmar-atividade");
const matriculaInput = document.getElementById("matricula");
const modalAtividadeInput = document.getElementById("modal-atividade-input");
const modalHorasInput = document.getElementById("modal-horas-input");
const modalObservacaoInput = document.getElementById("modal-observacao-input");
const feedbackGlobal = document.getElementById("feedback-global");
const resumoAtividades = document.getElementById("resumo-atividades");
const resumoSalvos = document.getElementById("resumo-salvos");
const historicoLista = document.getElementById("historico-lista");
const HISTORICO_CHAVE = "stellantisHistoricoApontamentos";
const LIMITE_HISTORICO = 2;
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbycpTr1Vj5nCByX2gYKvaXnhw7EiBUYqlnRq7ClSoqr2ZNBNvAUqvW2br6ksyAJDcxO/exec";
let resumoPlanilhaCarregado = false;
const colaboradores = [
    { matricula: "87033", nome: "Leonel Barros Pereira Da Silva" },
    { matricula: "61449", nome: "Ailton Dos Reis Santana" },
    { matricula: "61618", nome: "Airton Fonseca do Nascimento" },
    { matricula: "90079", nome: "Albert de Almeida Libério" },
    { matricula: "105741", nome: "Caio Resende Soares" },
    { matricula: "61526", nome: "Cláudio Roberto Miranda" },
    { matricula: "61461", nome: "Cleiton De Souza" },
    { matricula: "61221", nome: "Ecelson Miranda" },
    { matricula: "61604", nome: "Edilson Ribeiro de Andrade" },
    { matricula: "81531", nome: "Fabio Henrique Alves Ventura" },
    { matricula: "61134", nome: "Franklin de Jesus Souza" },
    { matricula: "70980", nome: "Geraldo Marçal Paiva" },
    { matricula: "60738", nome: "Gustavo da Silva Amaral" },
    { matricula: "62011", nome: "João Paulo de Rezende Trindade" },
    { matricula: "83661", nome: "José Edson Martins Coelho" },
    { matricula: "91542", nome: "José Egídio Rocha" },
    { matricula: "60884", nome: "José Roberto Souza Franco" },
    { matricula: "91541", nome: "Paulo Roberto Ferreira" },
    { matricula: "63277", nome: "Renato Fagner Foureaux" },
    { matricula: "61313", nome: "Renis Mendes Goulart" },
    { matricula: "66642", nome: "Ricardo da Silva Matos" },
    { matricula: "61834", nome: "Roberto Carlos Vieira Martins" },
    { matricula: "60551", nome: "Rodolfo Ribeiro Martins" },
    { matricula: "66647", nome: "Romeu Malagoli dos Santos" },
    { matricula: "61091", nome: "Sebastião Dirino Correia" },
    { matricula: "61367", nome: "Sueimer Batista Pereira" },
    { matricula: "61938", nome: "Wender Bortoloto da Costa" },
    { matricula: "61124", nome: "Valdemi Amancio Do Nascimento" },
    { matricula: "215640", nome: "Renato Basílio dos Santos Júnior" },
    { matricula: "208408", nome: "Rafael da Silva Moreira" }
];
const colaboradoresDisponiveis = colaboradores.map(({ nome }) => nome);

function normalizarTexto(texto) {
    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

function fecharSugestoes() {
    document.querySelectorAll(".atividade-sugestoes").forEach((lista) => {
        lista.hidden = true;
        lista.innerHTML = "";
    });
}

function mostrarFeedback(mensagem, tipo = "sucesso") {
    feedbackGlobal.hidden = false;
    feedbackGlobal.className = `feedback-global ${tipo}`;
    feedbackGlobal.textContent = mensagem;
    feedbackGlobal.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function limparFeedback() {
    feedbackGlobal.hidden = true;
    feedbackGlobal.textContent = "";
}

function marcarCampo(input, invalido) {
    input.closest(".input-icon")?.classList.toggle("campo-invalido", invalido);
}

function limitarParaNumeros(input, limite) {
    input.value = input.value.replace(/\D/g, "").slice(0, limite);
}

function obterHistorico() {
    try {
        return JSON.parse(localStorage.getItem(HISTORICO_CHAVE)) || [];
    } catch (erro) {
        return [];
    }
}

function salvarHistorico(item) {
    const historico = obterHistorico();
    const novosItens = Array.isArray(item) ? item : [item];
    const atualizado = [...novosItens, ...historico].slice(0, LIMITE_HISTORICO);
    localStorage.setItem(HISTORICO_CHAVE, JSON.stringify(atualizado));
}

function configurarDataAtual() {
    const dataInput = document.getElementById("data");

    if (!dataInput.value) {
        dataInput.value = new Date().toISOString().slice(0, 10);
    }
}

function calcularTotalHoras() {
    return Array.from(document.querySelectorAll(".horas-input"))
        .reduce((total, input) => total + Number(input.value || 0), 0);
}

function atualizarResumo() {
    if (resumoPlanilhaCarregado) {
        return;
    }

    resumoAtividades.textContent = "...";
    resumoSalvos.textContent = "-";
}

async function carregarResumoPlanilha() {
    try {
        const resposta = await fetch(`${SCRIPT_URL}?acao=resumoGeral`);

        if (!resposta.ok) {
            throw new Error("Erro ao consultar resumo da planilha.");
        }

        const dados = await resposta.json();

        if (!dados.sucesso) {
            throw new Error(dados.erro || "Erro ao carregar resumo da planilha.");
        }

        resumoPlanilhaCarregado = true;
        resumoAtividades.textContent = Number(dados.totalAtividades || 0).toLocaleString("pt-BR");
        resumoSalvos.textContent = Number(dados.totalTfms || 0).toLocaleString("pt-BR");
    } catch (erro) {
        resumoPlanilhaCarregado = false;
        resumoAtividades.textContent = "-";
        resumoSalvos.textContent = "-";
        console.error(erro);
    }
}

function renderizarHistorico(historico = obterHistorico()) {
    historicoLista.innerHTML = "";

    if (historico.length === 0) {
        const vazio = document.createElement("p");
        vazio.className = "historico-vazio";
        vazio.textContent = "Nenhuma atividade encontrada na planilha ainda.";
        historicoLista.appendChild(vazio);
        atualizarResumo();
        return;
    }

    historico.slice(0, LIMITE_HISTORICO).forEach((item) => {
        const registro = document.createElement("article");
        const info = document.createElement("div");
        const atividade = document.createElement("strong");
        const detalhes = document.createElement("span");
        const tfm = document.createElement("span");
        const horas = document.createElement("span");

        registro.className = "historico-item";
        atividade.textContent = item.atividade || `Registro anterior com ${item.atividades || 1} atividade(s)`;
        detalhes.textContent = [item.nome, formatarData(item.data)].filter(Boolean).join(" - ");
        tfm.textContent = `TFM ${item.tfm}`;
        horas.textContent = `${item.horas}h`;

        info.appendChild(atividade);
        info.appendChild(detalhes);
        registro.appendChild(info);
        registro.appendChild(tfm);
        registro.appendChild(horas);
        historicoLista.appendChild(registro);
    });

    atualizarResumo();
}

async function carregarHistoricoPlanilha() {
    try {
        const resposta = await fetch(`${SCRIPT_URL}?acao=historicoRecentes&limite=${LIMITE_HISTORICO}`);

        if (!resposta.ok) {
            throw new Error("Erro ao consultar histórico da planilha.");
        }

        const dados = await resposta.json();

        if (!dados.sucesso) {
            throw new Error(dados.erro || "Erro ao carregar histórico da planilha.");
        }

        renderizarHistorico(Array.isArray(dados.historico) ? dados.historico : []);
    } catch (erro) {
        console.error(erro);
        renderizarHistorico();
    }
}

function renumerarAtividades() {
    document.querySelectorAll(".detalhes-item").forEach((item, index) => {
        const indice = index + 1;
        item.querySelector(".bloco-numero").textContent = String(indice).padStart(2, "0");
        item.querySelector(".bloco-cabecalho strong").textContent = `Atividade realizada ${indice}`;
    });
    atualizarResumo();
}

function buscarColaboradorPorNome(nome) {
    const nomeNormalizado = normalizarTexto(nome.trim());
    return colaboradores.find((colaborador) => normalizarTexto(colaborador.nome) === nomeNormalizado);
}

function atualizarMatriculaPorNome(nome) {
    const colaborador = buscarColaboradorPorNome(nome);
    matriculaInput.value = colaborador ? colaborador.matricula : "";
}

function mostrarSugestoes(input, opcoes, aoSelecionar) {
    const wrapper = input.closest(".autocomplete-wrapper");
    const lista = wrapper.querySelector(".atividade-sugestoes");
    const busca = normalizarTexto(input.value.trim());
    const sugestoes = opcoes
        .filter((opcao) => normalizarTexto(opcao).includes(busca));

    lista.innerHTML = "";

    if (sugestoes.length === 0) {
        lista.hidden = true;
        return;
    }

    sugestoes.forEach((opcao) => {
        const botao = document.createElement("button");
        botao.type = "button";
        botao.className = "atividade-sugestao";
        botao.textContent = opcao;

        botao.addEventListener("mousedown", () => {
            input.value = opcao;
            if (aoSelecionar) {
                aoSelecionar(opcao);
            }
            fecharSugestoes();
        });

        lista.appendChild(botao);
    });

    lista.hidden = false;
}

function configurarAutocomplete(input, opcoes, aoSelecionar, aoDigitar) {
    input.addEventListener("input", () => {
        mostrarSugestoes(input, opcoes, aoSelecionar);
        if (aoDigitar) {
            aoDigitar(input.value);
        }
    });
    input.addEventListener("focus", () => mostrarSugestoes(input, opcoes, aoSelecionar));
}

function configurarDocumento(input) {
    const nomeArquivo = input.closest(".input-file").querySelector(".arquivo-nome");

    input.addEventListener("change", () => {
        nomeArquivo.textContent = input.files[0]?.name || "Nenhum arquivo selecionado";
    });
}

function criarDetalhesItem(indice) {
    const novoDetalhe = document.createElement("div");
    novoDetalhe.classList.add("detalhes-item", "bloco-item");
    const numeroFormatado = String(indice).padStart(2, "0");

    novoDetalhe.innerHTML = `
        <div class="bloco-cabecalho">
            <span class="bloco-numero">${numeroFormatado}</span>
            <div class="bloco-cabecalho-titulo">
                <strong>Atividade realizada ${indice}</strong>
            </div>
            <button type="button" class="btn-remover-atividade" aria-label="Remover atividade ${indice}">
                <i class="bi bi-trash3"></i>
            </button>
        </div>

        <div class="detalhes-grid">
            <div class="campo campo-inteiro">
                <label for="atividade-${indice}">Atividade Realizada</label>
                <div class="autocomplete-wrapper">
                    <div class="input-icon">
                        <i class="bi bi-list-ul"></i>
                        <input id="atividade-${indice}" name="atividade[]" type="text" class="atividade-input" placeholder="Digite ou selecione a atividade" autocomplete="off" required>
                    </div>
                    <div class="atividade-sugestoes" hidden></div>
                </div>
            </div>

            <div class="campo campo-inteiro">
                <label for="horas-${indice}">Horas Trabalhadas</label>
                <div class="input-icon">
                    <i class="bi bi-clock-history"></i>
                    <input id="horas-${indice}" name="horas[]" type="number" class="horas-input" min="0.1" max="24" step="0.1" placeholder="Ex: 2.5" required>
                </div>
            </div>

            <div class="campo observacao">
                <label for="observacao-${indice}">Observação da atividade ${indice}</label>
                <div class="input-icon">
                    <i class="bi bi-chat-left-text"></i>
                    <input id="observacao-${indice}" name="observacao[]" type="text" class="observacao-input" placeholder="Digite alguma observação sobre a atividade">
                </div>
            </div>

        </div>
    `;

    return novoDetalhe;
}

function converterArquivoParaBase64(arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();

        leitor.onload = () => resolve(leitor.result.split(",")[1]);
        leitor.onerror = () => reject(leitor.error);
        leitor.readAsDataURL(arquivo);
    });
}

async function prepararDocumento(input) {
    const arquivo = input.files[0];

    if (!arquivo) {
        return null;
    }

    if (arquivo.type !== "application/pdf") {
        throw new Error("Anexe apenas arquivos PDF.");
    }

    if (arquivo.size > 5 * 1024 * 1024) {
        throw new Error("O PDF deve ter no máximo 5 MB.");
    }

    return {
        nome: arquivo.name,
        tipo: arquivo.type,
        tamanho: arquivo.size,
        conteudoBase64: await converterArquivoParaBase64(arquivo)
    };
}

async function coletarAtividades() {
    const atividades = Array.from(document.querySelectorAll(".detalhes-item")).map((item) => ({
        atividade: item.querySelector(".atividade-input").value,
        horas: item.querySelector(".horas-input").value,
        observacao: item.querySelector(".observacao-input").value
    }));

    return atividades.filter(({ atividade, horas }) => atividade && horas);
}

function alterarEstadoSalvando(estaSalvando) {
    const icone = btnSalvar.querySelector("i");
    const texto = btnSalvar.querySelector("span");

    btnSalvar.disabled = estaSalvando;
    btnSalvar.classList.toggle("salvando", estaSalvando);
    icone.className = estaSalvando ? "bi bi-gear-fill" : "bi bi-floppy";
    texto.textContent = estaSalvando ? "Salvando..." : "Salvar Apontamento";
}

function alterarEstadoBuscando(estaBuscando) {
    const icone = btnBuscar.querySelector("i");
    const texto = btnBuscar.querySelector("span");

    btnBuscar.disabled = estaBuscando;
    btnBuscar.classList.toggle("salvando", estaBuscando);
    icone.className = estaBuscando ? "bi bi-gear-fill" : "bi bi-search";
    texto.textContent = estaBuscando ? "Buscando..." : "Buscar TFM";
}

function alterarEstadoSugestao(estaEnviando) {
    const icone = btnSugerirAtividade.querySelector("i");
    const texto = btnSugerirAtividade.querySelector("span");

    btnSugerirAtividade.disabled = estaEnviando;
    btnSugerirAtividade.classList.toggle("salvando", estaEnviando);
    icone.className = estaEnviando ? "bi bi-gear-fill" : "bi bi-send";
    texto.textContent = estaEnviando ? "Enviando..." : "Enviar sugestão";
}

function mostrarResultadoBusca(conteudo, tipo = "sucesso") {
    const cardHistorico = document.querySelector(".card-historico");

    resultadoBusca.hidden = false;
    resultadoBusca.className = `resultado-busca resultado-busca-${tipo}`;
    resultadoBusca.closest(".card-busca").classList.add("tem-resultado-busca");
    cardHistorico.style.position = "relative";
    cardHistorico.style.top = "86px";
    resultadoBusca.innerHTML = "";
    resultadoBusca.appendChild(conteudo);
}

function limparResultadoBusca() {
    const cardHistorico = document.querySelector(".card-historico");

    resultadoBusca.hidden = true;
    resultadoBusca.closest(".card-busca").classList.remove("tem-resultado-busca");
    cardHistorico.style.position = "";
    cardHistorico.style.top = "";
    resultadoBusca.innerHTML = "";
}

function abrirModalTfm(conteudo) {
    modalTfmConteudo.innerHTML = "";
    modalTfmConteudo.appendChild(conteudo);
    modalTfm.hidden = false;
    document.body.classList.add("modal-aberto");
}

function fecharModalTfm() {
    modalTfm.hidden = true;
    modalTfmConteudo.innerHTML = "";
    document.body.classList.remove("modal-aberto");
}

function abrirModalHelp() {
    modalHelp.hidden = false;
    document.body.classList.add("modal-aberto");
}

function fecharModalHelp() {
    modalHelp.hidden = true;
    document.body.classList.remove("modal-aberto");
}

function abrirModalSugestao() {
    modalSugestao.hidden = false;
    document.body.classList.add("modal-aberto");
    sugestaoAtividadeInput.focus();
}

function fecharModalSugestao() {
    modalSugestao.hidden = true;
    document.body.classList.remove("modal-aberto");
}

function abrirModalAtividade() {
    modalAtividade.hidden = false;
    document.body.classList.add("modal-aberto");
    modalAtividadeInput.focus();
}

function fecharModalAtividade() {
    modalAtividade.hidden = true;
    modalAtividadeInput.value = "";
    modalHorasInput.value = "";
    modalObservacaoInput.value = "";
    marcarCampo(modalAtividadeInput, false);
    marcarCampo(modalHorasInput, false);
    fecharSugestoes();
    document.body.classList.remove("modal-aberto");
}

function adicionarAtividadeDoModal() {
    const atividade = modalAtividadeInput.value.trim();
    const horas = Number(modalHorasInput.value);

    marcarCampo(modalAtividadeInput, !atividade);
    marcarCampo(modalHorasInput, !modalHorasInput.value || horas <= 0);

    if (!atividade || !modalHorasInput.value || horas <= 0) {
        mostrarFeedback("Informe a atividade e as horas antes de adicionar.", "erro");
        return;
    }

    const indice = document.querySelectorAll(".detalhes-item").length + 1;
    const novoDetalhe = criarDetalhesItem(indice);

    novoDetalhe.querySelector(".atividade-input").value = atividade;
    novoDetalhe.querySelector(".horas-input").value = modalHorasInput.value;
    novoDetalhe.querySelector(".observacao-input").value = modalObservacaoInput.value.trim();
    detalhesContainer.appendChild(novoDetalhe);
    configurarAutocomplete(novoDetalhe.querySelector(".atividade-input"), atividadesDisponiveis);
    fecharModalAtividade();
    limparFeedback();
    atualizarResumo();
}

function formatarValor(valor) {
    return valor || "-";
}

function formatarData(valor) {
    if (!valor) {
        return "-";
    }

    const data = new Date(valor);

    if (Number.isNaN(data.getTime())) {
        return valor;
    }

    return data.toLocaleDateString("pt-BR", { timeZone: "UTC" });
}

function criarLinhaResumo(rotulo, valor) {
    const item = document.createElement("div");
    item.className = "resultado-info-item";
    item.innerHTML = `<span>${rotulo}</span><strong>${formatarValor(valor)}</strong>`;
    return item;
}

function criarResultadoTfm(dados) {
    const conteudo = document.createElement("div");
    conteudo.className = "resultado-tfm";
    const registros = Array.isArray(dados.registros) ? dados.registros : [];

    const cabecalho = document.createElement("div");
    cabecalho.className = "resultado-tfm-cabecalho";
    cabecalho.innerHTML = `
        <div>
            <strong>TFM ${dados.tfm}</strong>
            <span>${formatarValor(dados.nome)}</span>
        </div>
    `;

    if (dados.urlDocumento) {
        const link = document.createElement("a");
        link.className = "btn-abrir-pdf";
        link.href = dados.urlDocumento;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.innerHTML = `<i class="bi bi-box-arrow-up-right"></i> Abrir PDF`;
        cabecalho.appendChild(link);
    }

    const resumo = document.createElement("div");
    resumo.className = "resultado-info-grid";
    resumo.appendChild(criarLinhaResumo("Data", formatarData(dados.data)));
    resumo.appendChild(criarLinhaResumo("Matrícula", dados.matricula));
    resumo.appendChild(criarLinhaResumo("Turno", dados.turno));
    resumo.appendChild(criarLinhaResumo("Projeto", dados.projeto));
    resumo.appendChild(criarLinhaResumo("PDF", dados.nomeDocumento || "Sem PDF anexado"));

    const atividades = document.createElement("div");
    atividades.className = "resultado-atividades";

    const tituloAtividades = document.createElement("strong");
    tituloAtividades.textContent = "Atividades registradas";
    atividades.appendChild(tituloAtividades);

    registros.forEach((registro) => {
        const atividade = document.createElement("div");
        atividade.className = "resultado-atividade-item";
        atividade.innerHTML = `
            <div>
                <span>Atividade</span>
                <strong>${formatarValor(registro.atividade)}</strong>
            </div>
            <div>
                <span>Horas</span>
                <strong>${formatarValor(registro.horas)}</strong>
            </div>
            <div>
                <span>Observação</span>
                <strong>${formatarValor(registro.observacao)}</strong>
            </div>
        `;
        atividades.appendChild(atividade);
    });

    conteudo.appendChild(cabecalho);
    conteudo.appendChild(resumo);
    conteudo.appendChild(atividades);

    return conteudo;
}

async function buscarDocumentoTfm() {
    const tfm = buscaTfmInput.value.trim();

    if (!/^[0-9]{6}$/.test(tfm)) {
        const mensagem = document.createElement("p");
        mensagem.textContent = "Digite um TFM com 6 números para pesquisar.";
        mostrarResultadoBusca(mensagem, "erro");
        return;
    }

    try {
        alterarEstadoBuscando(true);

        const resposta = await fetch(`${SCRIPT_URL}?acao=buscarTfm&tfm=${encodeURIComponent(tfm)}`);

        if (!resposta.ok) {
            throw new Error("Erro ao consultar o Apps Script.");
        }

        const dados = await resposta.json();

        if (!dados.encontrado) {
            const mensagem = document.createElement("p");
            mensagem.textContent = "Nenhum registro encontrado para esse TFM.";
            mostrarResultadoBusca(mensagem, "aviso");
            return;
        }

        limparResultadoBusca();
        abrirModalTfm(criarResultadoTfm(dados));
    } catch (erro) {
        const mensagem = document.createElement("p");
        mensagem.textContent = "Erro ao buscar o TFM. Verifique se o Apps Script foi publicado corretamente.";
        mostrarResultadoBusca(mensagem, "erro");
        console.error(erro);
    } finally {
        alterarEstadoBuscando(false);
    }
}

async function enviarSugestaoAtividade() {
    const atividade = sugestaoAtividadeInput.value.trim();
    const observacao = sugestaoObservacaoInput.value.trim();

    if (atividade.length < 3) {
        mostrarFeedback("Digite uma atividade sugerida antes de enviar.", "erro");
        sugestaoAtividadeInput.focus();
        return;
    }

    try {
        alterarEstadoSugestao(true);

        const dados = {
            acao: "sugerirAtividade",
            atividade,
            observacao,
            sugestaoAtividade: atividade,
            observacaoAtividade: observacao,
            colunaAtividade: "E",
            colunaObservacao: "F",
            dataSugestao: new Date().toISOString(),
            nome: document.getElementById("nome").value,
            matricula: document.getElementById("matricula").value
        };

        const resposta = await fetch(SCRIPT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify(dados)
        });

        if (!resposta.ok) {
            throw new Error("Erro ao enviar a sugestão para o Apps Script.");
        }

        const resultado = await resposta.json();

        if (!resultado.sucesso) {
            throw new Error(resultado.erro || "Erro ao salvar sugestão.");
        }

        mostrarFeedback("Sugestão enviada com sucesso!", "sucesso");
        sugestaoAtividadeInput.value = "";
        sugestaoObservacaoInput.value = "";
        fecharModalSugestao();
    } catch (erro) {
        mostrarFeedback(erro.message || "Erro ao enviar sugestão!", "erro");
        console.error(erro);
    } finally {
        alterarEstadoSugestao(false);
    }
}

function validarFormulario() {
    const tfmInput = document.getElementById("tfm");
    const horasInputs = Array.from(document.querySelectorAll(".horas-input"));
    let valido = form.checkValidity();

    marcarCampo(tfmInput, !/^[0-9]{6}$/.test(tfmInput.value.trim()));

    horasInputs.forEach((input) => {
        const horas = Number(input.value);
        const invalido = !input.value || horas <= 0;
        marcarCampo(input, invalido);
        if (invalido) {
            valido = false;
        }
    });

    if (!/^[0-9]{6}$/.test(tfmInput.value.trim())) {
        valido = false;
        mostrarFeedback("Informe um número de TFM com exatamente 6 números.", "erro");
        tfmInput.focus();
        return false;
    }

    if (!valido) {
        const primeiroInvalido = form.querySelector(":invalid") || document.querySelector(".campo-invalido input");
        mostrarFeedback("Revise os campos obrigatórios antes de salvar.", "erro");
        if (primeiroInvalido) {
            primeiroInvalido.focus();
        }
        form.reportValidity();
    }

    return valido;
}

document.querySelectorAll(".atividade-input").forEach((input) => configurarAutocomplete(input, atividadesDisponiveis));
configurarAutocomplete(modalAtividadeInput, atividadesDisponiveis);
document.querySelectorAll(".colaborador-input").forEach((input) => configurarAutocomplete(input, colaboradoresDisponiveis, atualizarMatriculaPorNome, atualizarMatriculaPorNome));
document.querySelectorAll(".documento-input").forEach(configurarDocumento);

document.addEventListener("mousedown", (event) => {
    if (!event.target.closest(".autocomplete-wrapper")) {
        fecharSugestoes();
    }
});

btnAdd.addEventListener("click", () => {
    abrirModalAtividade();
});

detalhesContainer.addEventListener("click", (event) => {
    const botaoRemover = event.target.closest(".btn-remover-atividade");

    if (!botaoRemover) {
        return;
    }

    botaoRemover.closest(".detalhes-item").remove();
    renumerarAtividades();
});

btnBuscar.addEventListener("click", buscarDocumentoTfm);
btnAbrirSugestao.addEventListener("click", abrirModalSugestao);
btnSugerirAtividade.addEventListener("click", enviarSugestaoAtividade);
btnConfirmarAtividade.addEventListener("click", adicionarAtividadeDoModal);
buscaTfmInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        buscarDocumentoTfm();
    }
});

sugestaoAtividadeInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        enviarSugestaoAtividade();
    }
});

modalAtividade.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        adicionarAtividadeDoModal();
    }
});

document.querySelectorAll("[data-fechar-modal]").forEach((elemento) => {
    elemento.addEventListener("click", fecharModalTfm);
});

document.querySelectorAll("[data-fechar-help]").forEach((elemento) => {
    elemento.addEventListener("click", fecharModalHelp);
});

document.querySelectorAll("[data-fechar-sugestao]").forEach((elemento) => {
    elemento.addEventListener("click", fecharModalSugestao);
});

document.querySelectorAll("[data-fechar-atividade]").forEach((elemento) => {
    elemento.addEventListener("click", fecharModalAtividade);
});

btnHelp.addEventListener("click", abrirModalHelp);

document.addEventListener("input", (event) => {
    if (event.target.matches(".horas-input, #tfm")) {
        marcarCampo(event.target, false);
        atualizarResumo();
    }

    if (event.target.matches("#tfm, #busca-tfm")) {
        limitarParaNumeros(event.target, 6);
    }

    if (event.target.matches("#projeto")) {
        event.target.value = event.target.value.toUpperCase();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modalTfm.hidden) {
        fecharModalTfm();
    }

    if (event.key === "Escape" && !modalHelp.hidden) {
        fecharModalHelp();
    }

    if (event.key === "Escape" && !modalSugestao.hidden) {
        fecharModalSugestao();
    }

    if (event.key === "Escape" && !modalAtividade.hidden) {
        fecharModalAtividade();
    }
});

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    limparFeedback();

    if (btnSalvar.disabled) {
        return;
    }

    if (!validarFormulario()) {
        return;
    }

    try {
        alterarEstadoSalvando(true);

        const dados = {
            data: document.getElementById("data").value,
            nome: document.getElementById("nome").value,
            matricula: document.getElementById("matricula").value,
            turno: document.getElementById("turno").value,
            tfm: document.getElementById("tfm").value,
            projeto: document.getElementById("projeto").value,
            documento: await prepararDocumento(document.getElementById("documento-1")),
            atividades: await coletarAtividades()
        };

        const resposta = await fetch(SCRIPT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify(dados)
        });

        if (!resposta.ok) {
            throw new Error("Erro ao enviar os dados para o Apps Script.");
        }

        const resultado = await resposta.json();

        if (!resultado.sucesso) {
            throw new Error(resultado.erro || "Erro ao salvar apontamento.");
        }

        salvarHistorico(dados.atividades.map((atividade) => ({
            data: formatarData(dados.data),
            nome: dados.nome,
            tfm: dados.tfm,
            atividade: atividade.atividade,
            observacao: atividade.observacao,
            horas: Number(atividade.horas || 0).toLocaleString("pt-BR", { maximumFractionDigits: 1 }),
            salvoEm: new Date().toISOString()
        })));

        resumoPlanilhaCarregado = false;
        await carregarResumoPlanilha();

        mostrarFeedback("Apontamento salvo com sucesso!", "sucesso");
        form.reset();
        configurarDataAtual();
        document.querySelectorAll(".arquivo-nome").forEach((nomeArquivo) => {
            nomeArquivo.textContent = "Nenhum arquivo selecionado";
        });

        document.querySelectorAll(".atividade-item").forEach((item, index) => {
            if (index > 0) {
                item.remove();
            }
        });

        document.querySelectorAll(".detalhes-item").forEach((item, index) => {
            if (index > 0) {
                item.remove();
            }
        });
        await carregarHistoricoPlanilha();
    } catch (erro) {
        mostrarFeedback(erro.message || "Erro ao salvar!", "erro");
        console.error(erro);
    } finally {
        alterarEstadoSalvando(false);
        atualizarResumo();
    }
});

configurarDataAtual();
renderizarHistorico();
carregarResumoPlanilha();
carregarHistoricoPlanilha();

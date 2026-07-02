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
    "Nova atividade"
];

const btnAdd = document.querySelector(".btn-add");
const btnSalvar = document.querySelector(".btn-salvar");
const btnBuscar = document.querySelector(".btn-buscar");
const form = document.getElementById("form-apontamento");
const container = document.getElementById("atividades-lista");
const detalhesContainer = document.getElementById("detalhes-lista");
const buscaTfmInput = document.getElementById("busca-tfm");
const resultadoBusca = document.getElementById("resultado-busca");
const modalTfm = document.getElementById("modal-tfm");
const modalTfmConteudo = document.getElementById("modal-tfm-conteudo");
const modalHelp = document.getElementById("modal-help");
const btnHelp = document.querySelector(".btn-help");
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbycpTr1Vj5nCByX2gYKvaXnhw7EiBUYqlnRq7ClSoqr2ZNBNvAUqvW2br6ksyAJDcxO/exec";
const colaboradoresDisponiveis = Array.from(document.querySelectorAll("#colaboradores-opcoes option"))
    .map((option) => option.textContent.trim())
    .filter(Boolean);

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

function mostrarSugestoes(input, opcoes) {
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
            fecharSugestoes();
        });

        lista.appendChild(botao);
    });

    lista.hidden = false;
}

function configurarAutocomplete(input, opcoes) {
    input.addEventListener("input", () => mostrarSugestoes(input, opcoes));
    input.addEventListener("focus", () => mostrarSugestoes(input, opcoes));
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
            <strong>Atividade realizada ${indice}</strong>
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
                    <input id="horas-${indice}" name="horas[]" type="number" class="horas-input" min="0" step="0.1" placeholder="Ex: 2.5" required>
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

function mostrarResultadoBusca(conteudo, tipo = "sucesso") {
    resultadoBusca.hidden = false;
    resultadoBusca.className = `resultado-busca resultado-busca-${tipo}`;
    resultadoBusca.innerHTML = "";
    resultadoBusca.appendChild(conteudo);
}

function limparResultadoBusca() {
    resultadoBusca.hidden = true;
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

document.querySelectorAll(".atividade-input").forEach((input) => configurarAutocomplete(input, atividadesDisponiveis));
document.querySelectorAll(".colaborador-input").forEach((input) => configurarAutocomplete(input, colaboradoresDisponiveis));
document.querySelectorAll(".documento-input").forEach(configurarDocumento);

document.addEventListener("mousedown", (event) => {
    if (!event.target.closest(".autocomplete-wrapper")) {
        fecharSugestoes();
    }
});

btnAdd.addEventListener("click", () => {
    const indice = document.querySelectorAll(".detalhes-item").length + 1;
    const novoDetalhe = criarDetalhesItem(indice);
    detalhesContainer.appendChild(novoDetalhe);
    configurarAutocomplete(novoDetalhe.querySelector(".atividade-input"), atividadesDisponiveis);
});

btnBuscar.addEventListener("click", buscarDocumentoTfm);
buscaTfmInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        buscarDocumentoTfm();
    }
});

document.querySelectorAll("[data-fechar-modal]").forEach((elemento) => {
    elemento.addEventListener("click", fecharModalTfm);
});

document.querySelectorAll("[data-fechar-help]").forEach((elemento) => {
    elemento.addEventListener("click", fecharModalHelp);
});

btnHelp.addEventListener("click", abrirModalHelp);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modalTfm.hidden) {
        fecharModalTfm();
    }

    if (event.key === "Escape" && !modalHelp.hidden) {
        fecharModalHelp();
    }
});

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (btnSalvar.disabled) {
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

        alert("Apontamento salvo com sucesso!");
        form.reset();
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
    } catch (erro) {
        alert(erro.message || "Erro ao salvar!");
        console.error(erro);
    } finally {
        alterarEstadoSalvando(false);
    }
});

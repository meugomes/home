const info = {
        1: { t: "Módulo 1: Fundamentos", c: ["Lógica de Hardware", "Gestão de Ficheiros", "Atalhos de Produtividade", "Manutenção Preventiva"] },
        2: { t: "Módulo 2: Nuvem e Web", c: ["Google Drive Profissional", "E-mail Corporativo", "Pesquisa Avançada", "Segurança Online"] },
        3: { t: "Módulo 3: Office Profissional", c: ["Excel: Fórmulas e Gráficos", "Word: Relatórios Técnicos", "PowerPoint: Design de Slides", "Tabelas Dinâmicas"] },
        4: { t: "Módulo 4: IA e Futuro", c: ["Uso do Gemini/ChatGPT", "Automação de Tarefas", "Edição de PDFs", "Segurança de Dados"] }
    };

    function openModal(id) {
        const m = info[id];
        let h = `<h2 style="color:#2563eb; margin-bottom:15px">${m.t}</h2><ul style="list-style:none">`;
        m.c.forEach(item => h += `<li><i class="fas fa-check-circle" style="color:#10b981"></i> ${item}</li>`);
        h += `</ul><button onclick="document.getElementById('modal').style.display='none'" style="margin-top:20px; width:100%; padding:10px; border:none; background:#0f172a; color:white; border-radius:10px; cursor:pointer">Fechar</button>`;
        document.getElementById('modal-data').innerHTML = h;
        document.getElementById('modal').style.display = 'flex';
    }
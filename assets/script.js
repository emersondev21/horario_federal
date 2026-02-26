function calcular_horario() {
  const input = document.querySelector(".input_horario");

    if (!input) {
        console.error("Elemento .input_horario não encontrado.");
        return;
    }

    const valor = input.value.trim().toUpperCase();

    if (!valor) {
        document.getElementById("resultado").innerText = "Digite um horário válido.";
        return;
    }

    const diasMap = {
        "2": "Segunda",
        "3": "Terça",
        "4": "Quarta",
        "5": "Quinta",
        "6": "Sexta",
        "7": "Sábado"
    };

    const turnoMap = {
        "M": "Manhã",
        "T": "Tarde",
        "N": "Noite"
    };

    const horarios = valor.split(" ");
    let resultadoFinal = "";

    horarios.forEach(horario => {
        const regex = /^(\d+)([MTN])(\d+)$/;
        const match = horario.match(regex);

        if (!match) {
            resultadoFinal += `<strong>${horario}</strong>: Formato inválido<br><br>`;
            return;
        }

        const diasCodigo = match[1];
        const turnoCodigo = match[2];
        const aulasCodigo = match[3];

        const dias = diasCodigo
            .split("")
            .map(d => diasMap[d] || "")
            .filter(Boolean);

        const aulas = aulasCodigo.split("").join(" e ");

        resultadoFinal += `
            <strong>${horario}</strong><br>
            Dias: ${dias.join(", ")}<br>
            Turno: ${turnoMap[turnoCodigo]}<br>
            Aulas: ${aulas}
            <br><br>
        `;
    });

    document.getElementById("resultado").innerHTML = resultadoFinal;
    console.log(resultado);
}

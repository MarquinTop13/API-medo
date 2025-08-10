import { conection } from "./connection.js";

export async function tabelaglyptodon(){
    const comando = "SELECT * FROM tb_glyptodon";
    const [registros] = await conection.query(comando);
    return registros;
}

export async function inserirGlyptodon(novoGlyptodon) {
  const comando = `
    INSERT INTO tb_glyptodon (nome, matricula, curso, email)
               values (?, ?, ?, ?);
  `

  const [info] = await conection.query(comando, [
      novoGlyptodon.nome,
      novoGlyptodon.matricula,
      novoGlyptodon.curso,
      novoGlyptodon.email,
  ])
  return info.insertId;
}

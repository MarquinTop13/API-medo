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


export async function editarGlyptodon(id, editarGlyptodon) {
    const comando = `
      update tb_glyptodon
        set nome = ?,
            matricula = ?,
            curso = ?,
            email = ?,
        where id = ?
    `

    const [info] = await conection.query(comando [
      editarGlyptodon.nome,
      editarGlyptodon.matricula,
      editarGlyptodon.curso,
      editarGlyptodon.email,
      id
    ])
}

export async function removerGlyptodo(id) {
    const comando = `
      delete from tb_glyptodon
      where id = ?,
    `  

    const [info] = await conection.query(comando, [id])
}
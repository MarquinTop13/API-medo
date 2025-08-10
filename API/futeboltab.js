import { conection } from "./connection.js";

export async function tabelafutebol(){
    const comando = "SELECT * FROM tb_Futebol"
    const [registros] = await conection.query(comando)
    return registros;
}


export async function inserirJogo(novoJogo) {
  const comando = `
    INSERT INTO tb_Futebol (nm_jogador, ps_nascimento, nm_time, nrs_gols, nr_assists, jg_posicao, dt_estreia, cp_mundo )
               values (?, ?, ?, ?, ?, ?, ?, ?);
  `

  const [info] = await conection.query(comando, [
    novoJogo.nm_jogador,
    novoJogo.ps_nascimento,
    novoJogo.nm_time,
    novoJogo.nrs_gols,
    novoJogo.nr_assists,
    novoJogo.jg_posicao,
    novoJogo.dt_estreia,
    novoJogo.cp_mundo
  ])
  return info.insertId;
}

export async function editarJogo(id, editarJogo){
  const comando = `
    update tb_Futebol
      set nm_jogador = ?,
          ps_nascimento = ?,
          nm_time = ?,
          nrs_gols = ?,
          nr_assists = ?,
          jg_posicao = ?,
          dt_estreia = ?,
          cp_mundo = ?,
    where id = ?
  `
  const [info] = await conection.query(comando, [
      editarJogo.nm_jogador,
      editarJogo.ps_nascimento,
      editarJogo.nm_time,
      editarJogo.nrs_gols,
      editarJogo.nr_assists,
      editarJogo.jg_posicao,
      editarJogo.dt_estreia,
      editarJogo.cp_mundo,
      id
  ])
}


export async function removerJogo(id){
  const comando = `
    delete from tb_Futebol
    where id = ?
  `

  const [info] = await conection.query(comando, [id]);
}

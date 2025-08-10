import { conection } from "./connection.js";

export async function tabelagame(){
    const comando = "SELECT * FROM tb_game"
    const [registros] = await conection.query(comando)
    return registros;
}

export async function inserirGame(novoGame) {
  const comando = `
    INSERT INTO tb_game (ds_nome, ds_desenvolvedora, qtd_dowloads, vl_preco, nr_ano)
               values (?, ?, ?, ?, ?);
  `

  const [info] = await conection.query(comando, [
    novoGame.ds_nome,
    novoGame.ds_desenvolvedora,
    novoGame.qtd_dowloads,
    novoGame.vl_preco,
    novoGame.nr_ano,
  ])
  return info.insertId;
}

export async function editarGame(id, editarGame){
  const comando = `
    update tb_game
      set ds_nome = ?,
          ds_desenvolvedora = ?,
          qtd_downloads = ?,
          vl_preco = ?,
          nr_ano = ?
    where id = ?
  `
  const [info] = await conection.query(comando, [
      editarGame.ds_nome,
      editarGame.ds_desenvolvedora,
      editarGame.qtd_dowloads,
      editarGame.vl_preco,
      editarGame.nr_ano,
      id
  ])
}


export async function removerGame(id){
  const comando = `
    delete from tb_game
    where id = ?
  `

  const [info] = await conection.query(comando, [id]);
}

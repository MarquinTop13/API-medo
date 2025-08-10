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


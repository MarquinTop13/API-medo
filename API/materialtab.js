import { conection } from "./connection.js";

export async function tabelamaterial(){
    const comando = "SELECT * FROM tb_materiais"
    const [registros] = await conection.query(comando)
    return registros;
}

export async function inserirMaterial(novoMaterial) {
  const comando = `
    INSERT INTO tb_materiais (comprador, Qtd_canetas, Qtd_lapis, lapis_cor, borrachas, cadernos, tesouras, colas, tt_itens_comprados, tt_itens_preco)
               values (?, ?, ?, ?, ?, ?);
  `

  const [info] = await conection.query(comando, [
      novoMaterial.comprador,
      novoMaterial.Qtd_canetas,
      novoMaterial.Qtd_lapis,
      novoMaterial.lapis_cor,
      novoMaterial.borrachas,
      novoMaterial.cadernos,
      novoMaterial.tesouras,
      novoMaterial.colas,
      novoMaterial.tt_itens_comprados,
      novoMaterial.tt_itens_preco
  ])
  return info.insertId;
}


export async function editarMaterial(id, editarMaterial){
  const comando = `
    update from tb_materiais
      set comprador = ?,
          Qtd_canetas,
          Qtd_lapis,
          lapis_cor,
          borrachas,
          cadernos,
          tesouras,
          colas,
          tt_itens_comprados,
          tt_itens_preco,
      where id = ?
  `
  const [info] = await conection.query(comando[
      editarMaterial.comprador,
      editarMaterial.Qtd_canetas,
      editarMaterial.Qtd_lapis,
      editarMaterial.lapis_cor,
      editarMaterial.borrachas,
      editarMaterial.borrachas,
      editarMaterial.cadernos,
      editarMaterial.tesouras,
      editarMaterial.colas,
      editarMaterial.tt_itens_comprados,
      editarMaterial.tt_itens_preco,
      id
  ])
}

export async function removerMaterial(id){
  const comando = `
      delete from tb_materiais
      where id = ?
  `

  const [info] = await conection.query(comando, [id]);
}
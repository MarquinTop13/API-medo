import { conection } from "./connection.js";

export async function tabelahospital(){
    const comando = "SELECT * FROM tb_hosp"
    const [registros] = await conection.query(comando)
    return registros;
}

export async function inserirPaciente(novoPaciente) {
  const comando = `
    INSERT INTO tb_hosp (ds_nome, dt_nasc, id_virus, id_sex, nm_quarto, id_obito)
               values (?, ?, ?, ?, ?, ?);
  `

  const [info] = await conection.query(comando, [
      novoPaciente.ds_nome,
      novoPaciente.dt_nasc,
      novoPaciente.id_virus,
      novoPaciente.id_sex,
      novoPaciente.nm_quarto,
      novoPaciente.id_obito
  ])
  return info.insertId;
}


export async function editarPaciente(id, editarPaciente){
  const comando = `
    update tb_hosp
      set ds_nome = ?,
          dt_nasc = ?,
          id_virus = ?,
          id_sex = ?,
          nm_quarto = ?,
          id_obito = ?
       where id = ?
  ` 
  const [info] = await conection.query(comando, [
    editarPaciente.ds_nome,
    editarPaciente.dt_nasc,
    editarPaciente.id_virus,
    editarPaciente.id_sex,
    editarPaciente.nm_quarto,
    editarPaciente.id_obito,
    id
  ])
}


export async function removerPaciente(id){
  const comando = `
    delete from tb_hosp
    where id = ?
  `

  const [info] = await conection.query(comando, [id]);
}
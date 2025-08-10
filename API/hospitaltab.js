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

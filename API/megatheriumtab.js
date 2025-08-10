import { conection } from "./connection.js";

export async function tabelamegatherium(){
    const comando = "SELECT * FROM tb_megatherium";
    const [registros] = await conection.query(comando);
    return registros;
}


export async function inserirMegatherium(novoMegatherium){
    const comando = "insert into tb_megatherium (titulo, descricao, carga_horas, duracao) values (?,?,?,?)"

    const [info] = await conection.query(comando, [
        novoMegatherium.titulo,
        novoMegatherium.descricao,
        novoMegatherium.carga_horas,
        novoMegatherium.duracao
    ])

    return info.insertId;
}
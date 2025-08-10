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


export async function editarMegatherium(id, editarMegatherium){
    const comando = `
    update from tb_megatherium 
        set titulo = ?,
            descricao = ?,
            carga_horas = ?,
            duracao = ?,
        where id = ?
    `

    const [info] = await conection.query(comando[
        editarMegatherium.titulo,
        editarMegatherium.descricao,
        editarMegatherium.carga_horas,
        editarMegatherium.duracao,
        id
    ])
}

export async function removerMegatherium(id){
    const comando = `
        delete from tb_megatherium
        where id = ?;
    `

    const [info] = await conection.query(comando, [id])
}
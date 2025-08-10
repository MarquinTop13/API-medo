import { conection } from "./connection.js";

export async function tabelamusicas(){
    const comando = "SELECT * FROM tb_musicas"
    const [registros] = await conection.query(comando)
    return registros;
}


export async function inserirMusica(novaMusica){
    const comando = "insert into tb_musicas (titulo, artista, album, genero, duracao, ano_lancamento, classificacao) values(?, ?, ?, ?, ?, ?, ?);"

    const [info] = await conection.query(comando, [
        novaMusica.titulo,
        novaMusica.artista,
        novaMusica.album,
        novaMusica.genero,
        novaMusica.duracao,
        novaMusica.ano_lancamento,
        novaMusica.classificacao
    ])

    return info.insertId;
}


export async function editarMusica(id, editarMusica){
    const comando = `
        update tb_musicas
        set titulo = ?,
            artista = ?,
            album = ?,
            genero = ?,
            duracao = ?,
            ano_lancamento = ?,
            classificacao = ?
        where id = ?
    `

    const [info] = await conection.query(comando, [
        editarMusica.titulo,
        editarMusica.artista,
        editarMusica.album,
        editarMusica.genero,
        editarMusica.duracao,
        editarMusica.ano_lancamento,
        editarMusica.classificacao,
        id
    ])
}



export async function removerMusica(id) {
    const comando = `
        delete from tb_musicas
        where id = ?;
    `    

    const [info] = await conection.query(comando, [id]);
}
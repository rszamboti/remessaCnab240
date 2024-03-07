import { Retornocnab } from "./retornocnab.js";
export function buildRetorno(body) {
    const cnab = new Retornocnab();
    //console.log(json)
    // console.log('buildRemessa');
    cnab.popularConteudoArquivo(body);
    return cnab.buildRetorno();
}
import { extrair, convertValorRetorno, convertDataRetorno } from './utils.js';
import { RetornoItau } from './retornoItau.js';
export class Retornocnab {
    constructor() {
        this.versao = '1.0.0';
        this.totalLinhas=0;
        this.conteudo = '';
        this.linhas=[];
        this.bancoAtual=0;
        this.jsonRetorno=[];

    }
    popularConteudoArquivo(conteudo){
        this.conteudo = conteudo;
        this.linhas = this.conteudo.split(/\r?\n/);
        this.totalLinhas = this.linhas.length;
        this.bancoAtual = extrair(this.linhas[0],1,3);
        this.retorno = new RetornoItau();
    }
    buildRetorno(){
        let nrdoc='';
        let retorno=[];
        // linha inicia em zero
        this.linhas.forEach((element,linha) => {
            console.log(linha)
            let tipoRegistro = extrair(element,8,8);
            let segmento = extrair(element,14,14);
            let tipoArquivo = '';
            let valor = '';
            let datapg = '';
            let dataqt = '';
            let erro1 = '';
            let erro2 = '';
            let erro3 = '';
            let erro4 = '';
            let erro5 = '';
            let Situacao = ''
    
            // validar se a primeira linha e a primeira linha do arquivo valido
            if(linha==0){
                tipoArquivo = extrair(element,143,143);
                if(tipoRegistro != 0 && tipoArquivo != 2){
                    return 'ARQUIVO DE RETORNO INVALIDO';
                }
            }else{
                if(tipoRegistro == 3 && segmento == 'A'){ // segmento A
                    nrdoc = extrair(element,74,93).trim();
                    valor = extrair(element,120,134);
                    valor = convertValorRetorno(valor);
                    datapg = convertDataRetorno(extrair(element,94,101)); 
                    dataqt = convertDataRetorno(extrair(element,155,162)); 
                    erro1 = extrair(element,231,232).trim().toUpperCase();
                    erro2 = extrair(element,233,234).trim().toUpperCase();
                    erro3 = extrair(element,235,236).trim().toUpperCase();
                    erro4 = extrair(element,237,238).trim().toUpperCase();
                    erro5 = extrair(element,239,240).trim().toUpperCase();
                    Situacao = 'AGUARDANDO';
                    if(erro1 == '00' || erro2 == '00' || erro3 == '00' || erro4 == '00' || erro5 == '00'){
                        Situacao = 'PAGO';
                    }
                    if(erro1 == 'BD' || erro2 == 'BD' || erro3 == 'BD' || erro4 == 'BD' || erro5 == 'BD'){
                        Situacao = 'AGENDADO';
                    }

                    retorno.push({'nossonumero':nrdoc,'valor':valor,'datapg':datapg,'dataqt':dataqt,'situacao':Situacao,
                    'erro1':this.retorno.buscaErro(erro1),
                    'erro2':this.retorno.buscaErro(erro2),
                    'erro3':this.retorno.buscaErro(erro3),
                    'erro4':this.retorno.buscaErro(erro4),
                    'erro5':this.retorno.buscaErro(erro5),
                    });
                }
            }
        });
        return {'banco':this.bancoAtual,'retorno':retorno};
    }

}
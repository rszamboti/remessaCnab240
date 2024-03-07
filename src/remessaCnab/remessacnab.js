import { converterTextoEmNumero,removerAcentuacao,nomebanco } from './utils.js';
import { RemessaItau } from './remessaItau.js';
export class Remessacnab {
    constructor() {
        this.versao = '1.0.0';
        this.controleSegmento=0;
        this.totalLinhas=0;
        this.empresa={};
        this.dadosPgto=[];
        this.bancoDoLote='';
        this.arquivo='';
    }
    populeEmpresa(EMPRESA){
        this.#ValidarDados(EMPRESA);
        this.bancoDoLote=converterTextoEmNumero(EMPRESA.banco);
        this.remessa = new RemessaItau();
        this.empresa=EMPRESA;
    }
    populeDadosPgto(dado){        
        let banco = converterTextoEmNumero(dado.banco,3);
        let segmento = '41';
        /*
        Itau - Segmento 
        1 - conta corrente itau
        5 - conta poupanca itau
        41 - conta corrente outros banco
        */
        if(this.bancoDoLote == '341'){
            if((banco == '341' || banco == '409') && dado.tipoconta == 'CC'){
                segmento = '1';
            }
            if((banco == '341' || banco == '409') && dado.tipoconta == 'CP'){
                segmento = '5';
            }
        }
        if (!this.dadosPgto[segmento]) {
            this.dadosPgto[segmento] = [];
        }
        this.dadosPgto[segmento].push(dado);
    }
    
    build(){
        try{
             this.totalLinhas++;
             this.buildHeader();
             this.buildLotes();
             this.buildTrailler();

            //console.log('arquivo',this.arquivo)
            return this.arquivo;
        }catch(error){
            console.log('error',error)
        }
    }
    buildHeader(){
        // console.log('empresa',this.empresa)
        this.arquivo =  this.remessa.buildHeader(this.empresa);
    }

    async buildTrailler(){
        // console.log('empresa',this.empresa)
        this.arquivo = this.arquivo.concat(  this.remessa.buildTrailler(this.controleSegmento,this.totalLinhas));
    }
    buildLotes(){
        Object.entries(this.dadosPgto).forEach(async (element) => {
            this.controleSegmento++;
            let key = element[0];
            let value = element[1];
            let lote =  this.remessa.buildLotes(this.empresa,this.controleSegmento,key,this.totalLinhas,value);
            //console.log('lottt->',lote);
            this.arquivo += lote.remessa;
            this.totalLinhas = lote.totallinhas;
        })
    }

 
 
    #ValidarDados(EMPRESA){
        if(EMPRESA.cnpj == null || EMPRESA.cnpj == undefined){
            throw new Error('CNPJ obrigatorio');
        }
        if(EMPRESA.nome == null || EMPRESA.nome == undefined){
            throw new Error('Nome Empresa obrigatorio');
        }
        if(EMPRESA.endereco == null || EMPRESA.endereco == undefined){
            throw new Error('Endereco obrigatorio');
        }
        if(EMPRESA.agencia == null || EMPRESA.agencia == undefined){
            throw new Error('Agencia obrigatorio');
        }
        if(EMPRESA.contaCorrente == null || EMPRESA.contaCorrente == undefined){
            throw new Error('Conta obrigatorio');  
        }
        if(EMPRESA.digito == null || EMPRESA.digito == undefined){
            throw new Error('Digito obrigatorio');
        }
        if(EMPRESA.cep == null || EMPRESA.cep == undefined){
            throw new Error('Cep obrigatorio');
        }
        if(EMPRESA.estado == null || EMPRESA.estado == undefined){
            throw new Error('UF obrigatorio');
        }

    }
}
import { converterTextoEmNumero,removerAcentuacao,nomebanco } from './utils.js';
import { RemessaItau } from './remessaItau.js';
import { RemessaBradesco } from './remessaBradesco.js';
export class Remessacnab {
    constructor() {
        this.versao = '1.0.0';
        this.controleSegmento=0;
        this.totalLinhas=0;
        this.empresa={};
        this.dadosPgto=[];
        this.bancoDoLote='';
        this.arquivo='';
        this.erros='';
    }
    populeEmpresa(EMPRESA){
        this.#ValidarDados(EMPRESA);
        if(this.erros.length>0){
            return;
        }
        this.bancoDoLote=converterTextoEmNumero(EMPRESA.banco);
        if(this.bancoDoLote == '341'){
            this.remessa = new RemessaItau();    
        }else if(this.bancoDoLote == '237'){
            this.remessa = new RemessaBradesco();
        }
        
        this.empresa=EMPRESA;
    }
    populeDadosPgto(dado){        
        let banco = converterTextoEmNumero(dado.banco,3);
        let segmento = '41';
        /*
        Segmento 
        1 - conta corrente proprio banco
        5 - conta poupanca proprio banco
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
        if(this.bancoDoLote == '237'){
            if(banco == '237' && dado.tipoconta == 'CC'){
                segmento = '1';                    
            }
            if(banco == '237' && dado.tipoconta == 'CP'){
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
            this.erros = this.erros.concat('CNPJ obrigatorio');
        }
        if(EMPRESA.banco == null || EMPRESA.banco == undefined){
            this.erros = this.erros.concat('Codigo Do Banco é obrigatorio');
        }
        if(EMPRESA.nome == null || EMPRESA.nome == undefined){
            this.erros = this.erros.concat('Nome Empresa obrigatorio');
        }
        if(EMPRESA.endereco == null || EMPRESA.endereco == undefined){
            this.erros = this.erros.concat('Endereco obrigatorio');
        }
        if(EMPRESA.agencia == null || EMPRESA.agencia == undefined){
            this.erros = this.erros.concat('Agencia obrigatorio');
        }
        if(EMPRESA.contaCorrente == null || EMPRESA.contaCorrente == undefined){
            this.erros = this.erros.concat('Conta obrigatorio');  
        }
        if(EMPRESA.digito == null || EMPRESA.digito == undefined){
            this.erros = this.erros.concat('Digito obrigatorio');
        }
        if(EMPRESA.cep == null || EMPRESA.cep == undefined){
            this.erros = this.erros.concat('Cep obrigatorio');
        }
        if(EMPRESA.estado == null || EMPRESA.estado == undefined){
            this.erros = this.erros.concat('UF obrigatorio');
        }

    }
}
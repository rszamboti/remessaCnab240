import { converterTextoEmNumero,converterTextoEmString,nomebanco } from "./utils.js";
export class RemessaItau {
    constructor() {
        this.valorTotalArquivo = 0;
    }
     buildHeader(EMPRESA){
        let data = new Date();
        let dataHoje = data.getFullYear() + (data.getMonth() + 1) + data.getDate();
        let horaHoje = data.getHours()+ data.getMinutes() + data.getSeconds();
        let header='';
        header = header.concat(converterTextoEmNumero(EMPRESA.banco,3)); // 001-003
        header = header.concat(converterTextoEmNumero('0',4)); // 004-007
        header = header.concat(converterTextoEmNumero('0',1)); // 008-008
        header = header.concat(converterTextoEmString(' ',6)); // 009-014
        header = header.concat(converterTextoEmNumero('81',3)); // 015-017
        header = header.concat(converterTextoEmNumero('2',1)); // 018-018
        header = header.concat(converterTextoEmNumero(EMPRESA.cnpj,14)); // 019-032
        header = header.concat(converterTextoEmString('',20)); // 033-052
        header = header.concat(converterTextoEmNumero(EMPRESA.agencia,5)); // 053-057
        header = header.concat(converterTextoEmString('',1)); // 058-058
        header = header.concat(converterTextoEmNumero(EMPRESA.conta,12)); // 059-070
        header = header.concat(converterTextoEmNumero('',1)); // 071-071
        header = header.concat(converterTextoEmNumero(EMPRESA.digito,1)); // 072-072
        header = header.concat(converterTextoEmString(EMPRESA.nome,30)); // 073-102
        header = header.concat(converterTextoEmString(nomebanco(EMPRESA.banco),30)); // 103-132
        header = header.concat(converterTextoEmString('',10)); // 133-142
        header = header.concat(converterTextoEmNumero('1',1)); // 143-143
        header = header.concat(converterTextoEmString(dataHoje,8)); // 144-151
        header = header.concat(converterTextoEmString(horaHoje,6)); // 152-157
        header = header.concat(converterTextoEmNumero('0',9)); // 158-166
        header = header.concat(converterTextoEmNumero('0',5)); // 167-171
        header = header.concat(converterTextoEmString('',69)); // 172-240
        header = header.concat("\n");
        //console.log(header)
        return header;
    }
     buildHeaderLote(EMPRESA,controleSegmento,segmentoAtual){
        //console.log(dados);
        let header='';
        header = header.concat(converterTextoEmNumero(EMPRESA.banco,3)); // 001-003
        header = header.concat(converterTextoEmNumero(controleSegmento,4)); // 004-007
        header = header.concat(converterTextoEmNumero('1',1)); // 008-008
        header = header.concat(converterTextoEmString('C',1)); // 009-009
        header = header.concat(converterTextoEmNumero('20',2)); // 010-011
        header = header.concat(converterTextoEmNumero(segmentoAtual,2)); // 012-013
        header = header.concat(converterTextoEmNumero('40',3)); // 014-016
        header = header.concat(converterTextoEmString('',1)); // 017-017
        header = header.concat(converterTextoEmNumero('2',1)); // 018-018
        header = header.concat(converterTextoEmNumero(EMPRESA.cnpj,14)); // 019-032
        header = header.concat(converterTextoEmString('',20)); // 033-052
        header = header.concat(converterTextoEmNumero(EMPRESA.agencia,5)); // 053-057
        header = header.concat(converterTextoEmString('',1)); // 058-058
        header = header.concat(converterTextoEmNumero(EMPRESA.conta,12)); // 059-070
        header = header.concat(converterTextoEmNumero('',1)); // 071-071
        header = header.concat(converterTextoEmNumero(EMPRESA.digito,1)); // 072-072
        header = header.concat(converterTextoEmString(EMPRESA.nome,30)); // 073-102
        header = header.concat(converterTextoEmString('',30)); // 103-132
        header = header.concat(converterTextoEmString('',10)); // 133-142
        header = header.concat(converterTextoEmString(EMPRESA.endereco,30)); // 143-172
        header = header.concat(converterTextoEmString(EMPRESA.numero,5)); // 173-177
        header = header.concat(converterTextoEmString(EMPRESA.complemento,15)); // 178-192
        header = header.concat(converterTextoEmString(EMPRESA.cidade,20)); // 193-212
        header = header.concat(converterTextoEmString(EMPRESA.cep,8)); // 213-220
        header = header.concat(converterTextoEmString(EMPRESA.estado,2)); // 221-222
        header = header.concat(converterTextoEmString('',8)); // 223-230
        header = header.concat(converterTextoEmString('',10)); // 231-240
        return header;
    }

     buildDetalhesA(dados,controleSegmento,segmentoAtual,qtdDetalhes){
        let data = new Date();
        let dataHoje = data.getFullYear() + (data.getMonth() + 1) + data.getDate();
        let lote='';
        lote = lote.concat(converterTextoEmNumero('341',3)); // 001-003
        lote = lote.concat(converterTextoEmNumero(controleSegmento,4)); // 004-007
        lote = lote.concat(converterTextoEmNumero('3',1)); // 008-008
        lote = lote.concat(converterTextoEmNumero(qtdDetalhes,5)); // 009-013
        lote = lote.concat(converterTextoEmString('A',1)); // 014-014
        let cod=0;
        if(dados.banco == '341' || dados.banco == '409'){
            let cpf = dados.cpfcnpj.replace(/\D/g,"");
            if(cpf.lenght > 11){
                cod = 2;
            }else{
                cod = 1;
            }
        }

        lote = lote.concat(converterTextoEmNumero(cod,3)); // 015-017
        lote = lote.concat(converterTextoEmNumero('0',3)); // 018-020
        lote = lote.concat(converterTextoEmNumero(dados.banco,3)); // 021-023
        if(dados.banco == '341' || dados.banco == '409'){
            lote = lote.concat(converterTextoEmNumero('0',1));          // 024-024
            lote = lote.concat(converterTextoEmNumero(dados.agencia,4)); // 025-028
            lote = lote.concat(converterTextoEmString('',1));           // 029-029
            lote = lote.concat(converterTextoEmNumero(dados.conta,12)); // 030-041
            lote = lote.concat(converterTextoEmString('',1));           // 042-042
            lote = lote.concat(converterTextoEmNumero(dados.digito,1)); // 043-043
        }else{
            lote = lote.concat(converterTextoEmNumero(dados.agencia,5)); // 024-028
            lote = lote.concat(converterTextoEmString('',1));           // 029-029
            lote = lote.concat(converterTextoEmNumero(dados.conta,12)); // 030-041
            lote = lote.concat(converterTextoEmString('',1));           // 042-042
            lote = lote.concat(converterTextoEmNumero(dados.digito,1)); // 043-043
        }
        lote = lote.concat(converterTextoEmString(dados.favorecido,30)); // 044-073
        lote = lote.concat(converterTextoEmString(dados.nossonumero,20)); // 074-093
        lote = lote.concat(converterTextoEmNumero(dataHoje,8)); // 094-101
        lote = lote.concat(converterTextoEmString('REA',3)); // 102-104
        lote = lote.concat(converterTextoEmNumero('0',15)); // 105-119
        lote = lote.concat(converterTextoEmNumero(dados.valor,15)); // 120-134
        lote = lote.concat(converterTextoEmString('',15)); // 135-149
        lote = lote.concat(converterTextoEmString('',5)); // 150-154
        lote = lote.concat(converterTextoEmNumero('0',8)); // 155-162
        lote = lote.concat(converterTextoEmNumero('0',15)); // 163-177
        lote = lote.concat(converterTextoEmString('',18)); // 178-195
        lote = lote.concat(converterTextoEmString('',2)); //    196-197
        lote = lote.concat(converterTextoEmNumero('0',6)); // 198-203
        lote = lote.concat(converterTextoEmNumero(dados.cpfcnpj,14)); // 204-217
        lote = lote.concat(converterTextoEmNumero('0',2)); // 218-219
        if(segmentoAtual == '41'){
            lote = lote.concat(converterTextoEmNumero('10',5)); // 220-224
        }else{
            lote = lote.concat(converterTextoEmString('',5)); // 220-224
        }
        lote = lote.concat(converterTextoEmString('',5)); // 225-229
        lote = lote.concat(converterTextoEmNumero('0',1)); // 230-230
        lote = lote.concat(converterTextoEmString('',10)); // 231-240
        return lote;
    }
     buildDetalhesB(dados,controleSegmento,qtdDetalhes){
        let lote='';
        lote = lote.concat(converterTextoEmNumero('341',3)); // 001-003
        lote = lote.concat(converterTextoEmNumero(controleSegmento,4)); // 004-007
        lote = lote.concat(converterTextoEmNumero('3',1)); // 008-008
        lote = lote.concat(converterTextoEmNumero(qtdDetalhes,5)); // 009-013
        lote = lote.concat(converterTextoEmString('B',1)); // 014-014
        lote = lote.concat(converterTextoEmString('',3)); // 015-017
        let cod=0;
        let cpf = dados.cpfcnpj.replace(/\D/g,"");
        if(cpf.lenght > 11){
            cod = 2;
        }else{
            cod = 1;
        }
        lote = lote.concat(converterTextoEmNumero(cod,1)); // 018-018
        lote = lote.concat(converterTextoEmNumero(dados.cpfcnpj,14)); // 019-032
        lote = lote.concat(converterTextoEmNumero(dados.endereco,30)); // 033-062
        lote = lote.concat(converterTextoEmNumero(dados.numero,5)); // 063-067
        lote = lote.concat(converterTextoEmString(dados.complemento,15)); // 068-082
        lote = lote.concat(converterTextoEmString(dados.bairro,15)); // 083-097
        lote = lote.concat(converterTextoEmString(dados.cidade,20)); // 098-117
        lote = lote.concat(converterTextoEmNumero(dados.cep,8)); // 118-125
        lote = lote.concat(converterTextoEmString(dados.estado,2)); // 126-127
        lote = lote.concat(converterTextoEmString(dados.email,100)); // 128-227
        lote = lote.concat(converterTextoEmString('',3)); // 228-230
        lote = lote.concat(converterTextoEmString('',10)); // 231-240
        return lote;
    }
     buildTraillerLote(controleSegmento,qtdDetalhes,valorFinal){
        let lote='';
        lote = lote.concat(converterTextoEmNumero('341',3)); // 001-003
        lote = lote.concat(converterTextoEmNumero(controleSegmento,4)); // 004-007
        lote = lote.concat(converterTextoEmNumero('5',1)); // 008-008
        lote = lote.concat(converterTextoEmString('',9)); // 009-017
        lote = lote.concat(converterTextoEmNumero(qtdDetalhes,6)); // 018-023
        lote = lote.concat(converterTextoEmNumero(valorFinal,18)); // 024-041
        lote = lote.concat(converterTextoEmNumero('0',18)); // 042-059
        lote = lote.concat(converterTextoEmString('',171)); // 060-230
        lote = lote.concat(converterTextoEmString('',10)); // 231-240
        return lote;
    }
     buildTrailler(controleSegmento,totalLinhas){
        totalLinhas++;
        let lote='';
        lote = lote.concat(converterTextoEmNumero('341',3)); // 001-003
        lote = lote.concat(converterTextoEmNumero('9999',4)); // 004-007
        lote = lote.concat(converterTextoEmNumero('9',1)); // 008-008
        lote = lote.concat(converterTextoEmString('',9)); // 009-017
        lote = lote.concat(converterTextoEmNumero(controleSegmento,6)); // 018-023
        lote = lote.concat(converterTextoEmNumero(totalLinhas,6)); // 018-023
        lote = lote.concat(converterTextoEmString('',211)); // 024-240
        return lote;
    }


     buildLotes(EMPRESA,controleSegmento, segmento, totallinhas, dados){
        let lote='';
        lote =  this.buildHeaderLote(EMPRESA,controleSegmento,segmento) + "\n";
        totallinhas++;
        let qtdDetalhes = 1;
        let valorFinal=0;
        for (const element of dados) {
            let detalhes =  this.buildDetalhesA(element,controleSegmento,segmento,qtdDetalhes) + "\n";
            qtdDetalhes++;
            totallinhas++;
            detalhes +=  this.buildDetalhesB(element,controleSegmento,qtdDetalhes) + "\n";
            totallinhas++;
            qtdDetalhes++;
            lote += detalhes;
            valorFinal += parseFloat(element.valor);
        }
        console.log('lote',lote)
        this.valorTotalArquivo += valorFinal;
        lote +=  this.buildTraillerLote(controleSegmento,qtdDetalhes,valorFinal) + "\n";
        totallinhas++;
        return {'remessa':lote,'totallinhas':totallinhas};
        /*
        let lote='';
        lote = lote.concat( this.buildHeaderLote(EMPRESA,controleSegmento,segmento));
        lote = lote.concat("\n");
        totallinhas++;
        
        //console.log(dados)
        
        let qtdDetalhes = 1;
        let valorFinal=0;
        dados.forEach(async element => {
            let detalhes = '';
            //console.log(element);
            valorFinal = valorFinal + parseFloat(element.valor)
            detalhes = detalhes.concat( this.buildDetalhesA(element,controleSegmento,segmento,qtdDetalhes));
            console.log('d1->',detalhes)
            detalhes = detalhes.concat("\n");
            qtdDetalhes++;
            totallinhas++;
            detalhes = detalhes.concat( this.buildDetalhesB(element,controleSegmento,qtdDetalhes));
            detalhes = detalhes.concat("\n");
            console.log('d2->',detalhes)
            totallinhas++;
            qtdDetalhes++;
            lote += detalhes;
        });
        
        console.log('lote',lote)
        this.valorTotalArquivo += valorFinal;
        lote = lote.concat( this.buildTraillerLote(controleSegmento,qtdDetalhes,valorFinal));
        totallinhas++;
        lote = lote.concat("\n");

        return {'remessa':lote,'totallinhas':totallinhas};
        */
    }
}
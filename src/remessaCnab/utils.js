export function converterTextoEmNumero(valor,tamanho) {
        const valorString = String(valor);
        var numeroString = removerAcentuacao(valorString);
        var zerosParaAdicionar = tamanho - numeroString.length;
        for (var i = 0; i < zerosParaAdicionar; i++) {
            numeroString = '0' + numeroString;
        }
        return numeroString;
    }
export function converterTextoEmString(texto,tamanho){
        var textoString = removerAcentuacao(texto);
        var numeroString = textoString.toString();
        var tamanhoString = numeroString.length;
        if(tamanhoString >= tamanho){
            return numeroString.substring(0,tamanho);
        } 
        var zerosParaAdicionar = tamanho - tamanhoString;
        for (var i = 0; i < zerosParaAdicionar; i++) {
            numeroString = numeroString + ' ';
        }
        return numeroString;
    }
export function removerAcentuacao(texto) {
        if(texto?.length>0){
            return texto.replace(/[.\-,\/:;\"']/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        }
        return '';
    }
export function nomebanco(banco){
        let bancoNumero = converterTextoEmNumero(banco,3)
        switch (bancoNumero) {
            case '341': return 'BANCO ITAU';
            case '237': return 'BANCO BRADESCO';
            case '033': return 'BANCO SANTANDER';
            case '104': return 'CAIXA ECONOMICA FEDERAL';
            case '001': return 'BANCO DO BRASIL';
        }
    }
export function extrair(Texto,Comeco,Fim){
    if(Comeco >=1 && Fim <= 240){
        let start = parseInt(Comeco) - 1;
        let end = parseInt(Fim);
        return Texto.toString().substring(start,end);
    }
    return '';
}    
export function convertValorRetorno(valor){
    return parseFloat((parseFloat(valor) / 100).toFixed(2)).toFixed(2);
}
export function convertDataRetorno(data){
    return data.substring(4,8) + '-' + data.substring(2,4) + '-' + data.substring(0,2);
}
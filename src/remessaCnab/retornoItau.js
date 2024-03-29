export class RetornoItau {
    constructor(){
        this.erros = [
            {'key':'00', 'Texto':'PAGAMENTO EFETUADO'},
            {'key':'AE', 'Texto':'DATA DE PAGAMENTO ALTERADA'},
            {'key':'AG', 'Texto':'NÚMERO DO LOTE INVÁLIDO'},
            {'key':'AH', 'Texto':'NÚMERO SEQUENCIAL DO REGISTRO NO LOTE INVÁLIDO'},
            {'key':'AI', 'Texto':'PRODUTO DEMONSTRATIVO DE PAGAMENTO NÃO CONTRATADO'},
            {'key':'AJ', 'Texto':'TIPO DE MOVIMENTO INVÁLIDO'},
            {'key':'AL', 'Texto':'CÓDIGO DO BANCO FAVORECIDO INVÁLIDO'},
            {'key':'AM', 'Texto':'AGÊNCIA DO FAVORECIDO INVÁLIDA'},
            {'key':'AN', 'Texto':'CONTA CORRENTE DO FAVORECIDO INVÁLIDA'},
            {'key':'AO', 'Texto':'NOME DO FAVORECIDO INVÁLIDO'},
            {'key':'AP', 'Texto':'DATA DE PAGAMENTO / DATA DE VALIDADE / HORA DE LANÇAMENTO /ARRECADAÇÃO / APURAÇÃO INVÁLIDA'},
            {'key':'AQ', 'Texto':'QUANTIDADE DE REGISTROS MAIOR QUE 999999'},
            {'key':'AR', 'Texto':'VALOR ARRECADADO / LANÇAMENTO INVÁLIDO'},
            {'key':'BC', 'Texto':'NOSSO NÚMERO INVÁLIDO'},
            {'key':'BD', 'Texto':'PAGAMENTO AGENDADO'},
            {'key':'BE', 'Texto':'PAGAMENTO AGENDADO COM FORMA ALTERADA PARA OP'},
            {'key':'BI', 'Texto':'CNPJ / CPF DO FAVORECIDO NO SEGMENTO J-52 ou B INVÁLIDO / DOCUMENTOFAVORECIDO INVÁLIDO PIX'},
            {'key':'BL', 'Texto':'VALOR DA PARCELA INVÁLIDO'},
            {'key':'CD', 'Texto':'CNPJ / CPF INFORMADO DIVERGENTE DO CADASTRADO'},
            {'key':'CE', 'Texto':'PAGAMENTO CANCELADO'},
            {'key':'CF', 'Texto':'VALOR DO DOCUMENTO INVÁLIDO / VALOR DIVERGENTE DO QR CODE'},
            {'key':'CG', 'Texto':'VALOR DO ABATIMENTO INVÁLIDO'},
            {'key':'CH', 'Texto':'VALOR DO DESCONTO INVÁLIDO'},
            {'key':'CI', 'Texto':'CNPJ / CPF / IDENTIFICADOR / INSCRIÇÃO ESTADUAL / INSCRIÇÃO NO CAD / ICMS INVÁLIDO'},
            {'key':'CJ', 'Texto':'VALOR DA MULTA INVÁLIDO'},
            {'key':'CK', 'Texto':'TIPO DE INSCRIÇÃO INVÁLIDA'},
            {'key':'CL', 'Texto':'VALOR DO INSS INVÁLIDO'},
            {'key':'CM', 'Texto':'VALOR DO COFINS INVÁLIDO'},
            {'key':'CN', 'Texto':'CONTA NÃO CADASTRADA'},
            {'key':'CO', 'Texto':'VALOR DE OUTRAS ENTIDADES INVÁLIDO'},
            {'key':'CP', 'Texto':'CONFIRMAÇÃO DE OP CUMPRIDA'},
            {'key':'CQ', 'Texto':'SOMA DAS FATURAS DIFERE DO PAGAMENTO'},
            {'key':'CR', 'Texto':'VALOR DO CSLL INVÁLIDO'},
            {'key':'CS', 'Texto':'DATA DE VENCIMENTO DA FATURA INVÁLIDA'},
            {'key':'DA', 'Texto':'NÚMERO DE DEPEND. SALÁRIO FAMILIA INVALIDO'},
            {'key':'DB', 'Texto':'NÚMERO DE HORAS SEMANAIS INVÁLIDO'},
            {'key':'DC', 'Texto':'SALÁRIO DE CONTRIBUIÇÃO INSS INVÁLIDO'},
            {'key':'DD', 'Texto':'SALÁRIO DE CONTRIBUIÇÃO FGTS INVÁLIDO'},
            {'key':'DE', 'Texto':'VALOR TOTAL DOS PROVENTOS INVÁLIDO'},
            {'key':'DF', 'Texto':'VALOR TOTAL DOS DESCONTOS INVÁLIDO'},
            {'key':'DG', 'Texto':'VALOR LÍQUIDO NÃO NUMÉRICO'},
            {'key':'DH', 'Texto':'VALOR LIQ. INFORMADO DIFERE DO CALCULADO'},
            {'key':'DI', 'Texto':'VALOR DO SALÁRIO-BASE INVÁLIDO'},
            {'key':'DJ', 'Texto':'BASE DE CÁLCULO IRRF INVÁLIDA'},
            {'key':'DK', 'Texto':'BASE DE CÁLCULO FGTS INVÁLIDA'},
            {'key':'DL', 'Texto':'FORMA DE PAGAMENTO INCOMPATÍVEL COM HOLERITE'},
            {'key':'DM', 'Texto':'E-MAIL DO FAVORECIDO INVÁLIDO'},
            {'key':'DV', 'Texto':'DOC / TED DEVOLVIDO PELO BANCO FAVORECIDO'},
            {'key':'D0', 'Texto':'FINALIDADE DO HOLERITE INVÁLIDA'},
            {'key':'D1', 'Texto':'MÊS DE COMPETENCIA DO HOLERITE INVÁLIDA'},
            {'key':'D2', 'Texto':'DIA DA COMPETENCIA DO HOLETITE INVÁLIDA'},
            {'key':'D3', 'Texto':'CENTRO DE CUSTO INVÁLIDO'},
            {'key':'D4', 'Texto':'CAMPO NUMÉRICO DA FUNCIONAL INVÁLIDO'},
            {'key':'D5', 'Texto':'DATA INÍCIO DE FÉRIAS NÃO NUMÉRICA'},
            {'key':'D6', 'Texto':'DATA INÍCIO DE FÉRIAS INCONSISTENTE'},
            {'key':'D7', 'Texto':'DATA FIM DE FÉRIAS NÃO NUMÉRICO'},
            {'key':'D8', 'Texto':'DATA FIM DE FÉRIAS INCONSISTENTE'},
            {'key':'D9', 'Texto':'NÚMERO DE DEPENDENTES IR INVÁLIDO'},
            {'key':'EM', 'Texto':'CONFIRMAÇÃO DE OP EMITIDA'},
            {'key':'EX', 'Texto':'DEVOLUÇÃO DE OP NÃO SACADA PELO FAVORECIDO'},
            {'key':'E0', 'Texto':'TIPO DE MOVIMENTO HOLERITE INVÁLIDO'},
            {'key':'E1', 'Texto':'VALOR 01 DO HOLERITE / INFORME INVÁLIDO'},
            {'key':'E2', 'Texto':'VALOR 02 DO HOLERITE / INFORME INVÁLIDO'},
            {'key':'E3', 'Texto':'VALOR 03 DO HOLERITE / INFORME INVÁLIDO'},
            {'key':'E4', 'Texto':'VALOR 04 DO HOLERITE / INFORME INVÁLIDO'},
            {'key':'FC', 'Texto':'PAGAMENTO EFETUADO ATRAVÉS DE FINANCIAMENTO COMPROR'},
            {'key':'FD', 'Texto':'PAGAMENTO EFETUADO ATRAVÉS DE FINANCIAMENTO DESCOMPROR'},
            {'key':'HA', 'Texto':'ERRO NO LOTE'},
            {'key':'HM', 'Texto':'ERRO NO REGISTRO HEADER DE ARQUIVO'},
            {'key':'IB', 'Texto':'VALOR DO DOCUMENTO INVÁLIDO'},
            {'key':'IC', 'Texto':'VALOR DO ABATIMENTO INVÁLIDO'},
            {'key':'ID', 'Texto':'VALOR DO DESCONTO INVÁLIDO'},
            {'key':'IE', 'Texto':'VALOR DA MORA INVÁLIDO'},
            {'key':'IF', 'Texto':'VALOR DA MULTA INVÁLIDO'},
            {'key':'IG', 'Texto':'VALOR DA DEDUÇÃO INVÁLIDO'},
            {'key':'IH', 'Texto':'VALOR DO ACRÉSCIMO INVÁLIDO'},
            {'key':'II', 'Texto':'DATA DE VENCIMENTO INVÁLIDA / QR CODE EXPIRADO'},
            {'key':'IJ', 'Texto':'COMPETÊNCIA / PERÍODO REFERÊNCIA / PARCELA INVÁLIDA'},
            {'key':'IK', 'Texto':'TRIBUTO NÃO LIQUIDÁVEL VIA SISPAG OU NÃO CONVENIADO COM ITAÚ'},
            {'key':'IL', 'Texto':'CÓDIGO DE PAGAMENTO / EMPRESA /RECEITA INVÁLIDO'},
            {'key':'IM', 'Texto':'TIPO X FORMA NÃO COMPATÍVEL'},
            {'key':'IN', 'Texto':'BANCO/AGÊNCIA NÃO CADASTRADOS'},
            {'key':'IO', 'Texto':'DAC / VALOR / COMPETÊNCIA / IDENTIFICADOR DO LACRE INVÁLIDO /IDENTIFICAÇÃO DO QR CODE INVÁLIDO'},
            {'key':'IP', 'Texto':'DAC DO CÓDIGO DE BARRAS INVÁLIDO / ERRO NA VALIDAÇÃO DO QR CODE'},
            {'key':'IQ', 'Texto':'DÍVIDA ATIVA OU NÚMERO DE ETIQUETA INVÁLIDO'},
            {'key':'IR', 'Texto':'PAGAMENTO ALTERADO'},
            {'key':'IS', 'Texto':'CONCESSIONÁRIA NÃO CONVENIADA COM ITAÚ'},
            {'key':'IT', 'Texto':'VALOR DO TRIBUTO INVÁLIDO'},
            {'key':'IU', 'Texto':'VALOR DA RECEITA BRUTA ACUMULADA INVÁLIDO'},
            {'key':'IV', 'Texto':'NÚMERO DO DOCUMENTO ORIGEM / REFERÊNCIA INVÁLIDO'},
            {'key':'IX', 'Texto':'CÓDIGO DO PRODUTO INVÁLIDO'},
            {'key':'LA', 'Texto':'DATA DE PAGAMENTO DE UM LOTE ALTERADA'},
            {'key':'LC', 'Texto':'LOTE DE PAGAMENTOS CANCELADO'},
            {'key':'NA', 'Texto':'PAGAMENTO CANCELADO POR FALTA DE AUTORIZAÇÃO'},
            {'key':'NB', 'Texto':'IDENTIFICAÇÃO DO TRIBUTO INVÁLIDA'},
            {'key':'NC', 'Texto':'EXERCÍCIO (ANO BASE) INVÁLIDO'},
            {'key':'ND', 'Texto':'CÓDIGO RENAVAM NÃO ENCONTRADO/INVÁLIDO'},
            {'key':'NE', 'Texto':'UF INVÁLIDA'},
            {'key':'NF', 'Texto':'CÓDIGO DO MUNICÍPIO INVÁLIDO'},
            {'key':'NG', 'Texto':'PLACA INVÁLIDA'},
            {'key':'NH', 'Texto':'OPÇÃO/PARCELA DE PAGAMENTO INVÁLIDA'},
            {'key':'NI', 'Texto':'TRIBUTO JÁ FOI PAGO OU ESTÁ VENCIDO'},
            {'key':'NR', 'Texto':'OPERAÇÃO NÃO REALIZADA'},
            {'key':'PD', 'Texto':'AQUISIÇÃO CONFIRMADA (EQUIVALE A OCORRÊNCIA 02 NO LAYOUT DE RISCO SACADO)'},
            {'key':'RJ', 'Texto':'REGISTRO REJEITADO'},
            {'key':'RS', 'Texto':'PAGAMENTO DISPONÍVEL PARA ANTECIPAÇÃO NO RISCO SACADO – MODALIDADE RISCO SACADO PÓS AUTORIZADO'},
            {'key':'SS', 'Texto':'PAGAMENTO CANCELADO POR INSUFICIÊNCIA DE SALDO / LIMITE DIÁRIO DE PAGTO EXCEDIDO'},
            {'key':'TA', 'Texto':'LOTE NÃO ACEITO - TOTAIS DO LOTE COM DIFERENÇA'},
            {'key':'TI', 'Texto':'TITULARIDADE INVÁLIDA'},
            {'key':'X1', 'Texto':'FORMA INCOMPATÍVEL COM LAYOUT 010'},
            {'key':'X2', 'Texto':'NÚMERO DA NOTA FISCAL INVÁLIDO'},
            {'key':'X3', 'Texto':'IDENTIFICADOR DE NF/CNPJ INVÁLIDO'},
            {'key':'X4', 'Texto':'FORMA 32 INVÁLIDA'},
            {'key':'X5', 'Texto':'FORMA 33 INVÁLIDA'},
            {'key':'X6', 'Texto':'FORMA 34 INVÁLIDA'}
        ];
    }

    buscaErro(erro){
        let key = erro.toUpperCase();
        let erroEncontrado = this.erros.find((x) => x.key === key);
        return erroEncontrado ? erroEncontrado.Texto : '';
    }

}
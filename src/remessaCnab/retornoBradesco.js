export class RetornoItau {
    constructor(){
        this.erros = [
            {'key':'00', 'Texto':'Crédito ou Débito Efetivado - Este código indica que o pagamento foi confirmado '},
            {'key':'01', 'Texto':'Insuficiência de Fundos - Débito Não Efetuado'},
            {'key':'02', 'Texto':'Crédito ou Débito Cancelado pelo Pagador/Credor'},
            {'key':'03', 'Texto':'Débito Autorizado pela Agência – Efetuado'},
            {'key':'AA', 'Texto':'Controle Inválido Campos de controle do arquivo de Remessa (Banco, Lote, Registro) inválidos.'},
            {'key':'AB', 'Texto':'Tipo de Operação Inválido'},
            {'key':'AC', 'Texto':'Tipo de Serviço Inválido'},
            {'key':'AD', 'Texto':'Forma de Lançamento Inválida'},
            {'key':'AE', 'Texto':'Tipo/Número de Inscrição Inválido'},
            {'key':'AF', 'Texto':'Código de Convênio Inválido'},
            {'key':'AG', 'Texto':'Agência/Conta Corrente/DV Inválido'},
            {'key':'AH', 'Texto':'Nº Sequencial do Registro no Lote Inválido'},
            {'key':'AI', 'Texto':'Código de Segmento de Detalhe Inválido'},
            {'key':'AJ', 'Texto':'Tipo de Movimento Inválido'},
            {'key':'AK', 'Texto':'Código da Câmara de Compensação do Banco Favorecido/Depositário Inválido'},
            {'key':'AL', 'Texto':'Código do Banco Favorecido ou Depositário Inválido'},
            {'key':'AM', 'Texto':'Agência Mantenedora da Conta Corrente do Favorecido Inválida'},
            {'key':'AN', 'Texto':'Conta Corrente/DV do Favorecido Inválido'},
            {'key':'AO', 'Texto':'Nome do Favorecido Não Informado'},
            {'key':'AP', 'Texto':'Data Lançamento Inválido'},
            {'key':'AQ', 'Texto':'Tipo/Quantidade da Moeda Inválido'},
            {'key':'AR', 'Texto':'Valor do Lançamento Inválido'},
            {'key':'AS', 'Texto':'Aviso ao Favorecido - Identificação Inválida'},
            {'key':'AT', 'Texto':'Tipo/Número de Inscrição do Favorecido Inválido'},
            {'key':'AU', 'Texto':'Logradouro do Favorecido Não Informado'},
            {'key':'AV', 'Texto':'Nº do Local do Favorecido Não Informado'},
            {'key':'AW', 'Texto':'Cidade do Favorecido Não Informada'},
            {'key':'AX', 'Texto':'CEP/Complemento do Favorecido Inválido'},
            {'key':'AY', 'Texto':'Sigla do Estado do Favorecido Inválida'},
            {'key':'AZ', 'Texto':'Código/Nome do Banco Depositário Inválido'},
            {'key':'BA', 'Texto':'Código/Nome da Agência Depositária Não Informado'},
            {'key':'BB', 'Texto':'Seu Número Inválido'},
            {'key':'BC', 'Texto':'Nosso Número Inválido'},
            {'key':'BD', 'Texto':'Inclusão Efetuada com Sucesso'},
            {'key':'BE', 'Texto':'Alteração Efetuada com Sucesso'},
            {'key':'BF', 'Texto':'Exclusão Efetuada com Sucesso'},
            {'key':'BG', 'Texto':'Agência/Conta Impedida Legalmente'},
            {'key':'BH', 'Texto':'Empresa não pagou salário - Falecimento do mutuário'},
            {'key':'BJ', 'Texto':'Empresa não enviou remessa do mutuário'},
            {'key':'BK', 'Texto':'Empresa não enviou remessa no vencimento'},
            {'key':'BL', 'Texto':'Valor da parcela inválida'},
            {'key':'BM', 'Texto':'Identificação do contrato inválida'},
            {'key':'BN', 'Texto':'Operação de Consignação Incluída com Sucesso'},
            {'key':'BO', 'Texto':'Operação de Consignação Alterada com Sucesso'},
            {'key':'BP', 'Texto':'Operação de Consignação Excluída com Sucesso'},
            {'key':'BQ', 'Texto':'Operação de Consignação Liquidada com Sucesso'},
            {'key':'CA', 'Texto':'Código de Barras - Código do Banco Inválido'},
            {'key':'CB', 'Texto':'Código de Barras - Código da Moeda Inválido'},
            {'key':'CC', 'Texto':'Código de Barras - Dígito Verificador Geral Inválido'},
            {'key':'CD', 'Texto':'Código de Barras - Valor do Título Divergente/Inválido.'},
            {'key':'CE', 'Texto':'Código de Barras - Campo Livre Inválido'},
            {'key':'CF', 'Texto':'Valor do Documento Inválido'},
            {'key':'CG', 'Texto':'Valor do Abatimento Inválido'},
            {'key':'CH', 'Texto':'Valor do Desconto Inválido'},
            {'key':'CI', 'Texto':'Valor de Mora Inválido'},
            {'key':'CJ', 'Texto':'Valor da Multa Inválido'},
            {'key':'CK', 'Texto':'Valor do IR Inválido'},
            {'key':'CL', 'Texto':'Valor do ISS Inválido'},
            {'key':'CM', 'Texto':'Valor do IOF Inválido'},
            {'key':'CN', 'Texto':'Valor de Outras Deduções Inválido'},
            {'key':'CO', 'Texto':'Valor de Outros Acréscimos Inválido'},
            {'key':'CP', 'Texto':'Valor do INSS Inválido'},
            {'key':'HA', 'Texto':'Lote Não Aceito'},
            {'key':'HB', 'Texto':'Inscrição da Empresa Inválida para o Contrato'},
            {'key':'HC', 'Texto':'Convênio com a Empresa Inexistente/Inválido para o Contrato'},
            {'key':'HD', 'Texto':'Agência/Conta Corrente da Empresa Inexistente/Inválido para o Contrato'},
            {'key':'HE', 'Texto':'Tipo de Serviço Inválido para o Contrato'},
            {'key':'HF', 'Texto':'Conta Corrente da Empresa com Saldo Insuficiente'},
            {'key':'HG', 'Texto':'Lote de Serviço Fora de Sequência'},
            {'key':'HH', 'Texto':'Lote de Serviço Inválido'},
            {'key':'HI', 'Texto':'Arquivo não aceito'},
            {'key':'HJ', 'Texto':'Tipo de Registro Inválido'},
            {'key':'HK', 'Texto':'Código Remessa / Retorno Inválido'},
            {'key':'HL', 'Texto':'Versão de layout inválida'},
            {'key':'HM', 'Texto':'Mutuário não identificado'},
            {'key':'HN', 'Texto':'Tipo do benefício não permite empréstimo'},
            {'key':'HO', 'Texto':'Benefício cessado/suspenso'},
            {'key':'HP', 'Texto':'Benefício possui representante legal'},
            {'key':'HQ', 'Texto':'Benefício é do tipo PA (Pensão alimentícia)'},
            {'key':'HR', 'Texto':'Quantidade de contratos permitida excedida'},
            {'key':'HS', 'Texto':'Benefício não pertence ao Banco informado'},
            {'key':'HT', 'Texto':'Início do desconto informado já ultrapassado'},
            {'key':'HU', 'Texto':'Número da parcela inválida'},
            {'key':'HV', 'Texto':'Quantidade de parcela inválida'},
            {'key':'HW', 'Texto':'Margem consignável excedida para o mutuário dentro do prazo do contrato'},
            {'key':'HX', 'Texto':'Empréstimo já cadastrado'},
            {'key':'HY', 'Texto':'Empréstimo inexistente'},
            {'key':'HZ', 'Texto':'Empréstimo já encerrado'},
            {'key':'H1', 'Texto':'Arquivo sem trailer'},
            {'key':'H2', 'Texto':'Mutuário sem crédito na competência'},
            {'key':'H3', 'Texto':'Não descontado – outros motivos'},
            {'key':'H4', 'Texto':'Retorno de Crédito não pago'},
            {'key':'H5', 'Texto':'Cancelamento de empréstimo retroativo'},
            {'key':'H6', 'Texto':'Outros Motivos de Glosa'},
            {'key':'H7', 'Texto':'Margem consignável excedida para o mutuário acima do prazo do contrato'},
            {'key':'H8', 'Texto':'Mutuário desligado do empregador'},
            {'key':'H9', 'Texto':'Mutuário afastado por licença'},
            {'key':'IA', 'Texto':'Primeiro nome do mutuário diferente do primeiro nome do movimento do censo ou diferente da base de'},
            {'key':'TA', 'Texto':'Lote Não Aceito - Totais do Lote com Diferença'},
            {'key':'YA', 'Texto':'Título Não Encontrado'},
            {'key':'YB', 'Texto':'Identificador Registro Opcional Inválido'},
            {'key':'YC', 'Texto':'Código Padrão Inválido'},
            {'key':'YD', 'Texto':'Código de Ocorrência Inválido'},
            {'key':'YE', 'Texto':'Complemento de Ocorrência Inválido'},
            {'key':'YF', 'Texto':'Alegação já Informada'},
            {'key':'ZA', 'Texto':'Agência/Conta do Favorecido Substituída'},
            {'key':'ZB', 'Texto':'Divergência entre o primeiro e último nome do beneficiário versus primeiro e último nome na Receita Federal'},
            {'key':'ZC', 'Texto':'Confirmação de Antecipação de Valor'},
            {'key':'ZD', 'Texto':'Antecipação Parcial de Valor'},
            {'key':'ZE', 'Texto':'Título bloqueado na base'},
            {'key':'ZF', 'Texto':'Sistema em contingência – título valor maior que referência'},
            {'key':'ZG', 'Texto':'Sistema em contingência – título vencido'},
            {'key':'ZH', 'Texto':'Sistema em contingência – título indexado'},
            {'key':'ZI', 'Texto':'Beneficiário divergente'},
            {'key':'ZJ', 'Texto':'Limite de pagamentos parciais excedidos'},
            {'key':'ZK', 'Texto':'Boleto já liquidado'},
            {'key':'5A', 'Texto':'Agendado sob lista de debito'},
            {'key':'5B', 'Texto':'Pagamento não autoriza sob lista de debito'},
            {'key':'5C', 'Texto':'Lista com mais de uma modalidade'},
            {'key':'5D', 'Texto':'Lista com mais de uma data de pagamento'},
            {'key':'5E', 'Texto':'Número de lista duplicado'},
            {'key':'5F', 'Texto':'Lista de debito vencida e não autorizada'},
            {'key':'5I', 'Texto':'Ordem de Pagamento emitida'},
            {'key':'5M', 'Texto':'Número de lista de debito invalida'},
            {'key':'5T', 'Texto':'Pagamento realizado em contrato na condição de TESTE'},
        ];
    }

    buscaErro(erro){
        let key = erro.toUpperCase();
        let erroEncontrado = this.erros.find((x) => x.key === key);
        return erroEncontrado ? erroEncontrado.Texto : '';
    }

}

exemplo de como utilizar a classe

```
import { Remessacnab } from './remessacnab.js';
export function buildRemessa(json) {
    const remessacnab = new Remessacnab();
    remessacnab.populeEmpresa(json.EMPRESA);
    json.DADOSPGTO.forEach(element => {
        remessacnab.populeDadosPgto(element)
    })
    return remessacnab.build();
}
```



Modelo Json de Entrada Para Geração da Remessa:
```
{
	"EMPRESA":{
		"banco":"341", /* 341 - itau ou 237 - bradesco */
		"cnpj":"12.345.678./0001-99",
		"tipoInscricao":"2",
		"convenio":"1234578", /* exclusivo bradesco */ 
		"tipoconta":"CC",
		"agencia":"1741",
		"agenciaDigito":"0",
		"contaCorrente":"005628",
		"digito":"-8",
		"nome":"Empresá Fulano LTDA--",
		"tipopagamento":"20",
		"endereco":"rua da empresa",
		"numero":"123",
		"complemento":"compl",
		"cidade":"cidadeEmpresa",
		"cep":"99.999-99",
		"estado":"PR",
		"numeroArquivo":"2" /* exclusivo bradesco -- numero sequencia de arquivo do bradesco gerado */
	},
	"DADOSPGTO":[
		{"banco":"341",
		 "agencia":"0043",
		 "agenciaDigito":"0",
		 "contaCorrente":"05500",
		 "digitoConta":"2",
		 "tipoconta":"CC",
	 	 "valor":"100.00",
 		 "nossonumero":"numerounico",
		 "favorecido":"nome do 523",
		 "cpfcnpj":"123.456.789-44",
		 "endereco":"rua da paz",
		 "numero":"123",
		 "bairro":"bairro",
		 "complemento":"compl",
		 "cidade":"cidadeEmpresa",
		 "cep":"99.999-99",
		 "estado":"PR",
		 "email":"email@email.com"
		},{
		 "banco":"237",
		 "agencia":"0001",
		 "agenciaDigito":"0",
		 "contaCorrente":"00012",
		 "digitoConta":"1",
		 "tipoconta":"CC",
	 	 "valor":"104.00",
 		 "nossonumero":"numerounico2",
		 "favorecido":"nome do 12",
		 "cpfcnpj":"123.456.789-44",
		 "endereco":"rua da paz",
		 "numero":"123",
		 "bairro":"bairro",
		 "complemento":"compl",
		 "cidade":"cidadeEmpresa",
		 "cep":"99.999-99",
		 "estado":"PR",
		 "email":"email@email.com"		
		},{
		 "banco":"001",
		 "agencia":"0001",
		 "agenciaDigito":"0",
		 "contaCorrente":"00012",
		 "digitoConta":"1",
		 "tipoconta":"CC",
	 	 "valor":"854.00",
 		 "nossonumero":"numerounico4",
		 "favorecido":"nome do 345",
		 "cpfcnpj":"123.456.789-44",
		 "endereco":"rua da paz",
		 "numero":"123",
		 "bairro":"bairro",
		 "complemento":"compl",
		 "cidade":"cidadeEmpresa",
		 "cep":"99.999-99",
		 "estado":"PR",
		 "email":"email@email.com"			
		},{
		 "banco":"237",
		 "agencia":"0011",
		 "agenciaDigito":"0",
		 "contaCorrente":"00512",
		 "digitoConta":"5",
	 	 "tipoconta":"CC",
		 "valor":"184.52",
 		 "nossonumero":"numerounico2",
		 "favorecido":"nome do 6789",
		 "cpfcnpj":"000.000.000-00",
		 "endereco":"rua da paz",
		 "numero":"123",
		 "bairro":"bairro",
		 "complemento":"compl",
		 "cidade":"cidadeEmpresa",
		 "cep":"99.999-99",
		 "estado":"PR",
		 "email":"email@email.com"			
		}
	]
}
```

Ao Processa o arquivo de retorno ira retornar um json no formato abaixo
Retorno -> 
```
{
	"banco": "341", /* 341 - itau ou 237 - bradesco */
	"retorno": [
		{
			"nossonumero": "000000017351691606IT",
			"valor": "2755.41",
			"datapg": "2023-06-16",
			"dataqt": "2023-06-16",
			"situacao": "PAGO",
			"erro1": "PAGAMENTO EFETUADO",
			"erro2": "",
			"erro3": "",
			"erro4": "",
			"erro5": ""
		},
		{
			"nossonumero": "000000017351701606IT",
			"valor": "2473.25",
			"datapg": "2023-06-16",
			"dataqt": "2023-06-16",
			"situacao": "PAGO",
			"erro1": "PAGAMENTO EFETUADO",
			"erro2": "",
			"erro3": "",
			"erro4": "",
			"erro5": ""
		},
		{
			"nossonumero": "000000017351711606IT",
			"valor": "1803.55",
			"datapg": "2023-06-16",
			"dataqt": "2023-06-16",
			"situacao": "PAGO",
			"erro1": "PAGAMENTO EFETUADO",
			"erro2": "",
			"erro3": "",
			"erro4": "",
			"erro5": ""
		}
	]
}
```
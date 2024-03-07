
exemplo de como utilizar a classe

```
import { Remessacnab } from './remessacnab.js';<br>
export function buildRemessa(json) {<br>
    const remessacnab = new Remessacnab();<br>
    remessacnab.populeEmpresa(json.EMPRESA);<br>
    json.DADOSPGTO.forEach(element => {<br>
        remessacnab.populeDadosPgto(element)<br>
    })<br>
    return remessacnab.build();<br>
}
```



Modelo Json de Entrada Para Geração da Remessa:<br>
{
	"EMPRESA":{<br>
		"banco":"341",<br>
		"cnpj":"12.345.678./0001-99",<br>
		"tipoInscricao":"2",<br>
		"tipoconta":"CC",<br>
		"agencia":"1741",<br>
		"contaCorrente":"005628",<br>
		"digito":"-8",<br>
		"nome":"Empresá Fulano LTDA--",<br>
		"tipopagamento":"20",<br>
		"endereco":"rua da empresa",<br>
		"numero":"123",<br>
		"complemento":"compl",<br>
		"cidade":"cidadeEmpresa",<br>
		"cep":"99.999-99",<br>
		"estado":"PR"<br>
	},<br>
	"DADOSPGTO":[<br>
		{"banco":"341",<br>
		 "agencia":"0043",<br>
		 "contaCorrente":"05500",<br>
		 "digitoConta":"2",<br>
		 "tipoconta":"CC",<br>
	 	 "valor":"100.00",<br>
 		 "nossonumero":"numerounico",<br>
		 "favorecido":"nome do 523",<br>
		 "cpfcnpj":"123.456.789-44",<br>
		 "endereco":"rua da paz",<br>
		 "numero":"123",<br>
		 "bairro":"bairro",<br>
		 "complemento":"compl",<br>
		 "cidade":"cidadeEmpresa",<br>
		 "cep":"99.999-99",<br>
		 "estado":"PR",<br>
		 "email":"email@email.com"<br>
		},{
		 "banco":"237",<br>
		 "agencia":"0001",<br>
		 "contaCorrente":"00012",<br>
		 "digitoConta":"1",<br>
		 "tipoconta":"CC",<br>
	 	 "valor":"104.00",<br>
 		 "nossonumero":"numerounico2",<br>
		 "favorecido":"nome do 12",<br>
		 "cpfcnpj":"123.456.789-44",<br>
		 "endereco":"rua da paz",<br>
		 "numero":"123",<br>
		 "bairro":"bairro",<br>
		 "complemento":"compl",<br>
		 "cidade":"cidadeEmpresa",<br>
		 "cep":"99.999-99",<br>
		 "estado":"PR",<br>
		 "email":"email@email.com"		<br>
		},{
		 "banco":"001",<br>
		 "agencia":"0001",<br>
		 "contaCorrente":"00012",<br>
		 "digitoConta":"1",<br>
		 "tipoconta":"CC",<br>
	 	 "valor":"854.00",<br>
 		 "nossonumero":"numerounico4",<br>
		 "favorecido":"nome do 345",<br>
		 "cpfcnpj":"123.456.789-44",<br>
		 "endereco":"rua da paz",<br>
		 "numero":"123",<br>
		 "bairro":"bairro",<br>
		 "complemento":"compl",<br>
		 "cidade":"cidadeEmpresa",<br>
		 "cep":"99.999-99",<br>
		 "estado":"PR",<br>
		 "email":"email@email.com"			<br>
		},{<br>
		 "banco":"237",<br>
		 "agencia":"0011",<br>
		 "contaCorrente":"00512",<br>
		 "digitoConta":"5",<br>
	 	 "tipoconta":"CC",<br>
		 "valor":"184.52",<br>
 		 "nossonumero":"numerounico2",<br>
		 "favorecido":"nome do 6789",<br>
		 "cpfcnpj":"000.000.000-00",<br>
		 "endereco":"rua da paz",<br>
		 "numero":"123",<br>
		 "bairro":"bairro",<br>
		 "complemento":"compl",<br>
		 "cidade":"cidadeEmpresa",<br>
		 "cep":"99.999-99",<br>
		 "estado":"PR",<br>
		 "email":"email@email.com"			<br>
		}
	]
	
}


Retorno ->
{
	"banco": "341",
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
		},
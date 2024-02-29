import { Remessacnab } from './remessacnab.js';
export function buildRemessa(json) {
    const remessacnab = new Remessacnab();
    //console.log(json)
    // console.log('buildRemessa');
    
    remessacnab.populeEmpresa(json.EMPRESA);
    json.DADOSPGTO.forEach(element => {
        remessacnab.populeDadosPgto(element)
    })
    return remessacnab.build();

}
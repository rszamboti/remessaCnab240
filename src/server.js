import http from 'node:http';
import fs from 'node:fs';

import { json } from './remessaCnab/json.js';
import { buildRemessa } from './remessaCnab/buildRemessa.js';
import { buildRetorno } from './remessaCnab/buildRetorno.js';

const server = http.createServer(async (req, res) => {
    await json(req, res);    

    const { method, url, body, headers, query, params, path } = req;
    
    //console.log({ method, url, body, headers, query, params, path, });
     
    if(method == 'POST' && url == '/remessacnab'){
      let bodyRemessa = JSON.parse(body.toString())
      //console.log(bodyRemessa)
      
      let remessa = buildRemessa(bodyRemessa);
      let nomeArquivo = `REMESSA.REM`;
      fs.writeFile(nomeArquivo, remessa, (err) => {
          if (err) {
            console.error('Erro ao escrever o arquivo:', err);
            res.statusCode = 500;
            res.end('Erro ao salvar o arquivo.');
            return; 
          }
    
          fs.readFile(nomeArquivo, (err, data) => {
            if (err) {
              console.error('Erro ao ler o arquivo:', err);
              res.statusCode = 500;
              res.end('Erro ao ler o arquivo.');
              return;
            }
    
            res.setHeader('Content-Disposition', `attachment; filename=${nomeArquivo}`);
            res.setHeader('Content-Type', 'text/plain');
            res.write(data);
            res.end(() => {
              fs.unlink(nomeArquivo, (err) => {
                if (err) {
                  console.error('Erro ao excluir o arquivo:', err);
                }
                console.log('Arquivo excluído com sucesso.');
              });
            });
          });
        });
      //res.end(JSON.stringify(remessa))
    }else if(method == 'POST' && url == '/retornocnab'){
      let bodyretorno = body.toString();
      let retorno = buildRetorno(bodyretorno);
      return res.end(JSON.stringify(retorno))
      //return res.writeHead(404).end();
    }else{
      return res.writeHead(404).end();
    }

    
    
});

server.listen(3000);
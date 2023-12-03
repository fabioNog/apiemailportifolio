
## Iniciando 
Para você executar este Projeto, você nescessitará ter o [Node.js](https://nodejs.org/en) de prefêrencia na versão Latest 18.16.0

## Siga o passo a passo sequencialmente para dar certo 

clone este repositório no local em que você preferir executando o comando git [`clone git@github.com:fabioNog/beerstylebackend.git`]

Com um editor de preferência abra o projeto e crie dentro do diretorio raiz um arquivo dontenv (.env) com as seguintes informações 

DB_DIALECT = nome_do_dialeto_do_seu_banco
DB_HOST = host_do_seu_banco
DB_USERNAME = nome_do_seu_banco
DB_PASSWORD = sua_senha
DB_DATABASE = nome_do_database
DB_PORT = porta_do_banco

NODE_ENV  = url_aceita_pelo_cors    -- exemplo localhost:3000

SPOTIFY_API_URL = SUA_SPOTIFY_API_URL;
SPOTIFY_CLIENT_ID = SEU_SPOTIFY_CLIENT_ID;
SPOTIFY_CLIENT_SECRET = SEU_SPOTIFY_CLIENT_SECRET;

No diretorio raiz, execute o comando de instalação [`yarn install` && `yarn preprod` ou `npm install` && `npm run preprod`  ].

## Começando

Para começar, após instalado corretamente, execute o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
```





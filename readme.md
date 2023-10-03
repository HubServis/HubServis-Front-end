## **DOCUMENTAÇÃO**

#### **GUIA DE INSTALAÇÃO**

Primeiramente é importante vc ter as seguintes dependências intaladas no seu PC.
- node
- npm ou pnpm

Há duas opções para rodar esse projeto
- A primeira é rodar o front-end e o back-end por meio do docker compose.
- A segunda é rodar apenas o front-end sem o docker compose.

Se vc optar por rodar o projeto usando o docker, basta apenas executar o seguinte comando: `docker compose up`
- Ele irá instalar as dependências caso necessário e colocará o front-end e o back-end online

Agora se vc optar pela segunda opção, vc precisa seguir o seguinte passo a passo:
- `npm i` ou `npm install`
- `npm run dev` -> para rodar em modo dev
- `npm start` -> ainda não implementado, mas servirá para rodar em modo de produção

---
## **Anotações**

### Check list
- [x] arrumar responsividade calendario e menu
- [] arrumar header managment para cada tela individualmente
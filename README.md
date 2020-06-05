<!-- Monstando ambiente -->

    <!-- Instalações  -->
    npm install -y
    npm install express
    npm install @types/express -D 
    npm install ts-node -D
    npm install typescript -D
    npm install ts-node-dev -D
    npm install knex
    npm install sqlite3
    npm install cors
    npm install  @types/cors -D 



    <!-- Criar arquivo -->
    1)  npx tsc --init

    2) criar uma basta de database e um arquivo de conexão
    Exemplo
    /*
        import knex from 'knex';
        import path from 'path';


        const connection = knex({
            client: 'sqlite3',
            connection: {
                filename: path.resolve(__dirname, 'database.sqlite')
            }
        })

        export default connection;
    */

    3) criar na raiz do projeto um arquivo knexfile.ts
    4) Criar arquivo .gitignore
        node_modules
    5)Criar arquivo PRocfile (Heroku)


    <!-- Baixar tema -->

    SQLite
    ctrl+shift+p  => sqlite => SqLite:Open Database => [Escolher arquivo de banco]

    exibira no canto inferior esquerdo "SQLITE EXPLORER"

    <!-- Run -->
    npx ts-node-dev src/server.ts
    npx knex migrate:latest --knexfile knexfile.ts migrate:latest


    <!-- Script execução -->
    npm run dev
    npm run knex:migrate
    npm run knex:seed
<!-- Fim -->


git remote add skill-cap https://github.com/JorgeEmanuelRabelo/skill-sicap.git
const supertest = require('supertest');
const app = require('../../src/app');
const faker = require('faker');

describe('Testar funcionalidades de usuários', () => {
    it('deve inserir um usuário quando chamar a rota de criação', async () => {
        const usuario = {
            nome: faker.name.findName(),
            email: faker.internet.email(),
            password: faker.internet.password()
        }

        const response = await supertest(app)
                            .post('/usuarios')
                            .send(usuario);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('msg');
        expect(response.body.msg).toBe('Usuário inserido com sucesso!');
        expect(response.body).toHaveProperty('usuario');
        
        let usuarioRecebido = {
            nome: response.body.usuario.nome,
            email: response.body.usuario.email,
            password: response.body.usuario.password
        }

        expect(usuarioRecebido).toStrictEqual(usuario);

    });

    it('deve retornar erro ao esquecer o campo nome', async () => {
        const usuario = {
            email: faker.internet.email(),
            password: faker.internet.password()
        }

        const response = await supertest(app)
                            .post('/usuarios')
                            .send(usuario);

        expect(response.status).toBe(404);

    });

    it('deve listar todos os usuários quando chamar a rota de listagem', async () => {

    });

    it('deve atualizar usuario quando chamar a rota de atualização', async () => {

    });

    it('deve deletar usuário quando chamar a rota de deleção', async () => {

    });
})
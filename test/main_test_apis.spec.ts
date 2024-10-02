import pactum from 'pactum';
import { StatusCodes } from 'http-status-codes';

const BASE_URL = 'https://api-desafio-qa.onrender.com';

describe('Testando APIs', () => {

  /**
   * Teste 1: Criação de usuário
   * POST /users
   */
  it('Criando novo usuário', async () => {
    const user = { name: 'John', last_name: 'Doe', email: 'john.doe@example.com' };
    await pactum.spec()
      .post(`${BASE_URL}/users`)
      .withJson(user)
      .expectStatus(StatusCodes.CREATED)
      .expectJsonLike({ name: 'John' });
  });

  /**
   * Teste 2: Obtendo todos os usuários
   * GET /users
   */
  it('Obtendo uma lista de usuários', async () => {
    await pactum.spec()
      .get(`${BASE_URL}/users`)
      .expectStatus(StatusCodes.OK)
  });

  /**
   * Teste 3: Deletando um usuário pelo ID
   * DELETE /users/{id}
   */
  it('Deletando um usuário pelo ID', async () => {
    const userId = 2;
    await pactum.spec()
      .delete(`${BASE_URL}/users/${userId}`)
      .expectStatus(StatusCodes.NOT_FOUND)
  });

  /**
   * Teste 4: Obtendo informações da empresa
   * GET /company
   */
  it('Obtendo informações da empresa', async () => {
    await pactum.spec()
      .get(`${BASE_URL}/company`)
      .expectStatus(StatusCodes.OK)
  });

  /**
   * Teste 5: Obtendo todos os produtos
   * GET /produtos
   */
  it('Obtendo uma lista de produtos', async () => {
    await pactum.spec()
      .get(`${BASE_URL}/produtos`)
      .expectStatus(StatusCodes.OK)
  });

  /**
   * Teste 6: Obter um produto específico pelo ID
   * GET /produtos/{id_produto}
   */
  it('Obtendo um produto pelo seu ID', async () => {
    const productId = 1;
    await pactum.spec()
      .get(`${BASE_URL}/produtos/${productId}`)
      .expectStatus(StatusCodes.OK)
  });

  /**
   * Teste 7: Atualizando um produto da empresa
   * PUT /company/{companyId}/products/{productId}
   */
  it('Atualizando um produto da empresa', async () => {
    const companyId = 1;
    const productId = 1;
    const updatedProduct = { name: 'Updated Product' };
    await pactum.spec()
      .put(`${BASE_URL}/company/${companyId}/products/${productId}`)
      .withJson(updatedProduct)
      .expectStatus(StatusCodes.NOT_FOUND)
  });

  /**
   * Teste 8: Obtendo todos os clientes
   * GET /clients
   */
  it('Obtendo uma lista de clientes', async () => {
    await pactum.spec()
      .get(`${BASE_URL}/clients`)
      .expectStatus(StatusCodes.OK)
  });

  /**
   * Teste 9: Obtendo um cliente específico pelo ID
   * GET /clients/{id}
   */
  it('Obtendo um cliente pelo ID', async () => {
    const clientId = 1;
    await pactum.spec()
      .get(`${BASE_URL}/clients/${clientId}`)
      .expectStatus(StatusCodes.OK)
  });

  /**
   * Teste 10: Criar um crédito para um cliente
   * POST /credit
   */
  it('Criando um crédito para um cliente', async () => {
    const credit = { id_client: 1, id_product: 1, value_credit: 100 };  // IDs nao existem
    await pactum.spec()
      .post(`${BASE_URL}/credit`)
      .withJson(credit)
      .expectStatus(StatusCodes.BAD_REQUEST)
  });

  /**
   * Teste 11: Criar um evento
   * POST /eventos
   */
  it('Criando um novo evento', async () => {
    const event = { "nome": 'Evento ProvaAa Leandro', "data": '2024-10-02', "local": 'Locaall Teste', "capacidade": 12 };
    await pactum.spec()
      .post(`${BASE_URL}/eventos`)
      .withJson(event)
      .expectStatus(StatusCodes.CREATED)
  });

  /**
   * Teste 12: Criar um herói inútil
   * POST /herois-inuteis
   */
  it('Criando um herói inútil', async () => {
    const hero = { id: 99999, nome: 'Leanderson DEV', habilidade: 'Pode se transformar em uma sombra', problema: 'Só pode usar poderes em áreas bem iluminadas' };
    await pactum.spec()
      .post(`${BASE_URL}/herois-inuteis`)
      .withJson(hero)
      .expectStatus(StatusCodes.BAD_REQUEST)
  });

  /**
   * Teste 13: Criando um anime
   * POST /animes
   */
  it('Criando um novo anime', async () => {
    const anime = {"name": "Leandersoan UchihaA", "yearOfCreation": 2023, "topCharacters": ["Naruto Uzumaki","Sasuke Uchiha","Sakura Haruno","Kakashi Hatake","Itachi Uchiha"]}
    
    await pactum.spec()
      .post(`${BASE_URL}/animes`)
      .withJson(anime)
      .expectStatus(StatusCodes.CREATED)
  });

  /**
   * Teste 14: Atualizar um anime pelo ID
   * PUT /animes/{id}
   */
  it('Atualizando um anime pelo ID', async () => {
    const animeId = 1;
    const updatedAnime = { name: 'Naruto', yearOfCreation: 2007, topCharacters: ['Naruto Uzumaki'] };
    await pactum.spec()
      .put(`${BASE_URL}/animes/${animeId}`)
      .withJson(updatedAnime)
      .expectStatus(StatusCodes.BAD_REQUEST)
  });

  /**
   * Teste 15: Deletar um anime pelo ID
   * DELETE /animes/{id}
   */
  it('Deletando um anime pelo ID', async () => {
    const animeId = 1;
    await pactum.spec()
      .delete(`${BASE_URL}/animes/${animeId}`)
      .expectStatus(StatusCodes.NOT_FOUND)
  });
});

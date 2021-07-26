/// <reference types="cypress" />
import * as PostUser from '../../../requests/PostUser.request';
import * as GetUsers from '../../../requests/GetUsers.request';

describe('Cria usuários', () => {

    it('Cria um usuário válido e verifica se está na lista de todos os usuários', () => {
        PostUser.createUser().should((responseCreateUser) => {
            const userId = responseCreateUser.body.data.id;
            expect(responseCreateUser.status).to.eq(200);
            expect(responseCreateUser.body.code).to.eq(201);
            GetUsers.allUsers().then((response) => {
                var lastPage = response.body.meta.pagination.pages
                cy.log('Capturado o número total de páginas')
                GetUsers.inPage(lastPage).should((newResp) => {
                    var hasId = false
                    newResp.body.data.forEach(element => {
                        console.log(`Visitando elemento de id=${element.id} e comparando com id=${userId}`)
                        if (element.id == userId) {
                            hasId = true
                        }
                    })
                    expect(hasId).to.be.true
                })
            })
        })
    });
});
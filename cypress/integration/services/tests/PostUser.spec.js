/// <reference types="cypress" />
import * as PostUser from '../../../requests/PostUser.request';
import * as GetUsers from '../../../requests/GetUsers.request';

describe('Cria usuários', () => {

    it('Cria um usuário válido', () => {
        PostUser.createUser().should((responseCreateUser) => {
            const userId = responseCreateUser.body.data.id;
            expect(responseCreateUser.status).to.eq(200);
            expect(responseCreateUser.body.code).to.eq(201);
            GetUsers.allUsers().then((response) => {
                var lastPage = response.body.meta.pagination.pages
                cy.log('Capturado o número total de páginas')
                GetUsers.inPage(lastPage).should((newResp) => {
                    newResp.body.data.forEach(element => {
                        cy.log("Buscando userId na Lista de Todos os Usuários...")
                        if (element.id == userId) {
                            expect(element.id).to.eq(userId)
                        }
                    })
                })
            })
        })
    });
});
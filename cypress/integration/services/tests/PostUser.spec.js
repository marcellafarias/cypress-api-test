/// <reference types="cypress" />
import * as PostUser from '../requests/PostUser.request';

describe('Cria usuários', () => {

    it('Cria um usuário válido', () => {
        PostUser.createUser().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.code).to.eq(201);
        
        })
    })
})
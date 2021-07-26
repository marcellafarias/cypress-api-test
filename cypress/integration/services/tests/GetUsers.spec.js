import * as GetUsers from '../requests/GetUsers.request';

describe('Lista todos os usuários', () => {

    it('Listar todos os usuários', () => {
        GetUsers.allUsers().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null
        })
    })
})
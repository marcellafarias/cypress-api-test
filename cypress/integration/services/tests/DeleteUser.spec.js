import * as DeleteUser from '../../../requests/DeleteUser.request';
import * as GetUsers from '../../../requests/GetUsers.request';
import * as PostUser from '../../../requests/PostUser.request';

describe('Exclui usuário', () => {

    it('Exclui usuário pelo id', () => {
        GetUsers.allUsers().then((responseAllUsers) => {
            cy.log(responseAllUsers)
            DeleteUser.deleteUser(responseAllUsers.body.data[0].id).should((responseDeleteUser) => {
                expect(responseDeleteUser.status).to.eq(200);
                expect(responseDeleteUser.body.code).to.eq(204);
            })
        })
    })
    it('Cria e Exclui usuário pelo id', () => {
        PostUser.createUser().then((responseCreateUser) => {
            DeleteUser.deleteUser(responseCreateUser.body.data.id).should((responseDeleteUser) => {
                expect(responseDeleteUser.status).to.eq(200);
                expect(responseDeleteUser.body.code).to.eq(204);
            })
        })
    });
});
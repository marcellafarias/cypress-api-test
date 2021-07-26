import * as DeleteUser from '../../../requests/DeleteUser.request';
import * as GetUsers from '../../../requests/GetUsers.request';
import * as PostUser from '../../../requests/PostUser.request';

describe('Exclui usuário', () => {

    it('Cria usuário, após o exclui pelo id e verifica se foi retirado da lista', () => {
        PostUser.createUser().then((responseCreateUser) => {
            const userId = responseCreateUser.body.data.id;
            DeleteUser.deleteUser(userId).should((responseDeleteUser) => {
                expect(responseDeleteUser.status).to.eq(200);
                expect(responseDeleteUser.body.code).to.eq(204);
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
                        expect(hasId).to.be.false
                    })
                })
            })
        });
    });

    it('Exclui o primeiro usuário pelo id e verifica na primeira página se ainda existe o id', () => {
        GetUsers.allUsers().then((responseAllUsers) => {
            const userId = responseAllUsers.body.data[0].id;
            DeleteUser.deleteUser(userId).should((responseDeleteUser) => {
                expect(responseDeleteUser.status).to.eq(200);
                expect(responseDeleteUser.body.code).to.eq(204);
                GetUsers.allUsers().then((response) => {
                    var hasId = false
                    response.body.data.forEach(element => {
                        console.log(`Visitando elemento de id=${element.id} e comparando com id=${userId}`)
                        if (element.id == userId) {
                            hasId = true
                        }
                    })
                    expect(hasId).to.be.false
                })
            })
        })
    });
});
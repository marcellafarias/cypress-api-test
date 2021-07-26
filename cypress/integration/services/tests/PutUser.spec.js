/// <reference types="cypress" />
import * as PutUser from '../../../requests/PutUser.request';
import * as GetUsers from '../../../requests/GetUsers.request';
import * as PostUser from '../../../requests/PostUser.request';

describe('Atualiza usuário', () => {

    it('Atualiza o nome do usuário pelo id', () => {
        GetUsers.allUsers().then((responseAllUsers) => {
            PutUser.updateUser(responseAllUsers.body.data[0].id).should((responseUpdateUser) => {
                expect(responseUpdateUser.status).to.eq(200);
                expect(responseUpdateUser.body.code).to.eq(200);
            })
        })
    })
    it('Cria e Atualiza o nome do usuário pelo id', () => {
        PostUser.createUser().then((responseCreateUser) => {
            PutUser.updateUser(responseCreateUser.body.data.id).should((responseUpdateUser) => {
                expect(responseUpdateUser.status).to.eq(200);
                expect(responseUpdateUser.body.code).to.eq(200);
            })
        })
    });
});
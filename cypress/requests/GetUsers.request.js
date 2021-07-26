/// <reference types="cypress"/>
function allUsers() {
    return cy.request({
        method: 'GET',
        url: '/users',
        failOnStatusCode: false,
    })
}

function onlyUser(idUser) {
    return cy.request({
        method: 'GET',
        url: `users/${idUser}`,
        failOnStatusCode: false,
    })
}

function inPage(page) {
    return cy.request({
        method: 'GET',
        url: `/users?page=${page}`,
        failOnStatusCode: false,
    })
}


export {
    allUsers,
    onlyUser,
    inPage
};
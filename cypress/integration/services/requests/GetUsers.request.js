/// <reference types="cypress"/>
function allUsers() {
    return cy.request({
        method: 'GET',
        url: '/users',
        failOnStatusCode: false,
    })
}

export {
    allUsers
};
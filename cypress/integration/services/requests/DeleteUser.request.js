/// <reference types="cypress" />

function deleteUser(idUser) {
    return cy.request({
        method: 'DELETE',
        url: `users/${idUser}`,
        headers: {
            'content-type': 'application/json',
            "Authorization": 'Bearer 2275e2cbbf8dc1d113b25fb018cdb2e07e088b35bb5f7b7c13ca160ed96a82ba'
        },
        failOnStatusCode: false
    })

}

export {
    deleteUser
};
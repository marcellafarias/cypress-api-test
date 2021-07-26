/// <reference types="cypress"/>

function updateUser(idUser) {
    return cy.request({
        method: 'PUT',
        url: `users/${idUser}`,
        headers: {
            'content-type': 'application/json',
            "Authorization": 'Bearer 2275e2cbbf8dc1d113b25fb018cdb2e07e088b35bb5f7b7c13ca160ed96a82ba'
        },
        body: {
            "name": "Marcella Test - Update Name",
        },
        failOnStatusCode: false
    })
}

export {
    updateUser
};
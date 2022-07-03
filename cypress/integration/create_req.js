describe('create new request(demand) desktop', () => {
    beforeEach(() => {
      cy.viewport(1440, 720)
      cy.visit('https://sciamp-cofxtu6c9-the-core.vercel.app/marketplace/create')
    })
    it('как авторизованный пользователь', {
        defaultCommandTimeout: 50000
      },() => {
       
        cy.login('Test1@gmail.com','Poiass098')
        cy.create_request('Реквест успешно создан')
    })
})

describe('create new request(demand) tablet', () => {
    beforeEach(() => {
      cy.viewport(1024, 1366)
      cy.visit('https://sciamp-cofxtu6c9-the-core.vercel.app/marketplace/create')
    })
    it('как авторизованный пользователь', {
        defaultCommandTimeout: 50000
      },() => {
       
        cy.login('Test1@gmail.com','Poiass098')
        cy.create_request('Реквест успешно создан')
    })

})

describe('create new request(demand) phone', () => {
    beforeEach(() => {
      cy.viewport(414, 896)
      cy.visit('https://sciamp-cofxtu6c9-the-core.vercel.app/marketplace/create')
    })
    it('как авторизованный пользователь', {
        defaultCommandTimeout: 50000
      },() => {
       
        cy.login('Test1@gmail.com','Poiass098')
        cy.create_request('Реквест успешно создан')
    })

})


describe('create new request(offer) desktop', () => {
    beforeEach(() => {
      cy.viewport(1440, 720)
      cy.visit('https://sciamp-cofxtu6c9-the-core.vercel.app/marketplace/create')
    })
    it('как авторизованный пользователь', {
        defaultCommandTimeout: 50000
      },() => {
       
        cy.login('Test1@gmail.com','Poiass098')
        cy.contains(' I am a specialist ').click()
        cy.create_request('Реквест успешно создан')
    })

})

describe('create new request(offer) tablet', () => {
    beforeEach(() => {
      cy.viewport(1024, 1366)
      cy.visit('https://sciamp-cofxtu6c9-the-core.vercel.app/marketplace/create')
    })
    it('как авторизованный пользователь', {
        defaultCommandTimeout: 50000
      },() => {
       
        cy.login('Test1@gmail.com','Poiass098')
        cy.contains(' I am a specialist ').click()
        cy.create_request('Реквест успешно создан')
    })

})

describe('create new request(offer) phone', () => {
    beforeEach(() => {
      cy.viewport(414, 896)
      cy.visit('https://sciamp-cofxtu6c9-the-core.vercel.app/marketplace/create')
    })
    it('как авторизованный пользователь', {
        defaultCommandTimeout: 50000
      },() => {
       
        cy.login('Test1@gmail.com','Poiass098')
        cy.contains(' I am a specialist ').click()
        cy.create_request('Реквест успешно создан')
    })

})
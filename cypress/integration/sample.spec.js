describe('test_churadata_hp', function() {
    it('test_recruitment', function() {
     cy.viewport(1440, 798);
     // churadataのHPにアクセス
     cy.visit('https://churadata.okinawa/');
     // 採用ページを開く
     cy.get('#mainvisual_top > .inner > .btn_blue > a > span').click();
     // データエンジニアの採用ページを開く
     cy.get('#gm > .flex > :nth-child(5) > a').click();
     cy.get(':nth-child(7) > :nth-child(3) > a').click();
     // システムエンジニアの採用ページを開く
     cy.get('#breadcrumb > :nth-child(2) > a').click();
     cy.get(':nth-child(7) > :nth-child(5) > a').click();
    })
})
import { NgGoodsPage } from './app.po';

describe('ng-goods App', function() {
  let page: NgGoodsPage;

  beforeEach(() => {
    page = new NgGoodsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

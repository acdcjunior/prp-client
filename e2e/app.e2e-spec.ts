import { PrpPage } from './app.po';

describe('prp App', function() {
  let page: PrpPage;

  beforeEach(() => {
    page = new PrpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

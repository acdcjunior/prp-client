import { PrpClientPage } from './app.po';

describe('prp-client App', function() {
  let page: PrpClientPage;

  beforeEach(() => {
    page = new PrpClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

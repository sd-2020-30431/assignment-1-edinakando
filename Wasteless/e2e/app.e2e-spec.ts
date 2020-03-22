import { WastelessPage } from './app.po';

describe('wasteless App', function() {
  let page: WastelessPage;

  beforeEach(() => {
    page = new WastelessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

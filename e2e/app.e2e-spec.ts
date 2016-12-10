import { WDDCA2Page } from './app.po';

describe('wddca2 App', function() {
  let page: WDDCA2Page;

  beforeEach(() => {
    page = new WDDCA2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

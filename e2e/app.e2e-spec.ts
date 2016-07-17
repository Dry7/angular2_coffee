import { CoffeePage } from './app.po';

describe('coffee App', function() {
  let page: CoffeePage;

  beforeEach(() => {
    page = new CoffeePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

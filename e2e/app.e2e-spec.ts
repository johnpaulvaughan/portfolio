import { JpvPage } from './app.po';

describe('jpv App', () => {
  let page: JpvPage;

  beforeEach(() => {
    page = new JpvPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

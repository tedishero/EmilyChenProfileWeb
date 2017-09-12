import { EmilyChenPage } from './app.po';

describe('emily-chen App', function() {
  let page: EmilyChenPage;

  beforeEach(() => {
    page = new EmilyChenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

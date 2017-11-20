import { PmsHqPage } from './app.po';

describe('pms-hq App', () => {
  let page: PmsHqPage;

  beforeEach(() => {
    page = new PmsHqPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

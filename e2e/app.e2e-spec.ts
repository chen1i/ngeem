import { NgeemPage } from './app.po';

describe('ngeem App', () => {
  let page: NgeemPage;

  beforeEach(() => {
    page = new NgeemPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

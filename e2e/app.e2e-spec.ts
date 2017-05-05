import { AutoComepleteAngular2Page } from './app.po';

describe('auto-comeplete-angular2 App', () => {
  let page: AutoComepleteAngular2Page;

  beforeEach(() => {
    page = new AutoComepleteAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

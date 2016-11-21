import { BuiltinDirectivePage } from './app.po';

describe('builtin-directive App', function() {
  let page: BuiltinDirectivePage;

  beforeEach(() => {
    page = new BuiltinDirectivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

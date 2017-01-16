import { CrimeMapProjectPage } from './app.po';

describe('crime-map-project App', function() {
  let page: CrimeMapProjectPage;

  beforeEach(() => {
    page = new CrimeMapProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

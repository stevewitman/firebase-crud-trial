import { FirebaseCrudTrialPage } from './app.po';

describe('firebase-crud-trial App', () => {
  let page: FirebaseCrudTrialPage;

  beforeEach(() => {
    page = new FirebaseCrudTrialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

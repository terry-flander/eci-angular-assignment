import { EciAngularAssignmentPage } from './app.po';

describe('eci-angular-assignment App', () => {
  let page: EciAngularAssignmentPage;

  beforeEach(() => {
    page = new EciAngularAssignmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

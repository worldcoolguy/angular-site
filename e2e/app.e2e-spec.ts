import { ResumeNew2Page } from './app.po';

describe('resume-new2 App', () => {
  let page: ResumeNew2Page;

  beforeEach(() => {
    page = new ResumeNew2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

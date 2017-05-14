import { SoftComputingVAWIPage } from './app.po';

describe('soft-computing-vawi App', () => {
  let page: SoftComputingVAWIPage;

  beforeEach(() => {
    page = new SoftComputingVAWIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

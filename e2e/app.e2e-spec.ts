import { MyvalidatePage } from './app.po';

describe('myvalidate App', () => {
  let page: MyvalidatePage;

  beforeEach(() => {
    page = new MyvalidatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

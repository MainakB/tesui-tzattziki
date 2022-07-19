import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class NavigatePage extends Page {
  /**
   * overwrite specific options to adapt it to page object
   */
  public open(path: string) {
    return super.open(path);
  }
}

export default new NavigatePage();

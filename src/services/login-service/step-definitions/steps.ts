import {Given, Then} from '@cucumber/cucumber';
import {Tzatziki} from '@kaniamb/tzatziki-core';

import NavigatePage from '../pages/navigate.page';

Given(/^I navigate to "(.*)"$/, async (path: string) => {
  await NavigatePage.open(path);
});

Then(/^I search for "(.*)"$/, async (searchText: string) => {
  await Tzatziki.Action.enterText({
    pageObject: "//input[@title='Search']",
    inputText: searchText,
    clickBeforeTextInput: true,
    clickAfterTextInput: true,
  });
});

Then(/^I click on options$/, async () => {
  await Tzatziki.Action.click({
    pageObject: [
      "//a[normalize-space()='News']",
      "//a[normalize-space()='Images']",
      "//a[normalize-space()='All']",
      "//a[normalize-space()='Terms']",
    ],
  });
});

import { Types } from "@kaniamb/tzatziki-core";

export const login_PO: Types.ILocatorMetadataObject = {
  userDemo: {
    poParentObject: "login_PO",
    description: "user id",
    locator: [
      {
        locatorType: Types.LocatorTypes.ID,
        locatorValue: "replaceText",
      },
    ],
  },
  passwordDemo: {
    poParentObject: "login_PO",
    description: "password",
    locator: [{ locatorType: Types.LocatorTypes.ID, locatorValue: "password" }],
  },
};

export const login_preference_po: Types.ILocatorMetadataObject = {
  submitDemo: {
    poParentObject: "login_preference_po",
    description: "submit button",
    locator: [
      {
        locatorType: Types.LocatorTypes.CSS,
        locatorValue: "button[type='submity']",
      },
      {
        locatorType: Types.LocatorTypes.XPATH,
        locatorValue: ".//button[@type='submits']",
      },
      // {
      //   locatorType: LocatorTypes.CSS,
      //   locatorValue: ".ABCD",
      // },
      // {
      //   locatorType: LocatorTypes.XPATH,
      //   locatorValue: 'button[type="submitnow"]',
      // },
    ],
  },
};

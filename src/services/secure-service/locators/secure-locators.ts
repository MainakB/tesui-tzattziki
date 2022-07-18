import { Types } from "@kaniamb/tzatziki-core";

export const secure_PO: Types.ILocatorMetadataObject = {
  userSecure: {
    poParentObject: "secure_PO",
    description: "user id",
    locator: [
      {
        locatorType: Types.LocatorTypes.ID,
        locatorValue: "replaceText",
      },
    ],
  },
  passwordSecure: {
    poParentObject: "passwordSecure",
    description: "password",
    locator: [{ locatorType: Types.LocatorTypes.ID, locatorValue: "password" }],
  },
};

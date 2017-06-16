import { Token } from "./base";
import { AppComponent } from "./app.component";

export const Tokens: Token[] = [
  {
    placeholder: "group-id",
    demoTenantValue: "8f4e3cfd-432d-4b9a-b801-f424aaf08ca1",
  },
  {
    placeholder: "drive-item-id",
    demoTenantValue: "01ZDJCYOZPW7IKQNDL3NHZVRODY2GC2YKW",
  },
  {
    placeholder: "section-id",
    demoTenantValue: "1-fb22b2f1-379f-4da4-bf7b-be5dcca7b99a",
  },
  {
    placeholder: "notebook-id",
    demoTenantValue: "1-fb22b2f1-379f-4da4-bf7b-be5dcca7b99a",
  },
  {
    placeholder: "group-id-with-plan",
    demoTenantValue: "d2b6c7fe-f440-446b-99d8-9ac12e036bf0",
  },
  {
    placeholder: "plan-id",
    demoTenantValue: "RVBp6oJJt0K5f6Lq42zBK2UAA-Rs",
  },
  {
    placeholder: "task-id",
    demoTenantValue: "9jBI6WHDwk60lEWpL4TQ92UAGLhh",
  },
  {
    placeholder: "task-title",
    demoTenantValue: "New Task",
  },
  {
    placeholder: "extension-id",
    demoTenantValue: "com.contoso.roamingSettings",
  },
  {
    placeholder: "host-name",
    demoTenantValue: "cie493742.sharepoint.com",
  },
  {
    placeholder: "server-relative-path",
    demoTenantValue: "sites/Contoso/Operations/Manufacturing",
  },
  {
    placeholder: "group-id-for-teams",
    demoTenantValue: "d2b6c7fe-f440-446b-99d8-9ac12e036bf0",
  },
  {
    placeholder: "channel-id",
    demoTenantValue: "ee3f919c-28e1-4659-86d2-8e37e581335c",
  },
  {
    placeholder: "today",
    defaultValueFn: () => {
      return (new Date()).toISOString()
    }
  },
  {
    placeholder: "next-week",
    defaultValueFn: () => {
      let today = new Date();
      let nextWeek = new Date();
      nextWeek.setDate(today.getDate()+7);
      return nextWeek.toISOString()
    }
  },
  {
    placeholder: "user-mail",
    demoTenantValue: "annew@CIE493742.onmicrosoft.com",
    authenticatedUserValueFn: () => {
      return AppComponent.explorerValues.authentication.user.emailAddress;
    }
  },
  {
    placeholder: "domain",
    defaultValueFn: () => {
      return "contoso.com"
    },
    authenticatedUserValueFn: () => {
      return AppComponent.explorerValues.authentication.user.emailAddress.split("@")[1];
    }
  }
]
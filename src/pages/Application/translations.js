const APPLICATION = 'application';

export const getTranslations = (t) => ({
  English: t(`${APPLICATION}:English`),
  Polish: t(`${APPLICATION}:Polish`),
  Main: t(`${APPLICATION}:Main`),
  Test: t(`${APPLICATION}:Test`),
  ForStaff: t(`${APPLICATION}:ForStaff`),
  ForCustomer: t(`${APPLICATION}:ForCustomer`),
});

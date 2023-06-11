/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
  const emailOwner = {};
  const parents = {};

  // Travel up the list of parents for an email until we find the root parent
  const findRootParent = (email) => {
    if (parents[email] !== email) parents[email] = findRootParent(parents[email]);

    return parents[email];
  };

  // Union the groups by assigning the root parent of email 2
  // to be a child of the root parent of email 1
  const unionGroup = (email1, email2) => {
    parents[findRootParent(email1)] = findRootParent(email2);
  };

  accounts.forEach(([name, ...emails]) => {
    emails.forEach((email) => {
      // Set a parent for the email if none exists
      if (!parents[email]) parents[email] = email;

      emailOwner[email] = name;
      // Group emails from the same account together by assigning the same root parent
      unionGroup(email, emails[0]);
    });
  });

  const emailGroups = {};
  Object.keys(parents).forEach((parent) => {
    const rootParent = findRootParent(parent);
    if (emailGroups[rootParent]) {
      emailGroups[rootParent].push(parent);
    } else {
      emailGroups[rootParent] = [parent];
    }
  });

  return Object.entries(emailGroups)
    .map(([parent, children]) => [emailOwner[parent], ...children.sort()]);

};
// @flow strict
const getAuthor = (authors: string[], authorName: string) => {
  let [author] = authors.filter((author) => author.name === authorName);

  if (author === undefined) {
    author = {
      name: 'Anonymous',
      bio: 'From anonymous',
      mainContactUrl: 'https://side-punch.com/',
      mainContactName: 'Side-Punch',
    };
  } else if (author.name === 'onsoo') {
    author.mainContactUrl = author.contacts.email;
    author.mainContactName = 'email';
  } else if (author.name === 'kim.sardine') {
    author.mainContactUrl = author.contacts.github;
    author.mainContactName = 'github';
  } else {
    author.mainContactUrl = author.contacts.github;
    author.mainContactName = 'github';
  }
  return author;
};

export default getAuthor;

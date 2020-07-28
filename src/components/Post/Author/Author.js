// @flow strict
import React from 'react';
import { withPrefix } from 'gatsby';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

type Props = {
  authorName: string
};

const Author = ({ authorName }: Props) => {
  const { authors, url } = useSiteMetadata();
  let [author] = authors.filter((author) => author.name === authorName);
  if (author === undefined) {
    author = {
      name: 'Anonymous',
      bio: 'From anonymous',
      mainContactUrl: url,
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

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        <img
          src={withPrefix(author.photo)}
          className={styles['author__photo']}
          width="50"
          height="50"
          alt={author.name}
        />
        {author.bio}
      </p>
      <a
        href={getContactHref(author.mainContactName, author.mainContactUrl)}
        rel="noopener noreferrer"
        target="_blank"
      >
        <strong>{author.name}</strong> on {author.mainContactName}
      </a>
    </div>
  );
};

export default Author;

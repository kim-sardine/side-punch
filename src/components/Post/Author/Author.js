// @flow strict
import React from 'react';
import { withPrefix } from 'gatsby';
import { getContactHref, getAuthor } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

type Props = {
  authorName: string
};

const Author = ({ authorName }: Props) => {
  const { authors } = useSiteMetadata();
  const author = getAuthor(authors, authorName);

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

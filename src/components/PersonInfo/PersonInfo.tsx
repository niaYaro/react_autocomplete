import React from 'react';
import classNames from 'classnames';
import { Person } from '../../types/Person';

interface Props {
  person: Person,
}

export const PersonInfo: React.FC<Props> = ({ person }) => {
  return (
    <div className="dropdown-item">
      <p className={classNames({
        'has-text-danger': person.sex === 'f',
        'has-text-link': person.sex === 'm',
      })}
      >
        {person.name}
      </p>
    </div>
  );
};

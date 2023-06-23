import React from 'react';
import { Person } from '../../types/Person';
import { PersonInfo } from '../PersonInfo/PersonInfo';

interface Props {
  persons: Person[],
}

export const PersonList: React.FC<Props> = ({ persons }) => {
  return (
    <div className="dropdown-menu" role="menu">
      <div className="dropdown-content">
        {persons.map(pers => <PersonInfo person={pers} />)}
      </div>
    </div>
  );
};

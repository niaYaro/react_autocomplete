import React, { useState } from 'react';
import './App.scss';
import { peopleFromServer } from './data/people';
import { PersonList } from './components/PersonList/PersonList';
import { QueryPerson } from './components/QueryPerson/QueryPerson';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const visiblePersons = peopleFromServer
    .filter(pers => pers.name.toLowerCase().includes(query.toLowerCase()));
  const { name, born, died } = peopleFromServer[0];

  return (
    <main className="section">
      <h1 className="title">
        {`${name} (${born} = ${died})`}
      </h1>

      <div className="dropdown is-active">
        <QueryPerson
          query={query}
          setQuery={setQuery}
        />
        {/* <div className="dropdown-trigger">
          <input
            type="text"
            placeholder="Enter a part of the name"
            className="input"
          />
        </div> */}
        <PersonList persons={visiblePersons} />
        {/* <div className="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <div className="dropdown-item">
              <p className="has-text-link">Pieter Haverbeke</p>
            </div>

            <div className="dropdown-item">
              <p className="has-text-link">Pieter Bernard Haverbeke</p>
            </div>

            <div className="dropdown-item">
              <p className="has-text-link">Pieter Antone Haverbeke</p>
            </div>

            <div className="dropdown-item">
              <p className="has-text-danger">Elisabeth Haverbeke</p>
            </div>

            <div className="dropdown-item">
              <p className="has-text-link">Pieter de Decker</p>
            </div>

            <div className="dropdown-item">
              <p className="has-text-danger">Petronella de Decker</p>
            </div>

            <div className="dropdown-item">
              <p className="has-text-danger">Elisabeth Hercke</p>
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
};

// import React, { useState } from 'react';

interface Props {
  query: string,
  setQuery: (newQuery: string) => void
}

export const QueryPerson: React.FC<Props> = ({
  query,
  setQuery,
}) => {
  // const [query, setQuery] = useState('');

  return (
    <div className="dropdown-trigger">
      <input
        type="text"
        placeholder="Enter a part of the name"
        className="input"
        value={query}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => (
          setQuery(event.target.value)
        )}
      />
    </div>
  );
};

import { Button, ContainerSearch, Form, FormInput } from './style';

import { FormEvent, useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

function SearchMovie() {
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch('');
  };

  return (
    <ContainerSearch>
      <Form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          role="search"
          value={search}
          placeholder="Busque um filme"
          onChange={(event) => setSearch(event.target.value)}
        />
        <Button type="submit">
          <BiSearchAlt2 size={25} color="#F0F9FF" />
        </Button>
      </Form>
    </ContainerSearch>
  );
}

export default SearchMovie;

import React from "react";
import { Form } from "react-bootstrap";
import { Icon } from "@iconify/react";
const SearchFilter = ({ setSearch, search }) => {
  return (
    <Form.Group className="form-group" controlId="formBasicEmail">
      <Form.Control
        type="text"
        placeholder="Search"
        value={search ? search : ""}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Icon icon="akar-icons:search" color="#000000" />
    </Form.Group>
  );
};

export default SearchFilter;

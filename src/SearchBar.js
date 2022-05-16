import { useState } from "react";
// import "./SearchBar.css";
import { Form, FormGroup, Input, Button, Row, Col } from 'reactstrap';

/** SearchBar, form that is used for searching for a term
 * 
 * Props:
 * - performSearch: function for performing search, setting state
 * 
 * State:
 * - formData: object of the form
 * 
 * {Companies, Jobs} -> SearchBar
 */

function SearchBar({ performSearch }) {
  const initialFormData = { search: "" };
  const [formData, setFormData] = useState(initialFormData);

  // Perform search and then reset search box blank.
  function handleSubmit(evt) {
    evt.preventDefault();
    performSearch(formData);
    setFormData(initialFormData);
  }

  // Update the formData state when user types
  function handleChange(evt) {
    const { value } = evt.target;
    setFormData({ "search": value });
  }

  return (
    <Form className="SearchBar" onSubmit={handleSubmit}>
      <Row>
        <Col md={6}>
          <FormGroup className="pt-4 ps-4 pe-md-0 pe-sm-4">
            <Input
              name="search"
              value={formData.search}
              placeholder="Enter search term.."
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup className="pt-md-4 ps-md-0 ps-sm-4">
            <Button color="primary">Submit</Button>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchBar;
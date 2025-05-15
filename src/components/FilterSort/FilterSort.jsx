import React from "react";
import { Formik, Form, Field } from "formik";

const FilterSort = ({ quotes, error }) => {
  return (
    <Formik
      initialValues={{ searchTherm: "", sortBy: "author" }}
      onSubmit={() => {}}
    >
      {({ values }) => {
        let filtered = [...quotes];

        if (values.searchTherm.trim() !== "") {
          let search = values.searchTherm.toLowerCase();
          filtered = filtered.filter(
            (q) =>
              q.quote.toLowerCase().includes(search) ||
              q.author.toLowerCase().includes(search)
          );
        }

        if (values.sortBy === "autor") {
          filtered.sort((a, b) => a.author.localeCompare(b.author));
        } else if (values.sortBy === "lenght") {
          filtered.sort((a, b) => a.quote.length - b.quote.length);
        }

        return (
          <div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Form>
              <label htmlFor="searchTherm">Search for quotes:</label>
              <Field
                type="text"
                id="searchTerm"
                name="searchTerm"
                placeholder="Enter text or author..."
              >
                <label htmlFor="sortBy" style={{ marginLeft: "1rem" }}>
                  Sort by:
                </label>
                <Field as="selected" id="sorBy" name="sorBy">
                  <option value="author">Author (A-Z)</option>
                  <option value="lenght">Quote length</option>
                </Field>
              </Field>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default FilterSort;

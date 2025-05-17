//FilterSort.jsx
import React from "react";
import { Formik, Form, Field } from "formik";
import QuoteList from "../QuoteList/QuoteList";
import styles from "./FilterSort.module.css";

const FilterSort = ({ quotes, error }) => {
  return (
    <Formik
      initialValues={{ searchTerm: "", sortBy: "author" }}
      onSubmit={() => {}}
    >
      {({ values }) => {
        let filtered = [...quotes];

        if (values.searchTerm.trim() !== "") {
          let search = values.searchTerm.toLowerCase();
          filtered = filtered.filter(
            (q) =>
              q.quote.toLowerCase().includes(search) ||
              q.author.toLowerCase().includes(search)
          );
        }

        if (values.sortBy === "author") {
          filtered.sort((a, b) => a.author.localeCompare(b.author));
        } else if (values.sortBy === "length") {
          filtered.sort((a, b) => a.quote.length - b.quote.length);
        }

        return (
          <section>
            <div>
              <div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <Form>
                  <label className={styles.label} htmlFor="searchTherm">
                    Search for quotes:
                  </label>
                  <Field
                    type="text"
                    id="searchTerm"
                    name="searchTerm"
                    placeholder="Enter text or author..."
                  />
                  <label htmlFor="sortBy" style={{ marginLeft: "1rem" }}>
                    Sort by:
                  </label>
                  <Field as="select" id="sortBy" name="sortBy">
                    <option value="author">Author (A-Z)</option>
                    <option value="length">Quote length</option>
                  </Field>
                </Form>
                <QuoteList quotes={filtered} />
              </div>
            </div>
          </section>
        );
      }}
    </Formik>
  );
};

export default FilterSort;

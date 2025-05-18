//FilterSort.jsx
import React from "react";
import { Formik, Form, Field } from "formik";
import QuoteList from "../QuoteList/QuoteList";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import styles from "./FilterSort.module.css";

const FilterSort = ({ quotes, error, addToFavorites }) => {
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
            <div className="container">
              <div className={styles.formContainer}>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <Form>
                  <label className={styles.label} htmlFor="searchTherm">
                    Search for quotes:
                  </label>
                  <Field
                    as={TextField}
                    id="filled-basic"
                    type="text"
                    name="searchTerm"
                    label="Search for quotes..."
                    variant="filled"
                    sx={{
                      width: 180,
                      maxWidth: "100%",
                      marginRight: "26px",
                      "& .MuiInputBase-input": {
                        fontSize: "16px",
                        color: "#333",
                        letterSpacing: "0.04em",
                      },
                      "& .MuiInputLabel-root": {
                        fontSize: "14px",
                        color: "#666",
                        letterSpacing: "0.02em",
                      },
                    }}
                  />
                  <label className={styles.label} htmlFor="sortBy">
                    Sort by:
                  </label>
                  <Field
                    as={TextField}
                    select
                    label="Sort By"
                    id="sortBy"
                    name="sortBy"
                    variant="filled"
                    sx={{
                      width: 180,
                      maxWidth: "100%",
                      "& .MuiInputBase-input": {
                        fontSize: "16px",
                        letterSpacing: "0.04em",
                      },
                      "& .MuiInputLabel-root": {
                        fontSize: "14px",
                        letterSpacing: "0.04em",
                      },
                    }}
                  >
                    <MenuItem value="author" sx={{ fontSize: "14px" }}>
                      Author (A-Z)
                    </MenuItem>
                    <MenuItem value="length" sx={{ fontSize: "14px" }}>
                      Quote length
                    </MenuItem>
                  </Field>
                </Form>
              </div>
              <QuoteList quotes={filtered} addToFavorites={addToFavorites} />
            </div>
          </section>
        );
      }}
    </Formik>
  );
};

export default FilterSort;

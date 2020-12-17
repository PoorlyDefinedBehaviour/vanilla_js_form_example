const values = {};

const handleChange = (e) => {
  values[e.target.name] = e.target.value;
};

const handleSubmit = (e) => {
  e.preventDefault();

  console.log("values", values);
};

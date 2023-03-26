import { Formik } from 'formik';

const Step1 = ({ values, errors, handleChange, handleBlur }) => (
    <div>
      <label>Name pat</label>
      <input
        name="name"
        id="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.name && <div style={{ backgroundColor: 'red' }}>{errors.name}</div>}
    </div>
  );

  const Step2 = ({ values, errors, handleChange, handleBlur }) => (
    <div>
      <label>email</label>
      <input
        name="email"
        id="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.email && (
        <div style={{ backgroundColor: 'red' }}>{errors.email}</div>
      )}
    </div>
  );
  
  const Step3 = ({ values, errors, handleChange, handleBlur }) => (
    <div>
      <label>password</label>
      <input
        name="password"
        id="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.password && (
        <div style={{ backgroundColor: 'red' }}>{errors.password}</div>
      )}
    </div>
  );
  
  const validate = {
    1: values => {
      const errors = {};
      if (!values.name) errors.name = 'required';
      return errors;
    },
    2: values => {
      const errors = {};
      if (!values.email) errors.email = 'required';
      return errors;
    },
    3: values => {
      const errors = {};
      if (!values.password) errors.password = 'required';
      return errors;
    },
  };

  class App extends React.Component {
    state = {
      formValues: {
        name: '',
        email: '',
        password: '',
      },
      step: 1,
    };
  
    next = formValues =>
      this.setState(state => ({
        step: state.step + 1,
        formValues,
      }));
  
    onSubmit = values => {
      alert(JSON.stringify(values, null, 2));
    };
  
    handleSubmit = (values, bag) => {
      const { step } = this.state;
      if (step === 3) {
        return this.onSubmit(values);
      } else {
        this.next(values);
        bag.setSubmitting(false);
      }
    };
  
    render() {
      const { formValues, step } = this.state;
  
      return (
        <div>
          <Formik
            initialValues={formValues}
            validate={validate[step]}
            onSubmit={this.handleSubmit}
            render={({
              values,
              touched,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <Step1
                    values={values}
                    errors={errors}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                )}
                {step === 2 && (
                  <Step2
                    values={values}
                    errors={errors}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                )}
                {step === 3 && (
                  <Step3
                    values={values}
                    errors={errors}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                )}
                {step < 3 && <button type="submit">next</button>}
                {step === 3 && <button type="submit">submit</button>}
                <hr />
                state
                <pre>{JSON.stringify(formValues, null, 2)}</pre>
                formValues
                <pre>{JSON.stringify(values, null, 2)}</pre>
                errors
                <pre>{JSON.stringify(errors, null, 2)}</pre>
              </form>
            )}
          />
        </div>
      );
    }
  }
  
  render(<App />, document.getElementById('root'));











const PersonalDetails = ({ errors, values, handleChange }) => {
    return (
      <Grid container rowSpacing={3} spacing={2}>
        <Grid item xs={6} md={6} sm={6} lg={6}>
          <TextField
            fullWidth
            error={!!errors.firstName}
            name="firstName"
            label="First Name"
            value={values.firstName}
            helperText={errors.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} md={6} sm={6} lg={6}>
          <TextField
            fullWidth
            name="lastName"
            label="Last Name"
            value={values.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} md={6} sm={6} lg={6}>
          <TextField
            fullWidth
            error={!!errors.username}
            name="username"
            label="User Name"
            value={values.username}
            helperText={errors.username}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} md={6} sm={6} lg={6}>
          <TextField
            fullWidth
            type="password"
            error={!!errors.password}
            name="password"
            label="Password"
            value={values.password}
            helperText={errors.password}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    );
  };
  
  export default PersonalDetails;
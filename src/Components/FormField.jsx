function FormField(props) {
  return (
    <>
      <div className="form-inputs">
        <input
          type="text"
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          required
        />

        <label htmlFor={props.id}>{props.title}</label>
      </div>
    </>
  );
}

export default FormField;

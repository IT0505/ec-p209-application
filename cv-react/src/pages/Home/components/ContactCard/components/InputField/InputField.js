import './InputField.scss';

function InputField(props) {
  return (
    <div className={!props.active ? 'input-field' : 'input-field active'}>
      <label className='label'>{props.name}</label>
      <br />
      {props.inputType === 'input' ? (
        <input
          type='text'
          className='input'
          name={props.name}
          onChange={props.onChange}
          value={props.value}
        />
      ) : (
        <textarea
          type='text'
          rows={props.rows}
          className='input textarea'
          name={props.name}
          onChange={props.onChange}
          value={props.value}
        />
      )}
    </div>
  );
}

export default InputField;

import React from "react";

function OrderQt(props) {
  return (
    <>
      <div className="order-qt-box">
        <div>
          <input
            type="Checkbox"
            id={props.id}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
          />
          <label> {props.title}</label>
        </div>
        <div>
          <input type="number" name="number" onChange={props.onChange} />
          <label> Quant.</label>
        </div>
      </div>
    </>
  );
}

export default OrderQt;

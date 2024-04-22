import React, { FC } from "react";

const  AddButton:FC<{text: string; disabled: boolean, active: boolean}> = ({text, disabled, active}) => {
  return <button className={`${disabled ? 'bg-gray-400':  'bg-black'} ${active ?'border-blue-800 border-4': 'border-transparent border-4'} text-white p-4 rounded-md`} disabled={disabled}>{text}</button>;
}



export default AddButton

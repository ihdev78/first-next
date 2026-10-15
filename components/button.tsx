"use client";

export default function Button({handleClick, label}){
 return (
    <button onClick={handleClick}>{label}</button>
 );
}
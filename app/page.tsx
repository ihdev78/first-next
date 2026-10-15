"use client";

import Button from "@/components/button";

export default function Home() {
  return (
        <Button handleClick={()=>console.log("test from button")} label="this is the first button"></Button>
  );
}
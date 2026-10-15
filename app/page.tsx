"use client";

import Button from "@/components/button";
import Card from "@/components/card";

export default function Home() {
  return (
    <>
      <Card title="this card is on fire">
        <Button
          handleClick={() => console.log("test from button")}
          label="this is the first button"
        ></Button>
        <p>please click the button</p>
      </Card>
      <Card title="new 2nd card">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </Card>
    </>
  );
}

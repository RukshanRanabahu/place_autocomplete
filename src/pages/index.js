import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Places from "./places";

export default function Home() {
  return <Map />;
}

function Map() {
  return (
    <Places></Places>
  );
}
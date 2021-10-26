import React from "react";
import useLatestData from "../utils/useLatestData";
import { HomePageGrid } from "../styles/Grids";
import LoadingGrid from "../components/LoadingGrid";
import ItemGrid from "../components/ItemGrid";
import SEO from '../components/SEO';

function CurrentlySlicing({ slicemasters }) {
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">Slicemasters On</span>
      </h2>
      <p>Standing by, ready to slice you up!</p>
      {!slicemasters && <LoadingGrid count={4} />}
      {slicemasters && !slicemasters?.length && (
        <p>No one is working right now!</p>
      )}
      {slicemasters?.length && <ItemGrid items={slicemasters} />}
    </div>
  );
}

function HotSlices({ hotSlices }) {
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">Hot Slices!</span>
      </h2>
      <p>Come on by, buy the slice!</p>
      {!hotSlices && <LoadingGrid count={4} />}{" "}
      {hotSlices && !hotSlices?.length && <p>Nothin' in the Case</p>}
      {hotSlices?.length && <ItemGrid items={hotSlices} />}
    </div>
  );
}

export default function HomePage() {
  const { slicemasters, hotSlices } = useLatestData();

  return (
    <div className="center">
      <SEO title={`Lasha's slices`} description={'Best Pizzas in Town'} image={'https://cdn.sanity.io/images/o8srmjqw/production/5d85f921bbd8f5c4e7996a75b5487ac3bfd3d939-1024x683.jpg?w=1000&h=1000&fit=max'}/>

      <h1>The Best Pizza Downtown!</h1>
      <p>Open 11am to 11pm Every Single Day</p>
      <HomePageGrid>
        <CurrentlySlicing slicemasters={slicemasters} />
        <HotSlices hotSlices={hotSlices} />
      </HomePageGrid>
    </div>
  );
}

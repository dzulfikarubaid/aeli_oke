import dynamic from "next/dynamic";

const Map = dynamic(
    () => import('./maps'),
    { ssr: false }
  )
export default Map
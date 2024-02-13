import dynamic from "next/dynamic";

const MapMobile = dynamic(
    () => import('./maps'),
    { ssr: false }
  )
export default MapMobile
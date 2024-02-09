import { useRouter } from "next/router";
import React from 'react'

function DetailPengurus() {
    const {query} = useRouter();
  return (
    <div>
        <h1>
            {query.id}
        </h1>
    </div>

  )
}

export default DetailPengurus
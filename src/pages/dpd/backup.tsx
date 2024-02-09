import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Content from "../Content";
import { statesData } from "@/components/Map/data";

interface DataItem {
  nama: string,
    alamat: string,
    telp: string,
    email: string,
}

const DetailDPD = () => {
  const { query } = useRouter();
  const [data, setData] = useState<DataItem[]>([]);
  const [filteredData, setFilteredData] = useState<DataItem[]>([]);
  useEffect(() => {
    
  })
  useEffect(() => {
    fetch('/api/data_dpd/')
      .then(res => res.json())
      .then(res => {
        setData(res.data);
        console.log(res.data);

        // Filter data based on query.id
        const filtered = res.data.filter((item: DataItem) =>
          'indonesia-'+item.nama.toLowerCase().replace(/\s+/g, "") === query.id
        )
        setFilteredData(filtered);
        
        console.log(query.id)
      })
  }, [query.id]);

  return (
    <Content>
      {
        filteredData.length > 0 ? filteredData.map((item: DataItem) => (
          <div key={item.nama}>
            <p>{item.nama}</p>
            <p>{item.alamat}</p>
            <p>{item.telp}</p>
            <p>{item.email}</p>
          </div>
        )) 
        :
        <div>DPD AELI pada provinsi tersebut belum tersedia</div>
      }
    </Content>
  );
};

export default DetailDPD;

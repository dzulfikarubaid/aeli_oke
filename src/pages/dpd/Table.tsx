
import { Card, Typography } from "@material-tailwind/react";
import axios from "axios";

import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const TABLE_HEAD = ["Nama Cabang","Kontak", "Email"];

export default function Table() {
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const data = [{
        "id": 8,
        "nama": "Jawa Barat",
        "alamat": "Gd. Haruman, Lt. 3, T.308, Poltekpar NHI Bandung, Jl. Dr. Setiabudhu No. 186 Bandung 40141",
        "contact": "08156203087",
        "email": "jabar@aeli.or.id",
        "gmaps": "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3961.239125566237!2d107.6356722!3d-6.8619199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTEnNDIuOSJTIDEwN8KwMzgnMDguNCJF!5e0!3m2!1sid!2sid!4v1692550324163!5m2!1sid!2sid"
    },
    {
        "id": 10,
        "nama": "Lampung",
        "alamat": "Jl. Landak no. 12 Sidodadi, Kedaton , Bandar Lampung",
        "contact": "082178688259",
        "email": "lampung@aeli.or.id",
        "gmaps": "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3972.1301054517003!2d105.26678869999999!3d-5.3971396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMjMnNDkuNyJTIDEwNcKwMTYnMDAuNCJF!5e0!3m2!1sid!2sid!4v1692551122417!5m2!1sid!2sid"
    },
    {
        "id": 16,
        "nama": "Bangka Belitung",
        "alamat": "Perumahan Pondok Indah 2, No. 74, Lontong Pancur, Pangkalpinang",
        "contact": "081360088899",
        "email": "babel@aeli.or.id",
        "gmaps": ""
    },
    {
        "id": 14,
        "nama": "Sumatera Selatan",
        "alamat": "Kapten Anwar Arsyad no. 1233A, Wayhitam - Pakjo, Palembang",
        "contact": "08123226046",
        "email": "sumsel@gmail.or.id",
        "gmaps": "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15938.437847522408!2d104.77618459919516!3d-2.9280575529683066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMsKwNTUnNDEuMCJTIDEwNMKwNDcnMTEuMyJF!5e0!3m2!1sid!2sid!4v1692552865036!5m2!1sid!2sid"
    },
    {
        "id": 15,
        "nama": "Sumatera Utara",
        "alamat": "Jl Flamboyan raya komplek griya Nusa tiga blok b no 30 tanjung selamat Medan tuntungan 20134",
        "contact": "085275957507, 081233334068",
        "email": "sumut@aeli.or.id",
        "gmaps": "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15927.664463706276!2d98.66348939924667!3d3.6066741421202826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwMzYnMjQuMCJOIDk4wrA0MCcyNS42IkU!5e0!3m2!1sid!2sid!4v1692552972752!5m2!1sid!2sid"
    },
    {
        "id": 11,
        "nama": "Nusa Tenggara Barat",
        "alamat": "Sekretariat DPD AELI NTB : jln. Erlangga 11 x gomong - Mataram - Lombok - NTB",
        "contact": "082339429863",
        "email": "ntb@aeli.or.id",
        "gmaps": "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d89268.41669005572!2d116.03275061647109!3d-8.582157621400622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMzQnMzcuMiJTIDExNsKwMDYnMDEuOCJF!5e0!3m2!1sid!2sid!4v1692551443765!5m2!1sid!2sid"
    },
    {
        "id": 7,
        "nama": "Jawa Tengah",
        "alamat": "Taman Mutiara Blok.C.1 No.1, Salatiga",
        "contact": "08164243672",
        "email": "jateng@aeli.or.id",
        "gmaps": "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3960.9730820835025!2d110.6385291!3d-6.8938231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTMnMzcuOCJTIDExMMKwMzgnMTguNyJF!5e0!3m2!1sid!2sid!4v1692546840174!5m2!1sid!2sid"
    },
    {
        "id": 6,
        "nama": "DKI Jakarta",
        "alamat": "Jl. Raya Mampang Prapatan No. 106 Lt. 2 Room 2.8, Duren Tiga , Pancoran Jakarta Selatan",
        "contact": "089501729425",
        "email": "dki@aeli.or.id",
        "gmaps": "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15861.945812533546!2d106.82426099956055!3d-6.330962598959292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTknNTEuNSJTIDEwNsKwNTAnMDQuMyJF!5e0!3m2!1sid!2sid!4v1692553044766!5m2!1sid!2sid"
    },
    {
        "id": 13,
        "nama": "Sumatera Barat",
        "alamat": "Jalan Pekanbaru Ujung No. 42 Kota Padang- Sumatera Barat",
        "contact": "085364567389, 0751-7050036",
        "email": "sumbar@aeli.or.id",
        "gmaps": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15957.242491372113!2d100.33983089910538!3d-0.9140462852951027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b8cb53e6f119%3A0x1a02ed8d1c3bb2a6!2sJl.%20S.%20Parman%20No.186%2C%20Ulak%20Karang%20Sel.%2C%20Kec.%20Padang%20Utara%2C%20Kota%20Padang%2C%20Sumatera%20Barat!5e0!3m2!1sid!2sid!4v1692552721827!5m2!1sid!2sid"
    },
    {
        "id": 17,
        "nama": "Sulawesi Selatan",
        "alamat": "Perum Dyandara Residance blok A nomor 03 Wesabbe, Tamalanrea - Makassar 90245, Sulawesi Selatan",
        "contact": "081234506667",
        "email": "sulsel@aeli.or.id",
        "gmaps": ""
    },
    {
        "id": 1,
        "nama": "Jawa Timur",
        "alamat": "Hutan Cempaka Dusun Gamoh, RT.7 RW.2. Desa Dayurejo. Kecamatan Prigen Kabupaten Pasuruan",
        "contact": "088215565335",
        "email": "jatim@aeli.or.id",
        "gmaps": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.480562308061!2d112.7658618104703!3d-7.299780357115913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa5375f7e063%3A0xa0b356e3743c4cfc!2sMezzanine!5e0!3m2!1sid!2sid!4v1691849742846!5m2!1sid!2sid"
    },
    {
        "id": 18,
        "nama": "Kalimantan Selatan",
        "alamat": "Jl. A. Yani Km. 29,5 Perum Benawa Indah Blok J RT 029 NO. 45 Kel. GUntung Manggis Kec. Landasan ULlin  Kota Banjarbaru",
        "contact": "081345121502",
        "email": "kalsel@aeli.or.id",
        "gmaps": ""
    },
    {
        "id": 19,
        "nama": "Kalimantan Timur",
        "alamat": "Perum tvri graha asri blok c 31 rt 05 kel. Sempaja barat kec samarinda utara kota samarinda kaltim",
        "contact": "081258467788",
        "email": "kaltim@aeli.or.id",
        "gmaps": ""
    },
    {
        "id": 2,
        "nama": "Bali",
        "alamat": "Jl. Mekar No 24 Pemogan Denpasar 80221",
        "contact": "08123985044",
        "email": "bali@aeli.or.id",
        "gmaps": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.9422026638813!2d115.2270780341101!3d-8.697038977933927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2410504104b01%3A0xc133d5507ca6a660!2sJl.%20Bedugul%20No.29%2C%20Sidakarya%2C%20Denpasar%20Selatan%2C%20Kota%20Denpasar%2C%20Bali%2080224!5e0!3m2!1sid!2sid!4v1691849413328!5m2!1sid!2sid"
    },
    {
        "id": 5,
        "nama": "Daerah Istimewa Yogyakarta",
        "alamat": "Jl. Nitikan Baru no. 16 Yogyakarta, 55162",
        "contact": "08990640234, 081391880034",
        "email": "diy@aeli.or.id",
        "gmaps": "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3953.556627248997!2d110.3368391!3d-7.730624599999989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNDMnNTAuMyJTIDExMMKwMjAnMTIuNiJF!5e0!3m2!1sid!2sus!4v1692545969447!5m2!1sid!2sus"
    }]
  useEffect(() => {
    axios
      .get("https://api-aeli.vercel.app/dpd_list/")
      .then((res) => {
        setLoading(false);
        setFilteredData(res.data); // Initialize filteredData with all data
      })
      .catch((error) => {
        console.error("Terjadi kesalahan:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Filter data based on searchInput
    const filteredResults = data.filter(({ nama }) =>
      nama.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredData(filteredResults);
  }, [searchInput, data]);

  return (
    <div className="w-full">
      <Card placeholder={""} className="relative h-full overflow-scroll p-4 w-full">
      <div className='flex flex-row gap-3 rounded-full border-gray-500 bg-gray-100 border-[1px] p-2 pl-4 py-1 items-center min-w-[400px]400px] self-end mb-10'>
      <FaSearch color='gray'></FaSearch>
      <input type="text" 
        placeholder="Cari nama cabang..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)} className='focus:outline-none bg-transparent' />
      </div>
 
        <table className="w-full table-auto text-left">
          <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 py-4">
                <Typography
                placeholder={""} 
                  variant="small"
                  color="blue-gray"
                  className="font-bold leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
          <tbody>
            {filteredData.map(({ nama, contact, email }, index) => {
              const isLast = index === data.length - 1;
              const classes = isLast ? "py-4" : "py-4 pr-2 border-b border-blue-gray-50";
              const url = 'dpd/indonesia-'+nama.toLowerCase().replace(/\s+/g, "")
              return (
                <tr key={index}>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" 
                    placeholder={""} className="font-normal">
                      <a href={url} className="text-blue-500">{nama}</a>
                    </Typography>
                  </td>
                  
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" 
                    placeholder={""} className="font-normal">
                      {contact}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography 
                    
                    placeholder={""} variant="small" color="blue-gray" className="font-normal">
                      {email}
                    </Typography>
                  </td>
                  
                  
                </tr>)
            })}
          </tbody>
        </table>
      
    </Card>

    </div>
    
  );
}

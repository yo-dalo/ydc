import React ,{useEffect,useState} from 'react'
import cimg from "../../images/cards/cards-01.png"
const TdImg = ({src}) => {
      const [img, setImg] = useState("");
  useEffect(()=>{
    setImg(src)
    
  },[src])
  

return ( 
  <td className="border-b border-[#eee] h-24 w-52 min-w-52 max-h-27 py-5 px-4 pl-5 overflow-hidden dark:border-strokedark xl:pl-11">
    <img
      src={img}
      className="w-full h-full object-contain overflow-hidden text-ellipsis whitespace-nowrap"
    />
  </td>
)


}

export default TdImg
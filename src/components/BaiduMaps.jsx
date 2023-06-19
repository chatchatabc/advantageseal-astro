import React, {useState} from "react";

import { Label, useLabel } from '@uiw/react-baidu-map';
import { Map, APILoader, NavigationControl, Marker, Provider, InfoWindow } from "@uiw/react-baidu-map";

const CustomMarker = ({content,header})=>{
  const [labelvisible, setVisible] = useState(true);
  const iconShapePoint = new BMap.Symbol(BMap_Symbol_SHAPE_POINT, {
  scale: 1, // 图标缩放大小
  fillColor: "red", // 填充颜色
  fillOpacity: 1, // 填充透明度
  });
  console.log(header, content)
  return <Map center={{lng:121.618597,lat:29.815308}} zoom={18} style={{ height: 350 }} widget={['NavigationControl']}>
      <Marker visiable={true} position={{lng:121.618597,lat:29.815308}} icon={iconShapePoint} onClick={()=>{setVisible(!labelvisible)}} />
      <Label visiable={labelvisible} position={{lng:121.618597,lat:29.815308}} content={`<div><h3 style='color:red; font-weight:bold'>${header}</h3><p>${content}</p></div>`} style={{padding: "4px"}}/>
    </Map>
  
};

const BaiduMap = (props) => (
  <div style={{ width: '100%' }}>
    <APILoader akay="eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG">
      <Provider>
        <CustomMarker content={props.content} header={props.header}/>

      </Provider>
    </APILoader>
  </div>
);
export default BaiduMap;
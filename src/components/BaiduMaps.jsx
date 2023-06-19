import React from "react";
import { Map, APILoader, NavigationControl } from "@uiw/react-baidu-map";

 const BaiduMap = () => (
  


  

    <div style={{ width: '100%' }}>
      <APILoader akay="eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG">
        <Map center={{lng:121.618918,lat:29.815475}} zoom={18} style={{ height: 350 }} widget={['NavigationControl']}/>
      </APILoader>
    </div>


);
export default BaiduMap;
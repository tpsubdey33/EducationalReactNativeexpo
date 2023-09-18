import { View, Dimensions, FlatList, Image } from "react-native";
import React from "react";
import Slider1 from "../../assets/slider1.jpg";
import Slider2 from "../../assets/slider2.jpg";
import Slider3 from "../../assets/slider3.jpg";
import Slider4 from "../../assets/slider4.jpg";
import Slider5 from "../../assets/slider5.jpg";

const SliderComponents = () => {
  const DATA = [
    {
      id: 1,
      img: Slider1,
    },
    {
      id: 2,
      img: Slider2,
    },
    {
      id: 3,
      img: Slider3,
    },
    {
      id: 4,
      img: Slider4,
    },
    {
      id: 5,
      img: Slider5,
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View style={{marginTop:10}}>
        <Image
          source={item.img}
          style={{ height: 210, width: Dimensions.get("screen").width*0.90, borderWidth:1,borderColor:"black",borderRadius:20,marginRight:15 }}
        />
      </View>
    );
  };

  return (
    <View>
      <FlatList
      key={DATA.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
       data={DATA}
        renderItem={renderItem
        }
         />
    </View>
  );
};

export default SliderComponents;

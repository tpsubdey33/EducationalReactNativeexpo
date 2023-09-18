import { View,FlatList,Text,Image } from 'react-native';
import IMG1 from '../../assets/VideoCIMG/img1.jpg'
import IMG2 from '../../assets/VideoCIMG/img2.jpg'
import IMG3 from '../../assets/VideoCIMG/img3.jpg'



const VideoCourse = () => {
    
    const DATA = [
        {
          id: 1,
          img: IMG1,
        },
        {
          id: 2,
          img: IMG2,
        },
        {
          id: 3,
          img: IMG3,
        },
        
      ];

      const renderItem = ({ item, index }) => {
        return (
          <View style={{marginTop:10}}>
            <Image
              source={item.img}
              style={{ height: 120, width:210,borderRadius:7,marginRight:10, }}
            />
          </View>
        );
      };

  return (
    <View style={{marginTop:15}}>
      <Text style={{fontSize:20,fontWeight:"bold"}}>VideoCourse</Text>
      <FlatList
      key={DATA.id}
      data={DATA}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      />
    </View>
  )
}

export default VideoCourse
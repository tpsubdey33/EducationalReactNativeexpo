import { View, Text, FlatList,Image, TouchableOpacity,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { data } from '../DataBase/CourseDB';



const BasicCourse = () => {
    const nav = useNavigation();
    const DATA = data;


      const onPressCourse=(dataID)=>{
        nav.navigate('course-details', {data:dataID});
      }
      

      const renderItem = (item) => {
        // console.log(item.id)
        return (
          <TouchableOpacity key={item.id} onPress={()=>onPressCourse(item)} style={{marginTop:10,backgroundColor:"#fff",marginRight:10,borderRadius:10}}>
            <Image
              source={item.img}
              style={{ height: 100, width:250,borderRadius:10, }}
            />
            <View style={{padding:10}}>
            <Text style={{fontWeight:"bold",fontSize:15}}>{item.title}</Text>
            <Text style={{fontWeight:"400",color:"gray"}}>{item.topic} Lessons</Text>
            </View>
          </TouchableOpacity>
        );
      };

  return (
    <View style={{marginTop:10}}>
    <Text style={{fontSize:20,fontWeight:"bold"}}>Basic Course</Text>
    <FlatList
    // key={DATA.id}
    data={DATA}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    renderItem={({item})=>renderItem(item)}
    />
  </View>
  )
}

export default BasicCourse
import { View,StyleSheet,Text} from "react-native";


export default function St () {
  return (
    <View style={styles.Wrapper}>
      <View style={styles.blocl}>
      </View>
      <View style ={styles.blub}>
        
      </View>
      <View style={styles.blocl}>
      </View>
      <View style={styles.blub}>
      </View>
      <View style={styles.blocl}>
      </View>
      
    </View>
  )

}
const styles = StyleSheet.create(



  {
    Wrapper: {
      flex: 1,
      backgroundColor: "yellow",
      width : '100%',
    },
    blocl: {
      width: 150,
      height: 150,
      backgroundColor: "red",
    },
    blub: {
      width: 150,
      height: 150,
      backgroundColor: "blue",
    }
      
    }
)
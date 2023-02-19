import { StyleSheet , View , Text , Pressable} from "react-native";

function GoalItem (props) {
  return (
    <View style={styles.goalItem}>
    <Pressable android_ripple={{color: 'red'}} onPress={props.onDeleteItem.bind( this , props.id )}>
   
      <Text key={props.id} style={styles.goalText}>{props.text} </Text>
    
    </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
goalItem: {
  margin: 8,
  borderRadius: 6,
  backgroundColor: '#5e0acc',
},
goalText: {
  color: '#ffffff',
  padding : 8,
}
});


export default GoalItem;
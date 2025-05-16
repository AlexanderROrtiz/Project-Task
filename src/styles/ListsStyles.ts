import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#E3F2FD' },
  item: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 10, 
    backgroundColor: '#FFFFFF', 
    borderRadius: 5, 
    marginVertical: 5 
  },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  textContainer: { marginLeft: 10 },
  itemText: { fontWeight: 'bold' },
  descriptionText: { color: '#757575' },
});

export default styles;

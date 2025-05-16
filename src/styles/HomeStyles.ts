import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#E3F2FD', 
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 15, 
    paddingVertical: 10, 
    paddingHorizontal: 15, 
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  spacer: {
    height: 20,
  },
});

export default styles;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 5, backgroundColor: '#E3F2FD' },
  taskItem: { 
    padding: 10,     
    borderBottomWidth: 1, 
    backgroundColor: '#FFFFFF', 
    borderRadius: 25,
    marginVertical: 5,
  },
  taskText: { fontWeight: 'bold', color: '#333' },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  input: { borderBottomWidth: 1, marginBottom: 10, padding: 8 },
  error: { color: 'red', marginBottom: 10 },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 5,
  },
  spacer: {
    height: 10, 
  },
  newTaskButton: {
    backgroundColor: '#2196F3',
    borderRadius: 25, 
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  cancelButton: {
    backgroundColor: '#F44336',
  },
  actionButton: {
    backgroundColor: '#2196F3',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;

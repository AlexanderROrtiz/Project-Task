import React, { useState } from 'react';
import { FlatList, View, Text, Modal, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addTask } from './tasksSlice';
import uuid from 'react-native-uuid';
import styles from 'styles/TaskStyles';


const TasksScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [taskDescription, setTaskDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const tasks = useAppSelector(state => state.tasks.tasks);
  const dispatch = useAppDispatch();

  const handleAddTask = () => {
    if (taskDescription.trim() === '') {
      setErrorMessage('El campo no puede estar vacío.');
      return;
    }

    dispatch(addTask({ id: String(uuid.v4()), description: taskDescription }));
    setTaskDescription('');
    setErrorMessage('');
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.newTaskButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Nueva Tarea</Text>
      </TouchableOpacity>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item.description}</Text>
          </View>
        )}
      />

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TextInput
              placeholder="Descripción de la tarea"
              value={taskDescription}
              onChangeText={setTaskDescription}
              style={styles.input}
            />
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
            
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.actionButton} onPress={handleAddTask}>
                <Text style={styles.buttonText}>Agregar</Text>
              </TouchableOpacity>
              <View style={styles.spacer} />
              <TouchableOpacity style={[styles.actionButton,styles.cancelButton]} onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};



export default TasksScreen;

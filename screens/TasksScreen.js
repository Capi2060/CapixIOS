import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { GlassCard } from '../components/GlassCard';
import { theme } from '../theme';
import { CheckCircle, Circle, PlusCircle } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';

export const TasksScreen = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Revisar presupuestos', isCompleted: false, priority: 2 },
    { id: 2, title: 'Llamar a cliente nuevo', isCompleted: true, priority: 1 },
  ]);
  const [newTask, setNewTask] = useState('');

  const toggleTask = (id) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setTasks(tasks.map(t => t.id === id ? { ...t, isCompleted: !t.isCompleted } : t));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mis Tareas</Text>
      </View>

      <View style={styles.inputContainer}>
        <GlassCard style={styles.inputCard}>
          <View style={styles.row}>
            <TextInput
              style={styles.input}
              placeholder="Nueva tarea..."
              placeholderTextColor={theme.colors.textSecondary}
              value={newTask}
              onChangeText={setNewTask}
            />
            <TouchableOpacity onPress={() => {
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
              setNewTask('');
            }}>
              <PlusCircle color={theme.colors.primary} size={28} />
            </TouchableOpacity>
          </View>
        </GlassCard>
      </View>

      <ScrollView style={styles.list}>
        {tasks.map(task => (
          <GlassCard key={task.id} style={styles.taskCard}>
            <TouchableOpacity onPress={() => toggleTask(task.id)} style={styles.row}>
              {task.isCompleted ? (
                <CheckCircle color="#4CD964" size={24} />
              ) : (
                <Circle color={theme.colors.textSecondary} size={24} />
              )}
              <Text style={[
                styles.taskText,
                task.isCompleted && styles.taskCompleted
              ]}>
                {task.title}
              </Text>
            </TouchableOpacity>
          </GlassCard>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  inputContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  inputCard: {
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    color: theme.colors.text,
    fontSize: 16,
  },
  list: {
    paddingHorizontal: 20,
  },
  taskCard: {
    marginBottom: 12,
  },
  taskText: {
    marginLeft: 15,
    fontSize: 17,
    color: theme.colors.text,
  },
  taskCompleted: {
    textDecorationLine: 'line-through',
    color: theme.colors.textSecondary,
  }
});

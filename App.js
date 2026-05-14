import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { TasksScreen } from './screens/TasksScreen';
import { FinanceScreen } from './screens/FinanceScreen';
import { SystemScreen } from './screens/SystemScreen';
import { CRMScreen } from './screens/CRMScreen';
import { TipsScreen } from './screens/TipsScreen';
import { theme } from './theme';
import { Checklist, PieChart, Cpu, Briefcase, Lightbulb } from 'lucide-react-native';
import { initDB } from './services/database';

const Tab = createBottomTabNavigator();

export default function App() {
  useEffect(() => {
    initDB().catch(err => console.log('Database init error:', err));
  }, []);

  return (
    <NavigationContainer theme={{
      dark: true,
      colors: {
        background: theme.colors.background,
        primary: theme.colors.primary,
        card: 'rgba(28, 28, 30, 0.8)',
        text: theme.colors.text,
        border: 'rgba(255, 255, 255, 0.1)',
        notification: theme.colors.accent,
      }
    }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: 'rgba(28, 28, 30, 0.9)',
            borderTopWidth: 0,
            elevation: 0,
            height: 90,
            paddingBottom: 30,
            position: 'absolute',
          },
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.textSecondary,
          tabBarIcon: ({ color, size }) => {
            const icons = {
              Tareas: Checklist,
              Finanzas: PieChart,
              Sistema: Cpu,
              Empresa: Briefcase,
              Tips: Lightbulb,
            };
            const IconComponent = icons[route.name];
            return <IconComponent color={color} size={size} />;
          },
        })}
      >
        <Tab.Screen name="Tareas" component={TasksScreen} />
        <Tab.Screen name="Finanzas" component={FinanceScreen} />
        <Tab.Screen name="Sistema" component={SystemScreen} />
        <Tab.Screen name="Empresa" component={CRMScreen} />
        <Tab.Screen name="Tips" component={TipsScreen} />
      </Tab.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

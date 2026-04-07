import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import theme from './theme';
import { navigationRef } from './src/navigation/RootNavigation';

import Welcome from './src/screens/Welcome';
import Inicio from './src/screens/Inicio';
import AllReports from './src/screens/AllReports';
import Perfil from './src/screens/Perfil';
import MisRutas from './src/screens/MisRutas';
import NewReport from './src/screens/NewReport';
import MisDatos from './src/screens/MisDatos';
import MiMovil from './src/screens/MiMovil';
import MiHistorial from './src/screens/MiHistorial';
import Planes from './src/screens/Planes';
import Ayuda from './src/screens/Ayuda';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ReportStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AllReportsList" component={AllReports} />
      <Stack.Screen name="NewReport" component={NewReport} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Inicio') iconName = 'home-outline';
          else if (route.name === 'Rutas') iconName = 'bicycle-outline';
          else if (route.name === 'Reportes') iconName = 'warning-outline';
          else if (route.name === 'Perfil') iconName = 'person-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.black,
        tabBarInactiveTintColor: theme.colors.mediumgray,
        headerShown: false,
        tabBarStyle: { 
          height: 50, 
          paddingBottom: 20,
          position: absolute,
          bottom: 0,
          backgroundColor: theme.colors.blue,
        },
      })}
    >
      <Tab.Screen name="Inicio" component={Inicio} />
      <Tab.Screen name="Rutas" component={MisRutas} />
      <Tab.Screen name="Reportes" component={ReportStack} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="MainApp" component={TabNavigator} />
        <Stack.Screen name="MisDatos" component={MisDatos} />
        <Stack.Screen name="MiMovil" component={MiMovil} />
        <Stack.Screen name="MiHistorial" component={MiHistorial} />
        <Stack.Screen name="Planes" component={Planes} />
        <Stack.Screen name="Ayuda" component={Ayuda} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
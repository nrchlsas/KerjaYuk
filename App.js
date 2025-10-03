import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import HomeScreen from './src/screens/HomeScreen';
import AttendanceScreen from './src/screens/AttendanceScreen';
import CheckOutScreen from './src/screens/CheckOutScreen';
import FormScreen from './src/screens/FormScreen';
import SettingScreen from './src/screens/SettingScreen';
import NotificationScreen from './src/screens/NotificationScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#EE3E32',
        tabBarInactiveTintColor: '#A5AAB5',
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 8,
        },
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') return <Ionicons name="home" size={size} color={color} />;
          if (route.name === 'Attendance') return <MaterialIcons name="assignment" size={size} color={color} />;
          if (route.name === 'CheckOut') return <Ionicons name="log-out-outline" size={size} color={color} />;
          if (route.name === 'Form') return <MaterialIcons name="description" size={size} color={color} />;
          if (route.name === 'Setting') return <Ionicons name="settings" size={size} color={color} />;
          return <View />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Attendance" component={AttendanceScreen} />
      <Tab.Screen
        name="CheckOut"
        component={CheckOutScreen}
        options={{
          tabBarLabel: 'Check Out',
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 68,
                height: 68,
                backgroundColor: '#EE3E32',
                borderRadius: 34,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -40,
                shadowColor: '#EE3E32',
                shadowOpacity: 0.4,
                shadowOffset: { width: 0, height: 10 },
                shadowRadius: 10,
                elevation: 6,
              }}
            >
              <Ionicons name="log-out-outline" size={40} style={{marginLeft: 7}} color="#fff" />
            </View>
          ),
        }}
      />
      <Tab.Screen name="Form" component={FormScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <StatusBar style={Platform.OS === 'ios' ? 'dark' : 'auto'} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

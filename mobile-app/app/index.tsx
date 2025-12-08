import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from "expo-router";
import { Ionicons } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar'; 
import { useLanguage } from './context/LanguageContext';

export default function WelcomeScreen() {
  const { setLanguage } = useLanguage(); 

  const selectLanguage = (lang: 'English' | 'isiZulu') => {
    setLanguage(lang); 
    router.push("/role-select");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Welcome to Umdeni Health</Text>
      <View style={styles.logoCircle}>
        <Ionicons name="leaf" size={100} color="#4E8889" />
      </View>
      <Text style={styles.subtitle}>Please choose your language to continue</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => selectLanguage('English')}>
          <Text style={styles.buttonText}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => selectLanguage('isiZulu')}>
          <Text style={styles.buttonText}>isiZulu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#4E8889', alignItems: 'center', justifyContent: 'space-evenly', paddingVertical: 50 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#FFFFFF', marginTop: 40 },
  logoCircle: { width: 200, height: 200, borderRadius: 100, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', elevation: 10 },
  subtitle: { fontSize: 18, color: '#FFFFFF', textAlign: 'center', marginBottom: 20, marginTop: 20 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'center', gap: 20, width: '100%' },
  button: { backgroundColor: '#9adcd7', paddingVertical: 15, paddingHorizontal: 35, borderRadius: 30, elevation: 3 },
  buttonText: { fontSize: 16, color: '#2a5a5b', fontWeight: 'bold' },
});

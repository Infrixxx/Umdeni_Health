import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { router } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { useLanguage } from './context/LanguageContext';
import { translations } from './translations';

export default function RoleSelectScreen() {
  const { language } = useLanguage();
  const lang = translations[language]; 

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{lang.whoAreYou}</Text>
      <Text style={styles.subtitle}>{lang.chooseRole}</Text>

      {/* Doctor Selection */}
      <TouchableOpacity style={styles.card} onPress={() => router.push("/(auth)/doctor-login")}>
        <View style={styles.iconContainer}>
          <Ionicons name="medkit" size={40} color="#4E8889" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.roleTitle}>{lang.imDoctor}</Text>
          <Text style={styles.roleDesc}>{lang.docDesc}</Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="#ccc" />
      </TouchableOpacity>

      {/* Patient Selection */}
      <TouchableOpacity style={styles.card} onPress={() => router.push("/(auth)/patient-login")}>
        <View style={styles.iconContainer}>
          <Ionicons name="person" size={40} color="#4E8889" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.roleTitle}>{lang.imPatient}</Text>
          <Text style={styles.roleDesc}>{lang.patDesc}</Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="#ccc" />
      </TouchableOpacity>

      {/* Family Selection */}
      <TouchableOpacity style={styles.card} onPress={() => router.push("/(auth)/family-login")}>
        <View style={styles.iconContainer}>
          <Ionicons name="heart" size={40} color="#4E8889" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.roleTitle}>{lang.imFamily}</Text>
          <Text style={styles.roleDesc}>{lang.famDesc}</Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="#ccc" />
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#F5F7FA', padding: 20, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#2a5a5b', textAlign: 'center', marginBottom: 10, marginTop: 40 },
  subtitle: { fontSize: 16, color: '#666', textAlign: 'center', marginBottom: 40 },
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 20, borderRadius: 15, marginBottom: 20, elevation: 2 },
  iconContainer: { width: 60, height: 60, backgroundColor: '#E0F2F1', borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  textContainer: { flex: 1 },
  roleTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  roleDesc: { fontSize: 14, color: '#888', marginTop: 2 },
});

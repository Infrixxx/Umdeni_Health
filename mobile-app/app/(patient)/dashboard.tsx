import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router"; 
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export default function PatientDashboard() {
  const { language } = useLanguage();
  const lang = translations[language];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>{lang.greeting}</Text>
        <Text style={styles.patientName}>[Patient Name]</Text>
      </View>

      <ScrollView style={styles.content}>
        
        <TouchableOpacity style={styles.listenCard} onPress={() => alert("Llama Voice Mode Starting...")}>
          <View style={styles.iconCircle}><Ionicons name="volume-high" size={50} color="white" /></View>
          <View style={styles.listenTextContainer}>
            <Text style={styles.listenTitle}>{lang.listenTitle}</Text>
            <Text style={styles.listenSubtitle}>{lang.listenSubtitle}</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>{lang.myMedicine}</Text>

        <View style={styles.medicationCard}>
          <View style={styles.pillIcon}><Ionicons name="medkit" size={30} color="#4E8889" /></View>
          <View style={styles.medInfo}>
            <Text style={styles.medName}>[Medication A]</Text>
            <Text style={styles.medInstruction}>{lang.pillInstruction1}</Text>
          </View>
          <Ionicons name="checkmark-circle" size={35} color="#4E8889" />
        </View>

        <View style={styles.medicationCard}>
          <View style={styles.pillIcon}><Ionicons name="flask" size={30} color="#E08E45" /></View>
          <View style={styles.medInfo}>
            <Text style={styles.medName}>[Medication B]</Text>
            <Text style={styles.medInstruction}>{lang.pillInstruction2}</Text>
          </View>
          <Ionicons name="time" size={35} color="#E08E45" />
        </View>

        <TouchableOpacity 
          style={styles.helperButton} 
          onPress={() => router.push({ pathname: "/chat", params: { role: 'patient' } })}
        >
          <Ionicons name="people" size={30} color="white" style={{marginRight: 15}} />
          <Text style={styles.helperText}>{lang.askHelper}</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}
// Styles remain the same
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { backgroundColor: '#E0F2F1', paddingTop: 60, paddingBottom: 30, paddingHorizontal: 25, borderBottomLeftRadius: 40, borderBottomRightRadius: 40 },
  greeting: { fontSize: 20, color: '#4E8889' },
  patientName: { fontSize: 32, fontWeight: 'bold', color: '#2a5a5b' },
  content: { flex: 1, padding: 20 },
  listenCard: { backgroundColor: '#4E8889', borderRadius: 25, padding: 25, flexDirection: 'row', alignItems: 'center', elevation: 5, marginBottom: 30 },
  iconCircle: { width: 80, height: 80, backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 40, justifyContent: 'center', alignItems: 'center', marginRight: 20 },
  listenTextContainer: { flex: 1 },
  listenTitle: { fontSize: 28, fontWeight: '900', color: 'white', letterSpacing: 2 },
  listenSubtitle: { fontSize: 16, color: '#E0F2F1' },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', color: '#333', marginBottom: 15, marginLeft: 5 },
  medicationCard: { backgroundColor: 'white', padding: 20, borderRadius: 15, flexDirection: 'row', alignItems: 'center', marginBottom: 15, borderWidth: 1, borderColor: '#eee' },
  pillIcon: { width: 50, height: 50, backgroundColor: '#F5F7FA', borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  medInfo: { flex: 1 },
  medName: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  medInstruction: { fontSize: 16, color: '#666', marginTop: 4 },
  helperButton: { marginTop: 20, backgroundColor: '#333', borderRadius: 15, padding: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  helperText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});

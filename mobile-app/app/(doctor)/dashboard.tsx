import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";
import { translations } from '../translations'; 
// Note: Removed 'useLanguage' here too

export default function DoctorDashboard() {
  // 🔒 FORCE ENGLISH: Locks the dashboard to English
  const lang = translations.English; 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>{lang.welcomeBack}</Text>
          <Text style={styles.doctorName}>[Doctor Name]</Text>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-circle" size={40} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>{lang.quickActions}</Text>
        
        <TouchableOpacity 
          style={styles.mainActionCard} 
          onPress={() => router.push("/(doctor)/consult")}
        >
          <View style={styles.actionIconCircle}>
            <Ionicons name="mic" size={32} color="#fff" />
          </View>
          <View style={styles.actionTextContainer}>
            <Text style={styles.actionTitle}>{lang.startConsult}</Text>
            <Text style={styles.actionSubtitle}>{lang.consultDesc}</Text>
          </View>
          <Ionicons name="arrow-forward-circle" size={32} color="#4E8889" />
        </TouchableOpacity>

        <View style={styles.row}>
            <TouchableOpacity style={styles.smallCard}>
                <Ionicons name="qr-code" size={28} color="#4E8889" />
                <Text style={styles.smallCardText}>{lang.scanPatient}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.smallCard}>
                <Ionicons name="people" size={28} color="#4E8889" />
                <Text style={styles.smallCardText}>{lang.myPatients}</Text>
            </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>{lang.recentVisits}</Text>

        {[1, 2, 3].map((item) => (
          <View key={item} style={styles.patientCard}>
            <View style={styles.patientAvatar}>
              <Text style={styles.avatarText}>P</Text>
            </View>
            <View style={styles.patientInfo}>
              <Text style={styles.patientName}>[Patient Name {item}]</Text>
              <Text style={styles.visitReason}>{lang.reasonPlaceholder}</Text>
            </View>
            <Text style={styles.timeText}>{lang.timePlaceholder}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { backgroundColor: '#4E8889', paddingTop: 60, paddingBottom: 30, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  greeting: { color: '#E0F2F1', fontSize: 16 },
  doctorName: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  profileButton: { backgroundColor: 'rgba(255,255,255,0.2)', padding: 5, borderRadius: 50 },
  content: { flex: 1, padding: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 15, marginTop: 10 },
  mainActionCard: { backgroundColor: 'white', borderRadius: 20, padding: 20, flexDirection: 'row', alignItems: 'center', elevation: 4, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10, marginBottom: 20 },
  actionIconCircle: { width: 60, height: 60, backgroundColor: '#E08E45', borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  actionTextContainer: { flex: 1 },
  actionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  actionSubtitle: { color: '#888', fontSize: 13 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  smallCard: { backgroundColor: 'white', width: '48%', padding: 20, borderRadius: 15, alignItems: 'center', elevation: 2 },
  smallCardText: { marginTop: 10, fontWeight: '600', color: '#555' },
  patientCard: { backgroundColor: 'white', padding: 15, borderRadius: 12, flexDirection: 'row', alignItems: 'center', marginBottom: 10, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  patientAvatar: { width: 45, height: 45, backgroundColor: '#E0F2F1', borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  avatarText: { color: '#4E8889', fontWeight: 'bold', fontSize: 18 },
  patientInfo: { flex: 1 },
  patientName: { fontWeight: 'bold', color: '#333', fontSize: 16 },
  visitReason: { color: '#888', fontSize: 13 },
  timeText: { color: '#aaa', fontSize: 12 },
});

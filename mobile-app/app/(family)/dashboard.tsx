import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export default function FamilyDashboard() {
  const { language } = useLanguage();
  const lang = translations[language];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>{lang.helping}</Text>
        <Text style={styles.patientName}>[Patient Name]</Text>
      </View>

      <ScrollView style={styles.content}>
        
        {/* Co-Pilot Chat Feature */}
        <View style={styles.aiCard}>
          <View style={styles.aiHeader}>
            <Ionicons name="sparkles" size={24} color="#E65100" />
            <Text style={styles.aiTitle}>{lang.coPilot}</Text>
          </View>
          <Text style={styles.aiDesc}>{lang.askExample}</Text>
          <TouchableOpacity 
            style={styles.chatButton} 
            onPress={() => router.push({ pathname: "/chat", params: { role: 'family' } })}
          >
            <Text style={styles.chatButtonText}>{lang.askLlama}</Text>
            <Ionicons name="chatbubbles" size={20} color="white" style={{marginLeft: 8}} />
          </TouchableOpacity>
        </View>

        {/* Latest Updates */}
        <Text style={styles.sectionTitle}>{lang.careUpdates}</Text>
        
        <View style={styles.updateCard}>
          <Ionicons name="document-text" size={30} color="#4E8889" style={styles.updateIcon} />
          <View>
            <Text style={styles.updateTitle}>{lang.newRx}</Text>
            <Text style={styles.updateDate}>[Date Placeholder]</Text>
            <Text style={styles.updateDetail}>{lang.rxDetail}</Text>
          </View>
        </View>

        <View style={styles.updateCard}>
          <Ionicons name="calendar" size={30} color="#666" style={styles.updateIcon} />
          <View>
            <Text style={styles.updateTitle}>{lang.nextCheckup}</Text>
            <Text style={styles.updateDate}>[Date Placeholder]</Text>
            <Text style={styles.updateDetail}>{lang.checkupDetail}</Text>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { backgroundColor: '#FFE0B2', padding: 30, paddingTop: 60, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  label: { fontSize: 14, color: '#E65100', textTransform: 'uppercase', letterSpacing: 1 },
  patientName: { fontSize: 28, fontWeight: 'bold', color: '#333' },
  content: { padding: 20 },
  aiCard: { backgroundColor: 'white', borderRadius: 20, padding: 20, marginBottom: 30, elevation: 4, shadowColor: '#E65100', shadowOpacity: 0.1, shadowRadius: 10, borderWidth: 1, borderColor: '#FFE0B2' },
  aiHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  aiTitle: { fontSize: 20, fontWeight: 'bold', color: '#333', marginLeft: 10 },
  aiDesc: { color: '#666', marginBottom: 20, lineHeight: 20 },
  chatButton: { backgroundColor: '#E65100', borderRadius: 12, paddingVertical: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  chatButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 15 },
  updateCard: { backgroundColor: 'white', padding: 15, borderRadius: 15, flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  updateIcon: { marginRight: 15, width: 40, textAlign: 'center' },
  updateTitle: { fontWeight: 'bold', color: '#333', fontSize: 16 },
  updateDate: { color: '#999', fontSize: 12, marginTop: 2 },
  updateDetail: { color: '#555', marginTop: 2 },
});

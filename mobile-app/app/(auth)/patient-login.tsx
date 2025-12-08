import React, { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, 
  KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard // 👈 Import these 2
} from 'react-native';
import { router } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export default function PatientLoginScreen() {
  const [patientID, setPatientID] = useState('');
  const { language } = useLanguage();
  const lang = translations[language];

  return (
    // 👇 WRAP EVERYTHING to dismiss keyboard on tap
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        <View style={styles.headerContainer}>
          <Ionicons name="person" size={100} color="#4E8889" />
          <Text style={styles.title}>{lang.patientAccess}</Text>
          <Text style={styles.subtitle}>{lang.enterFolder}</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputWrapper}>
            <Ionicons name="card-outline" size={24} color="#666" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="e.g. 12345"
              placeholderTextColor="#999"
              keyboardType="numeric"
              value={patientID}
              onChangeText={setPatientID}
            />
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={() => router.replace("/(patient)/dashboard")}>
            <Text style={styles.loginButtonText}>{lang.openFile}</Text>
            <Ionicons name="arrow-forward" size={24} color="white" style={{marginLeft: 10}} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backText}>{lang.goBack}</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

// Styles remain the same...
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  headerContainer: { flex: 0.45, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E0F2F1', borderBottomLeftRadius: 40, borderBottomRightRadius: 40 },
  title: { fontSize: 30, fontWeight: 'bold', color: '#2a5a5b', marginTop: 15 },
  subtitle: { fontSize: 18, color: '#666', marginTop: 5 },
  formContainer: { flex: 0.55, padding: 25, justifyContent: 'center' },
  inputWrapper: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 15, marginBottom: 25, paddingHorizontal: 20, height: 70, borderWidth: 2, borderColor: '#4E8889' },
  inputIcon: { marginRight: 15 },
  input: { flex: 1, fontSize: 22, color: '#333', fontWeight: 'bold' },
  loginButton: { backgroundColor: '#E08E45', borderRadius: 15, height: 70, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', elevation: 4 },
  loginButtonText: { color: 'white', fontSize: 20, fontWeight: 'bold', letterSpacing: 1 },
  backButton: { marginTop: 30, alignSelf: 'center', padding: 10 },
  backText: { color: '#888', fontSize: 16 },
});

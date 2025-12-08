import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { router } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { translations } from '../translations'; 
// Note: We removed 'useLanguage' so it doesn't listen to the toggle

export default function DoctorLoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 🔒 FORCE ENGLISH: This line locks the doctor to English
  const lang = translations.English;

  const handleLogin = () => {
    router.replace("/(doctor)/dashboard");
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons name="medkit" size={80} color="#4E8889" />
        <Text style={styles.title}>{lang.cockpit}</Text>
        <Text style={styles.subtitle}>{lang.signInDoc}</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputWrapper}>
          <Ionicons name="mail-outline" size={20} color="#666" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder={lang.docIdPlaceholder}
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Ionicons name="lock-closed-outline" size={20} color="#666" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder={lang.password}
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>{lang.login}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backText}>{lang.goBack}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  headerContainer: { flex: 0.4, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E0F2F1', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#2a5a5b', marginTop: 15 },
  subtitle: { fontSize: 16, color: '#666', marginTop: 5 },
  formContainer: { flex: 0.6, padding: 20, justifyContent: 'center' },
  inputWrapper: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 12, marginBottom: 16, paddingHorizontal: 15, height: 55, borderWidth: 1, borderColor: '#eee', elevation: 1 },
  inputIcon: { marginRight: 10 },
  input: { flex: 1, fontSize: 16, color: '#333' },
  loginButton: { backgroundColor: '#4E8889', borderRadius: 12, height: 55, justifyContent: 'center', alignItems: 'center', marginTop: 10, elevation: 2 },
  loginButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  backText: { textAlign: 'center', color: '#666', marginTop: 20, fontSize: 14 },
});

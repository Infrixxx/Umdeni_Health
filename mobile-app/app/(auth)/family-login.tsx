import React, { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, 
  KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard // 👈 Added imports
} from 'react-native';
import { router } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export default function FamilyLoginScreen() {
  const [inviteCode, setInviteCode] = useState('');
  const { language } = useLanguage();
  const lang = translations[language];

  return (
    // 👇 WRAP EVERYTHING
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        <View style={styles.headerContainer}>
          <Ionicons name="heart-circle" size={100} color="#4E8889" />
          <Text style={styles.title}>{lang.famTitle}</Text>
          <Text style={styles.subtitle}>{lang.enterInvite}</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputWrapper}>
            <Ionicons name="key-outline" size={24} color="#666" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder={lang.invitePlaceholder}
              placeholderTextColor="#999"
              value={inviteCode}
              onChangeText={setInviteCode}
              autoCapitalize="characters"
            />
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={() => router.replace("/(family)/dashboard")}>
            <Text style={styles.loginButtonText}>{lang.connect}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backText}>{lang.goBack}</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  headerContainer: { flex: 0.45, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFE0B2', borderBottomLeftRadius: 40, borderBottomRightRadius: 40 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#E65100', marginTop: 15 },
  subtitle: { fontSize: 16, color: '#666', marginTop: 5, paddingHorizontal: 40, textAlign: 'center' },
  formContainer: { flex: 0.55, padding: 25, justifyContent: 'center' },
  inputWrapper: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 15, marginBottom: 25, paddingHorizontal: 20, height: 60, borderWidth: 1, borderColor: '#ccc', elevation: 2 },
  inputIcon: { marginRight: 15 },
  input: { flex: 1, fontSize: 18, color: '#333' },
  loginButton: { backgroundColor: '#E65100', borderRadius: 15, height: 60, justifyContent: 'center', alignItems: 'center', elevation: 4 },
  loginButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold', letterSpacing: 1 },
  backButton: { marginTop: 20, alignSelf: 'center', padding: 10 },
  backText: { color: '#888', fontSize: 16 },
}); 

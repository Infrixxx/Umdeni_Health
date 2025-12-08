import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { router } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function ConsultScreen() {
  const [isRecording, setIsRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);

  // Simple timer logic for visual effect
  useEffect(() => {
    let interval: any;
    if (isRecording) {
      interval = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    } else {
      setSeconds(0);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New Consultation</Text>
        <Ionicons name="ellipsis-vertical" size={28} color="#333" />
      </View>

      <View style={styles.content}>
        
        {/* Patient Context Card */}
        <View style={styles.patientCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>P</Text>
          </View>
          <View>
            <Text style={styles.patientName}>[Patient Name]</Text>
            <Text style={styles.patientID}>ID: 890124 5678 089</Text>
          </View>
        </View>

        {/* Live Transcript Placeholder */}
        <Text style={styles.sectionLabel}>LIVE TRANSCRIPT</Text>
        <ScrollView style={styles.transcriptBox}>
          {isRecording ? (
            <Text style={styles.transcriptText}>
              "Patient is complaining of severe headaches and mild fever starting yesterday..." 
              {"\n\n"}(Listening...)
            </Text>
          ) : (
            <Text style={styles.placeholderText}>
              Tap the microphone to start recording the consultation.
            </Text>
          )}
        </ScrollView>

        {/* Recording Controls */}
        <View style={styles.controlsContainer}>
          <Text style={styles.timerText}>{isRecording ? formatTime(seconds) : "0:00"}</Text>
          
          <TouchableOpacity 
            style={[styles.recordButton, isRecording ? styles.recordingActive : null]}
            onPress={() => setIsRecording(!isRecording)}
          >
            <Ionicons 
              name={isRecording ? "stop" : "mic"} 
              size={40} 
              color="white" 
            />
          </TouchableOpacity>
          
          <Text style={styles.statusText}>
            {isRecording ? "Recording..." : "Ready to Listen"}
          </Text>
        </View>

        {/* Finish Button */}
        {!isRecording && seconds === 0 && (
           // Only show this button if we aren't recording yet/anymore
           <TouchableOpacity style={styles.finishButton} onPress={() => alert("Notes Extracted! (Backend Step)")}>
             <Text style={styles.finishText}>Extract Notes & Prescribe</Text>
             <Ionicons name="sparkles" size={20} color="white" style={{marginLeft: 10}} />
           </TouchableOpacity>
        )}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingTop: 50, paddingHorizontal: 20, paddingBottom: 20, backgroundColor: 'white',
  },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  content: { flex: 1, padding: 20, alignItems: 'center' },
  patientCard: {
    width: '100%', flexDirection: 'row', alignItems: 'center', backgroundColor: 'white',
    padding: 15, borderRadius: 15, marginBottom: 30, elevation: 2,
  },
  avatar: {
    width: 50, height: 50, backgroundColor: '#E0F2F1', borderRadius: 25,
    justifyContent: 'center', alignItems: 'center', marginRight: 15,
  },
  avatarText: { fontSize: 20, fontWeight: 'bold', color: '#4E8889' },
  patientName: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  patientID: { color: '#888', marginTop: 2 },
  sectionLabel: { alignSelf: 'flex-start', color: '#888', marginBottom: 10, fontSize: 12, letterSpacing: 1 },
  transcriptBox: {
    width: '100%', flex: 1, backgroundColor: 'white', borderRadius: 20, padding: 20, marginBottom: 30,
  },
  placeholderText: { color: '#ccc', fontSize: 16, fontStyle: 'italic', textAlign: 'center', marginTop: 50 },
  transcriptText: { color: '#333', fontSize: 16, lineHeight: 24 },
  controlsContainer: { alignItems: 'center', marginBottom: 30 },
  timerText: { fontSize: 36, fontWeight: '200', color: '#333', marginBottom: 20 },
  recordButton: {
    width: 80, height: 80, borderRadius: 40, backgroundColor: '#4E8889',
    justifyContent: 'center', alignItems: 'center', elevation: 5,
    shadowColor: '#4E8889', shadowOpacity: 0.4, shadowRadius: 10,
  },
  recordingActive: { backgroundColor: '#E53935' }, // Red when recording
  statusText: { marginTop: 15, color: '#666' },
  finishButton: {
    width: '100%', backgroundColor: '#333', padding: 18, borderRadius: 15,
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20,
  },
  finishText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { GlassCard } from '../components/GlassCard';
import { theme } from '../theme';
import * as Battery from 'expo-battery';
import { Battery as BatteryIcon, HardDrive, Wifi } from 'lucide-react-native';

export const SystemScreen = () => {
  const [batteryLevel, setBatteryLevel] = useState(0);
  const [batteryState, setBatteryState] = useState(0);

  useEffect(() => {
    const getBattery = async () => {
      const level = await Battery.getBatteryLevelAsync();
      const state = await Battery.getBatteryStateAsync();
      setBatteryLevel(level);
      setBatteryState(state);
    };
    getBattery();
    const subscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
      setBatteryLevel(batteryLevel);
    });
    return () => subscription.remove();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sistema</Text>
      </View>

      <ScrollView style={styles.scroll}>
        <GlassCard style={styles.card}>
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <BatteryIcon color={theme.colors.primary} size={32} />
            </View>
            <View style={styles.info}>
              <Text style={styles.label}>Nivel de Batería</Text>
              <Text style={styles.value}>{Math.round(batteryLevel * 100)}%</Text>
            </View>
          </View>
          <View style={styles.progressBg}>
            <View style={[styles.progressFill, { width: `${batteryLevel * 100}%`, backgroundColor: batteryLevel < 0.2 ? '#FF3B30' : '#4CD964' }]} />
          </View>
        </GlassCard>

        <GlassCard style={styles.card}>
          <View style={styles.row}>
            <View style={[styles.iconContainer, { backgroundColor: 'rgba(88, 86, 214, 0.2)' }]}>
              <HardDrive color={theme.colors.secondary} size={32} />
            </View>
            <View style={styles.info}>
              <Text style={styles.label}>Almacenamiento</Text>
              <Text style={styles.value}>128 GB / 256 GB</Text>
            </View>
          </View>
          <View style={styles.progressBg}>
            <View style={[styles.progressFill, { width: '50%', backgroundColor: theme.colors.secondary }]} />
          </View>
        </GlassCard>

        <GlassCard style={styles.card}>
          <View style={styles.row}>
            <View style={[styles.iconContainer, { backgroundColor: 'rgba(255, 45, 85, 0.2)' }]}>
              <Wifi color={theme.colors.accent} size={32} />
            </View>
            <View style={styles.info}>
              <Text style={styles.label}>Red</Text>
              <Text style={styles.value}>Conectado - Wi-Fi</Text>
            </View>
          </View>
        </GlassCard>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  scroll: {
    paddingHorizontal: 20,
  },
  card: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 122, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    marginLeft: 15,
  },
  label: {
    color: theme.colors.textSecondary,
    fontSize: 14,
  },
  value: {
    color: theme.colors.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
  progressBg: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  }
});

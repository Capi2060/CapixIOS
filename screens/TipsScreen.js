import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { GlassCard } from '../components/GlassCard';
import { theme } from '../theme';
import { Lightbulb, Scissors, Battery, Smartphone } from 'lucide-react-native';

const tips = [
  { id: 1, title: 'Recortes Rápidos', desc: 'Mantén pulsada una foto para separar el fondo.', icon: Scissors, color: '#007AFF' },
  { id: 2, title: 'Modo Ahorro', desc: 'Activa la automatización al bajar del 30%.', icon: Battery, color: '#4CD964' },
  { id: 3, title: 'Texto en Vivo', desc: 'Copia texto directamente de la cámara.', icon: Smartphone, color: '#FF9500' },
  { id: 4, title: 'Ahorro de Datos', desc: 'Configura límites en Ajustes > Red.', icon: Lightbulb, color: '#5856D6' },
];

export const TipsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Capix Tips</Text>
      </View>

      <ScrollView style={styles.scroll}>
        {tips.map(tip => (
          <GlassCard key={tip.id} style={styles.card}>
            <View style={styles.row}>
              <View style={[styles.iconBox, { backgroundColor: `${tip.color}33` }]}>
                <tip.icon color={tip.color} size={28} />
              </View>
              <View style={styles.info}>
                <Text style={styles.tipTitle}>{tip.title}</Text>
                <Text style={styles.tipDesc}>{tip.desc}</Text>
              </View>
            </View>
          </GlassCard>
        ))}
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
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    marginLeft: 15,
    flex: 1,
  },
  tipTitle: {
    color: theme.colors.text,
    fontSize: 17,
    fontWeight: 'bold',
  },
  tipDesc: {
    color: theme.colors.textSecondary,
    fontSize: 14,
    marginTop: 2,
  }
});

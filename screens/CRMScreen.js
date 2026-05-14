import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { GlassCard } from '../components/GlassCard';
import { theme } from '../theme';
import { Users, Briefcase, FileText, ChevronRight } from 'lucide-react-native';

export const CRMScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tu Empresa</Text>
      </View>

      <ScrollView style={styles.scroll}>
        <View style={styles.statsRow}>
          <GlassCard style={styles.statCard}>
            <Users color={theme.colors.primary} size={24} />
            <Text style={styles.statValue}>24</Text>
            <Text style={styles.statLabel}>Clientes</Text>
          </GlassCard>
          <GlassCard style={styles.statCard}>
            <Briefcase color={theme.colors.secondary} size={24} />
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Proyectos</Text>
          </GlassCard>
        </View>

        <Text style={styles.sectionTitle}>Clientes Recientes</Text>
        <GlassCard style={styles.customerCard}>
          <TouchableOpacity style={styles.row}>
            <View>
              <Text style={styles.customerName}>Capix Studios</Text>
              <Text style={styles.customerDetail}>contacto@capix.com</Text>
            </View>
            <ChevronRight color={theme.colors.textSecondary} size={20} />
          </TouchableOpacity>
        </GlassCard>

        <TouchableOpacity style={styles.invoiceButton}>
          <GlassCard style={styles.invoiceCard}>
            <View style={styles.row}>
              <View style={styles.row}>
                <FileText color={theme.colors.accent} size={24} />
                <Text style={styles.invoiceText}>Generar Factura PDF</Text>
              </View>
              <ChevronRight color={theme.colors.textSecondary} size={20} />
            </View>
          </GlassCard>
        </TouchableOpacity>
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
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    flex: 0.48,
    alignItems: 'center',
  },
  statValue: {
    color: theme.colors.text,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  statLabel: {
    color: theme.colors.textSecondary,
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 15,
  },
  customerCard: {
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  customerName: {
    color: theme.colors.text,
    fontSize: 17,
    fontWeight: 'bold',
  },
  customerDetail: {
    color: theme.colors.textSecondary,
    fontSize: 14,
  },
  invoiceButton: {
    marginTop: 10,
  },
  invoiceCard: {
    backgroundColor: 'rgba(255, 45, 85, 0.1)',
  },
  invoiceText: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 15,
  }
});

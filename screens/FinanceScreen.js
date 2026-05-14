import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { GlassCard } from '../components/GlassCard';
import { theme } from '../theme';
import { LineChart } from 'react-native-chart-kit';

export const FinanceScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Finanzas</Text>
      </View>

      <ScrollView style={styles.scroll}>
        <GlassCard style={styles.summaryCard}>
          <Text style={styles.label}>Gasto Total</Text>
          <Text style={styles.amount}>$4,250.00</Text>
        </GlassCard>

        <Text style={styles.sectionTitle}>Flujo de Caja</Text>
        <GlassCard style={styles.chartCard}>
          <LineChart
            data={{
              labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
              datasets: [{
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ]
              }]
            }}
            width={Dimensions.get("window").width - 80}
            height={220}
            chartConfig={{
              backgroundColor: "transparent",
              backgroundGradientFrom: "transparent",
              backgroundGradientTo: "transparent",
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: { borderRadius: 16 },
              propsForDots: { r: "6", strokeWidth: "2", stroke: theme.colors.primary }
            }}
            bezier
            style={styles.chart}
          />
        </GlassCard>

        <Text style={styles.sectionTitle}>Gastos Recientes</Text>
        <GlassCard style={styles.expenseItem}>
          <View style={styles.row}>
            <View>
              <Text style={styles.expenseTitle}>Adobe Creative Cloud</Text>
              <Text style={styles.expenseCategory}>Software</Text>
            </View>
            <Text style={styles.expenseAmount}>-$52.99</Text>
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
  summaryCard: {
    marginBottom: 20,
  },
  label: {
    color: theme.colors.textSecondary,
    fontSize: 14,
  },
  amount: {
    color: theme.colors.text,
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 15,
    marginTop: 10,
  },
  chartCard: {
    padding: 0,
    alignItems: 'center',
    marginBottom: 20,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  expenseItem: {
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  expenseTitle: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  expenseCategory: {
    color: theme.colors.textSecondary,
    fontSize: 12,
  },
  expenseAmount: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  }
});

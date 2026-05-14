import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { theme } from '../theme';

export const GlassCard = ({ children, style, intensity = 20 }) => {
  return (
    <View style={[styles.container, style]}>
      <BlurView intensity={intensity} tint="dark" style={styles.blur}>
        <View style={styles.content}>
          {children}
        </View>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: theme.spacing.borderRadius,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: theme.colors.glassBorder,
  },
  blur: {
    flex: 1,
  },
  content: {
    padding: theme.spacing.padding,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  }
});

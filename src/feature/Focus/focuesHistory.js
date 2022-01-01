import React from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';
import { fontSizes, spacing } from '../../utils/sizes';
import { RoundedButton } from '../../components/RoundedButton';

const HistoryItem = ({ item, index }) => {
  return <Text style={styles.historyItem(item.status)}>{item.subject}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };
  return (
    <>
      <SafeAreaView style={{ flex: 0.4, alignItems: 'center' }}>
        {!!focusHistory.length && (
          <View>
            <Text style={styles.title}>Things we've focused on</Text>
            <View style={{ flex: 1 }}>
              <FlatList
                contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}
                data={focusHistory}
                renderItem={HistoryItem}
              />
            </View>
            <View style={styles.clearContainer}>
              <RoundedButton
                size={140}
                title="clear"
                onPress={() => {
                  clearHistory();
                }}
              />
            </View>
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: '#fff',
    backgroundColor:
      status > 1 ? 'rgba(255, 0, 0, 0.4)' : 'rgba(0, 0, 255, 0.4)',
    width: 150,
    fontSize: fontSizes.md + 4,
    borderRadius: 5,
    padding: spacing.sm,
    textAlign: 'center',
    marginVertical: 10,
  }),
  title: {
    fontSize: fontSizes.lg,
  },
  clearContainer: {
    alignItems: 'center',
    padding: spacing.md,
  },
});

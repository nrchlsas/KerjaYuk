import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DATA = [
  {
    id: '1',
    type: 'Reimbursement',
    icon: require('../../assets/Money.png'),
    status: 'paid',
    date: 'Today',
    excerpt: 'Your submission "Lorem ipsum dolor sit amet..." with a total cost of 50,000 has been paid, please check your BRIMO application, Thankyou',
  },
  {
    id: '2',
    type: 'Reimbursement',
    icon: require('../../assets/Money.png'),
    status: 'rejected',
    date: 'Yesterday',
    excerpt: 'Your submission "description" has been rejected, please click for details.',
  },
  {
    id: '3',
    type: 'Reimbursement',
    icon: require('../../assets/Money.png'),
    status: 'processing',
    date: '2022-10-06',
    excerpt: 'Your submission will be processed according to the reimbursement schedule. Please wait',
  },
  {
    id: '4',
    type: 'Sickness',
    icon: require('../../assets/pil.png'),
    status: 'approved',
    date: '2022-10-05',
    excerpt: 'Your submission has been approved by the Superior.',
  },
  {
    id: '5',
    type: 'Sickness',
    icon: require('../../assets/pil.png'),
    status: 'rejected',
    date: '2022-10-05',
    excerpt: 'Your submission has been rejected, please confirm with your Superior.',
  },
  {
    id: '6',
    type: 'Sickness',
    icon: require('../../assets/pil.png'),
    status: 'processing',
    date: '2022-10-05',
    excerpt: 'Your submission is being reviewed to the Superior for the approval process, please wait.',
  },
  {
    id: '7',
    type: 'Overtime',
    icon: require('../../assets/5001829.jpg'),
    status: 'approved',
    date: '2022-10-05',
    excerpt: 'Your submission has been approved by the Superior.',
  },
  {
    id: '8',
    type: 'Overtime',
    icon: require('../../assets/5001829.jpg'),
    status: 'rejected',
    date: '2022-10-05',
    excerpt: 'Your submission has been rejected, please confirm with your Superior.',
  },
  {
    id: '9',
    type: 'Overtime',
    icon: require('../../assets/5001829.jpg'),
    status: 'processing',
    date: '2022-10-05',
    excerpt: 'Your submission is being reviewed to the Superior for the approval process, please wait.',
  },
];

function StatusBadge({ status }) {
  const map = {
    paid: { color: '#16A34A', icon: 'checkmark' },
    approved: { color: '#16A34A', icon: 'checkmark' },
    rejected: { color: '#EF4444', icon: 'close' },
    processing: { color: '#2563EB', icon: 'add' },
  };
  const cfg = map[status] || map.processing;
  return (
    <View style={[styles.statusBadge, { backgroundColor: cfg.color }]}> 
      <Ionicons name={cfg.icon} size={14} color="#fff" />
    </View>
  );
}

function Item({ item }) {
  return (
    <View style={styles.cardWrap}>
      <View style={styles.iconCol}> 
        <Image source={item.icon} style={styles.appIcon} />
        <StatusBadge status={item.status} />
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.rowBetween}>
          <Text style={styles.title}>{item.type}</Text>
          <Text style={styles.dateText}>{item.date}</Text>
        </View>
        <Text style={styles.bodyText}>{item.excerpt}</Text>
      </View>
    </View>
  );
}

export default function NotificationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.canGoBack() ? navigation.goBack() : navigation.navigate('Home')} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={24} color="#1F2937" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notification</Text>
        <View style={{ width: 24 }} />
      </View>
      <FlatList
        data={DATA}
        keyExtractor={(it) => it.id}
        contentContainerStyle={{ paddingBottom: 24 }}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        renderItem={({ item }) => <Item item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 16, paddingTop: 14 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 12, marginTop: 20 },
  backBtn: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { flex: 1, textAlign: 'center', fontSize: 22, fontWeight: '800', color: '#EE3E32' },
  cardWrap: { flexDirection: 'row', backgroundColor: '#EEF2FF', borderRadius: 14, padding: 12, shadowColor: '#000', shadowOpacity: 0.05, shadowOffset: { width: 0, height: 6 }, shadowRadius: 10, elevation: 1 },
  iconCol: { width: 56, marginRight: 12, alignItems: 'center' },
  appIcon: { width: 48, height: 48, borderRadius: 10 },
  statusBadge: { width: 20, height: 20, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginTop: -8, borderWidth: 2, borderColor: '#fff' },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 15, fontWeight: '800', color: '#2B2D33' },
  dateText: { color: '#9CA3AF', fontSize: 12 },
  bodyText: { marginTop: 4, color: '#6B7280', lineHeight: 18 },
});



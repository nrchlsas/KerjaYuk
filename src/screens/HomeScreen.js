import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 28 }}>
      <View style={styles.headerRow}>
        <Text style={styles.brand}>KerjaYuk!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')} style={{ position: 'relative' }}>
          <Ionicons name="notifications-outline" size={24} color="#1C1C1E" />
          {/* Red dot notification badge */}
          <View style={{
            position: 'absolute',
            top: -2,
            right: -2,
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: '#EE3E32',
            borderWidth: 1,
            borderColor: '#fff',
            zIndex: 10,
          }} />
        </TouchableOpacity>
      </View>

      <Text style={styles.greeting}>Hi, Good Morning!</Text>

      <LinearGradient colors={["#FF5C54", "#B10085"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.memberCard}>
        <View style={styles.memberLeft}>
          <View style={styles.avatarCol}>
            <Image source={{ uri: 'https://i.pravatar.cc/100?img=12' }} style={styles.avatar} />
            <Text style={styles.locationLabel}>Location</Text>
            <Text style={styles.locationValue}>Kantor Sahid</Text>
          </View>
          <View style={styles.nameCol}>
            <Text style={styles.memberName}>Tabay</Text>
            <Text style={styles.memberRole}>UI/UX Designer</Text>
          </View>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={styles.memberSinceLabel}>Member since</Text>
          <Text style={styles.memberSince}>01 Juni 2021</Text>
          <Text style={styles.icoText}>ICO</Text>
        </View>
      </LinearGradient>

      <Text style={styles.sectionTitle}>Today's activity</Text>
      <View style={styles.activityRow}>
        <View style={styles.activityItem}>
          <View style={styles.activityIconWrap}><Ionicons name="log-in-outline" size={22} color="#EE3E32" /></View>
          <Text style={styles.activityValue}>08:30</Text>
          <Text style={styles.activityLabel}>Check In</Text>
        </View>
        <View style={styles.activityItem}>
          <View style={styles.activityIconWrap}><Ionicons name="time-outline" size={22} color="#EE3E32" /></View>
          <Text style={[styles.activityValue, { color: '#EE3E32' }]}>03:00:00</Text>
          <Text style={styles.activityLabel}>Working Hours</Text>
        </View>
        <View style={styles.activityItem}>
          <View style={styles.activityIconWrap}><Ionicons name="log-out-outline" size={22} color="#EE3E32" /></View>
          <Text style={styles.activityValue}>--:--</Text>
          <Text style={styles.activityLabel}>Check Out</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>PCS News</Text>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 5, marginBottom: 5, height: 180 }}
        contentContainerStyle={{ paddingRight: 20 }}
      >
        {[
          {
            avatar: 'https://i.pravatar.cc/100?img=32',
            author: 'Ana Riswati',
            date: 'Senin\n30 Mei 2022',
            text: [
              'Kalimat 1 - Lorem ipsum dolor sit amet consec',
              'Kalimat 2 - Lorem ipsum dolor sit amet consec',
              'Kalimat 3 - Lorem ipsum dolor sit amet consec',
              'Kalimat 4 - Lorem ipsum dolor sit amet consec',
            ],
          },
          {
            avatar: 'https://i.pravatar.cc/100?img=33',
            author: 'Budi Santoso',
            date: 'Selasa\n31 Mei 2022',
            text: [
              'Kalimat 1 - Sed do eiusmod tempor incididunt',
              'Kalimat 2 - Ut labore et dolore magna aliqua',
              'Kalimat 3 - Ut enim ad minim veniam',
              'Kalimat 4 - Quis nostrud exercitation ullamco',
            ],
          },
          {
            avatar: 'https://i.pravatar.cc/100?img=34',
            author: 'Citra Dewi',
            date: 'Rabu\n1 Juni 2022',
            text: [
              'Kalimat 1 - Duis aute irure dolor in reprehenderit',
              'Kalimat 2 - In voluptate velit esse cillum',
              'Kalimat 3 - Dolore eu fugiat nulla pariatur',
              'Kalimat 4 - Excepteur sint occaecat cupidatat',
            ],
          },
        ].map((item, idx, arr) => (
          <View key={idx} style={[styles.newsCard, { width: 345, marginRight: idx === arr.length - 1 ? 0 : 16 }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', height: 50 }}>
                <Image source={{ uri: item.avatar }} style={styles.newsAvatar} />
                <Text style={styles.newsAuthor}>{item.author}</Text>
              </View>
              <Text style={styles.newsDate}>{item.date}</Text>
            </View>
            <View style={{ height: 12 }} />
            <Text style={styles.newsText}>
              {item.text.map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < item.text.length - 1 ? '\n' : ''}
                </React.Fragment>
              ))}
            </Text>
            <View style={{ alignSelf: 'center', flexDirection: 'row', gap: 8, marginTop: 10 }}>
              {arr.map((_, dotIdx) =>
                <View
                  key={dotIdx}
                  style={dotIdx === idx ? styles.dotActive : styles.dot}
                />
              )}
            </View>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Online</Text>
      <View style={styles.onlineCard}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Array.from({ length: 6}).map((_, idx) => (
            <View key={idx} style={styles.personWrap}>
              <Image source={{ uri: `https://i.pravatar.cc/100?img=${idx + 1}` }} style={styles.personAvatar} />
              <Text style={styles.personName}>Nama</Text>
              <Text style={styles.personLocation}>Sahid</Text>
            </View>
          ))}
          <View style={styles.moreBadge}>
            <Text style={styles.moreBadgeText}>10{"\n"}more</Text>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 20 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 20, marginTop:20 },
  brand: { color: '#EE3E32', fontWeight: '800', fontSize: 28 },
  greeting: { marginTop: 16, fontSize: 20, color: '#1C1C1E', fontWeight: '600' },
  memberCard: { marginTop: 16, borderRadius: 16, padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.15, shadowOffset: { width: 0, height: 6 }, shadowRadius: 10, elevation: 3 },
  memberLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  nameCol:{marginTop: -35, marginLeft: -30},
  avatar: { width: 56, height: 56, borderRadius: 28, borderWidth: 2, borderColor: 'rgba(255,255,255,0.7)' },
  memberName: { color: 'white', fontWeight: '700', fontSize: 18 },
  memberRole: { color: 'white', opacity: 0.9 },
  locationLabel: { color: 'white', opacity: 0.85, marginTop: 8, fontSize: 12 },
  locationValue: { color: 'white', fontWeight: '700' },
  memberSinceLabel: { color: 'white', opacity: 0.85, textAlign: 'right', marginTop: 7 },
  memberSince: { color: 'white', fontWeight: '800', fontSize: 14 },
  icoText: { color: 'white', opacity: 0.9, marginTop: 30 },
  sectionTitle: { marginTop: 22, fontWeight: '800', color: '#2B2D33', fontSize: 18 },
  activityRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
  activityItem: { width: '30%', alignItems: 'center' },
  activityIconWrap: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: '#FFD5D2', alignItems: 'center', justifyContent: 'center' },
  activityValue: { marginTop: 10, fontWeight: '800', color: '#2B2D33' },
  activityLabel: { color: '#6B7280', fontSize: 12, marginTop: 2 },
  newsCard: { marginTop: 5,marginBottom:5, borderRadius: 16, backgroundColor: '#FFFFFF', padding: 16, shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: 0, height: 8 }, shadowRadius: 16, elevation: 2 },
  newsAvatar: { width: 36, height: 36, borderRadius: 18, marginRight: 10 },
  newsAuthor: { fontWeight: '700', color: '#EE3E32' },
  newsDate: { color: '#6B7280', textAlign: 'right' },
  newsText: { color: '#4B5563', lineHeight: 20 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#E5E7EB' },
  dotActive: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#EE3E32' },
  onlineCard: { marginTop: 12, borderRadius: 16, backgroundColor: '#FFFFFF', paddingVertical: 12, paddingHorizontal: 12, shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: 0, height: 8 }, shadowRadius: 16, elevation: 2 },
  personWrap: { width: 72, alignItems: 'center', marginRight: -30 },
  personAvatar: { width: 48, height: 48, borderRadius: 24, zIndex:1000 },
  personName: { marginTop: 6, fontSize: 12, color: '#2B2D33' },
  personLocation: { fontSize: 10, color: '#9CA3AF' },
  moreBadge: { position: 'absolute', right: -55, top: 5, backgroundColor: '#EE3E32', width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center', shadowColor: '#EE3E32', shadowOpacity: 0.4, shadowOffset: { width: 0, height: 8 }, shadowRadius: 10, elevation: 3 },
  moreBadgeText: { color: '#fff', fontWeight: '800', textAlign: 'center', lineHeight: 16 },
});



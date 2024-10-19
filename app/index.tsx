import { View, Text, Pressable, TouchableOpacity, StyleSheet} from "react-native"
import { Link, router } from 'expo-router'

const IntroPage = () => {
    return (
        <View style={styles.container}>
            <Text>Introduction Page</Text>
            <Link href="login">Go to Login Page</Link>
            {/* <TouchableOpacity onPress={() => router.push('/(tabs)')}>
                <Text>Go to tabs: Home Page</Text>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,                  // View가 전체 화면을 채우도록
      justifyContent: 'center', // 수직 방향 중앙 정렬
      alignItems: 'center',     // 수평 방향 중앙 정렬
      backgroundColor: '#FFFFFF', // 배경색 (원하는 색으로 설정 가능)
  },
})

export default IntroPage;
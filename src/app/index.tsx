import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import { useRouter } from 'expo-router';

const VideoIntro = () => {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      const timeout = setTimeout(() => {
        router.replace('/intro/v1');
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [isLoaded]);

  return (
    <View style={styles.container}>
      <Video
        source={require('../../assets/animacion-intro.mp4')} // asegúrate que esta ruta es correcta
        style={styles.video}
        resizeMode="cover"
        isLooping
        shouldPlay
        onLoad={() => setIsLoaded(true)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  video: { width: '100%', height: '100%' },
});

export default VideoIntro;

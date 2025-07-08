@@ .. @@
          <TouchableOpacity 
            style={styles.watchVideoButton}
-            onPress={() => Linking.openURL('https://www.youtube.com/shorts/nWXkqDrRcyU')}
+            onPress={() => Linking.openURL('https://youtube.com/shorts/nWXkqDrRcyU')}
            activeOpacity={0.8}
          >
            <Video size={20} color={theme.colors.white} />
-            <Text style={styles.watchVideoText}>Watch Entry Instructions</Text>
+            <Text style={styles.watchVideoText}>Watch How to Open Doors</Text>
          </TouchableOpacity>
@@ .. @@
          <TouchableOpacity 
            style={styles.watchVideoButton}
-            onPress={handleWatchVideo}
+            onPress={() => Linking.openURL('https://youtube.com/shorts/XNzqKrwDKf8')}
            activeOpacity={0.8}
          >
-            <Play size={20} color={theme.colors.white} />
-            <Text style={styles.watchVideoText}>Watch Entry Video</Text>
+            <Key size={20} color={theme.colors.white} />
+            <Text style={styles.watchVideoText}>Watch Key Pickup Video</Text>
          </TouchableOpacity>
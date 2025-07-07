@@ .. @@
           </Animated.View>
         ))}
 
-        <View style={styles.divider} />
-        
-        <Text style={styles.sectionTitle}>Amenities</Text>
-        
-        <View style={styles.amenitiesContainer}>
-          {amenities.map((amenity, index) => (
-            <Animated.View 
-              key={amenity.id}
-              entering={FadeIn.delay(index * 100)}
-              style={styles.amenityItem}
-            >
-              <View style={styles.amenityIcon}>
-                {amenity.icon}
-              </View>
-              <Text style={styles.amenityTitle}>{amenity.title}</Text>
-            </Animated.View>
-          ))}
-        </View>
-        
         <View style={styles.divider} />
         
         <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
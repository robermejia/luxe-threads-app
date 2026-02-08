package com.luxethreads.backend.config;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import java.io.IOException;

@Configuration
public class FirebaseConfig {

    private void initializeFirebase() throws IOException {
        if (FirebaseApp.getApps().isEmpty()) {
            String serviceAccountJson = System.getenv("FIREBASE_SERVICE_ACCOUNT");
            FirebaseOptions options;

            if (serviceAccountJson != null && !serviceAccountJson.isEmpty()) {
                options = new FirebaseOptions.Builder()
                        .setCredentials(GoogleCredentials.fromStream(
                                new java.io.ByteArrayInputStream(serviceAccountJson.getBytes())))
                        .build();
                System.out.println("Firebase initialized from environment variable.");
            } else {
                Resource resource = new ClassPathResource("serviceAccountKey.json");
                if (!resource.exists()) {
                    throw new IOException(
                            "Firebase serviceAccountKey.json not found in resources and FIREBASE_SERVICE_ACCOUNT env var is empty.");
                }
                options = new FirebaseOptions.Builder()
                        .setCredentials(GoogleCredentials.fromStream(resource.getInputStream()))
                        .build();
                System.out.println("Firebase initialized from serviceAccountKey.json file.");
            }

            FirebaseApp.initializeApp(options);
        }
    }

    @Bean
    public Firestore getFirestore() throws IOException {
        initializeFirebase();
        return FirestoreClient.getFirestore();
    }
}

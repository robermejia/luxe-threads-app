package com.luxethreads.backend.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import com.luxethreads.backend.model.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class UserFirestoreService {

    private static final String COLLECTION_NAME = "users";
    private final Firestore firestore;

    public UserFirestoreService(Firestore firestore) {
        this.firestore = firestore;
    }

    public String saveUser(User user) throws ExecutionException, InterruptedException {
        CollectionReference users = firestore.collection(COLLECTION_NAME);
        DocumentReference docRef;

        if (user.getId() != null && !user.getId().trim().isEmpty()) {
            docRef = users.document(user.getId());
        } else {
            docRef = users.document();
            user.setId(docRef.getId());
        }

        ApiFuture<WriteResult> result = docRef.set(user);
        return result.get().getUpdateTime().toString();
    }

    public User getUserByEmail(String email) throws ExecutionException, InterruptedException {
        CollectionReference users = firestore.collection(COLLECTION_NAME);
        Query query = users.whereEqualTo("email", email);
        ApiFuture<QuerySnapshot> querySnapshot = query.get();

        List<QueryDocumentSnapshot> documents = querySnapshot.get().getDocuments();
        if (!documents.isEmpty()) {
            return documents.get(0).toObject(User.class);
        }
        return null;
    }

    public long countUsers() throws ExecutionException, InterruptedException {
        return firestore.collection(COLLECTION_NAME).get().get().size();
    }
}

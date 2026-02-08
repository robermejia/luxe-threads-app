package com.luxethreads.backend.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.luxethreads.backend.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class ProductFirestoreService {

    @Autowired
    private Firestore firestore;

    private static final String COLLECTION_NAME = "products";

    public String saveProduct(Product product) throws ExecutionException, InterruptedException {
        CollectionReference products = firestore.collection(COLLECTION_NAME);
        DocumentReference docRef;

        if (product.getId() != null && !product.getId().trim().isEmpty()) {
            docRef = products.document(product.getId());
        } else {
            docRef = products.document();
            product.setId(docRef.getId());
        }

        ApiFuture<WriteResult> collectionsApiFuture = docRef.set(product);
        return collectionsApiFuture.get().getUpdateTime().toString();
    }

    public List<Product> getAllProducts(String category, Double minPrice, Double maxPrice, String search)
            throws ExecutionException, InterruptedException {
        List<Product> productList = new ArrayList<>();
        CollectionReference products = firestore.collection(COLLECTION_NAME);
        Query query = products;

        if (category != null && !category.isEmpty() && !category.equalsIgnoreCase("Todas")) {
            query = query.whereEqualTo("category", category);
        }

        if (minPrice != null) {
            query = query.whereGreaterThanOrEqualTo("price", minPrice);
        }

        if (maxPrice != null) {
            query = query.whereLessThanOrEqualTo("price", maxPrice);
        }

        ApiFuture<QuerySnapshot> querySnapshot = query.get();

        try {
            List<QueryDocumentSnapshot> documents = querySnapshot.get().getDocuments();
            for (DocumentSnapshot document : documents) {
                Product product = document.toObject(Product.class);
                if (product != null) {
                    // Manual search filter since Firestore doesn't support full-text search
                    // directly without extra indexing/services
                    if (search != null && !search.isEmpty()) {
                        if (product.getName().toLowerCase().contains(search.toLowerCase()) ||
                                product.getDescription().toLowerCase().contains(search.toLowerCase())) {
                            productList.add(product);
                        }
                    } else {
                        productList.add(product);
                    }
                }
            }
        } catch (Exception e) {
            System.err.println("Error fetching products from Firestore: " + e.getMessage());
            e.printStackTrace();
            throw e;
        }
        return productList;
    }

    public long countProducts() throws ExecutionException, InterruptedException {
        CollectionReference products = firestore.collection(COLLECTION_NAME);
        return products.get().get().size();
    }

    public Product getProductByName(String name) throws ExecutionException, InterruptedException {
        CollectionReference products = firestore.collection(COLLECTION_NAME);
        ApiFuture<QuerySnapshot> query = products.whereEqualTo("name", name).get();
        List<QueryDocumentSnapshot> documents = query.get().getDocuments();
        if (!documents.isEmpty()) {
            return documents.get(0).toObject(Product.class);
        }
        return null;
    }

    public void deleteAllProducts() throws ExecutionException, InterruptedException {
        CollectionReference products = firestore.collection(COLLECTION_NAME);
        ApiFuture<QuerySnapshot> future = products.get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        for (DocumentSnapshot document : documents) {
            document.getReference().delete();
        }
    }
}

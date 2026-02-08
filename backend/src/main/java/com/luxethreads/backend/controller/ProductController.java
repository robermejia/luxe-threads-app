package com.luxethreads.backend.controller;

import com.luxethreads.backend.model.Product;
import com.luxethreads.backend.service.ProductFirestoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = { "http://localhost:5173", "http://192.168.18.11:5173" })
public class ProductController {

    @Autowired
    private ProductFirestoreService productFirestoreService;

    @GetMapping
    public List<Product> getAllProducts(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) Double minPrice,
            @RequestParam(required = false) Double maxPrice,
            @RequestParam(required = false) String search) throws Exception {
        return productFirestoreService.getAllProducts(category, minPrice, maxPrice, search);
    }

    @PostMapping
    public String createProduct(@RequestBody Product product) throws Exception {
        return productFirestoreService.saveProduct(product);
    }
}

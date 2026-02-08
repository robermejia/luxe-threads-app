package com.luxethreads.backend.model;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Product {
    private String id;
    private String name;
    private Double price;
    private Double oldPrice;
    private String category;
    private String tag;
    private String image;
    private String description;
    private Integer stock;

    public Product(String id, String name, Double price, Double oldPrice, String category, String tag, String image,
            String description, Integer stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.oldPrice = oldPrice;
        this.category = category;
        this.tag = tag;
        this.image = image;
        this.description = description;
        this.stock = stock;
    }
}

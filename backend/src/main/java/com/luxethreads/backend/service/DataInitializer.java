package com.luxethreads.backend.service;

import com.luxethreads.backend.model.Product;
import com.luxethreads.backend.model.User;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

@Service
public class DataInitializer {

        @Bean
        public CommandLineRunner initData(ProductFirestoreService firestoreService, UserFirestoreService userService) {
                return args -> {
                        // Reset and Initialize Products
                        System.out.println("Iniciando limpieza y sincronización de catálogo...");
                        try {
                                // We clear everything and reload to ensure clean migration of image URLs and no
                                // duplicates
                                firestoreService.deleteAllProducts();
                                System.out.println("Base de datos de productos limpiada.");

                                Product[] initialProducts = {
                                                new Product(null, "Oxford Premium Azul Marino", 89.0, null,
                                                                "Formal", "Nuevo",
                                                                "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=800",
                                                                "Camisa Oxford de alta calidad.", 15),
                                                new Product(null, "Blazer Slim Fit Gris", 150.0, 180.0,
                                                                "Formal", "Premium",
                                                                "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800",
                                                                "Blazer elegante para ocasiones especiales.", 8),
                                                new Product(null, "Pantalón Chino Beige", 45.0, 60.0,
                                                                "Casual", "Oferta",
                                                                "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800",
                                                                "Pantalón cómodo y versátil.", 20),
                                                new Product(null, "Corbata Seda Roja", 25.0, null,
                                                                "Accesorios", "Nuevo",
                                                                "https://images.unsplash.com/photo-1523264629844-40dd6bf17c2b?auto=format&fit=crop&q=80&w=800",
                                                                "Corbata de seda natural.", 50),
                                                new Product(null, "Camiseta Algodón Pima", 35.0, null,
                                                                "Casual", "Básico",
                                                                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800",
                                                                "Camiseta de algodón premium de tacto suave.", 100),
                                                new Product(null, "Traje Completo Marengo", 299.0, 350.0,
                                                                "Formal", "Premium",
                                                                "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=800",
                                                                "Traje completo de lana virgen.", 5),
                                                new Product(null, "Cinturón Cuero Café", 40.0, null,
                                                                "Accesorios", "",
                                                                "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=800",
                                                                "Cinturón de cuero legítimo artesanal.", 35),
                                                new Product(null, "Sudadera Hoodie Negra", 55.0, 75.0,
                                                                "Casual", "Oferta",
                                                                "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800",
                                                                "Sudadera con capucha y bolsillo canguro.", 40),
                                                new Product(null, "Zapatos Oxford Marrones", 125.0, null,
                                                                "Formal", "Nuevo",
                                                                "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80&w=800",
                                                                "Zapatos elegantes de cuero cordobán.", 12),
                                                new Product(null, "Reloj Minimalista", 85.0, null,
                                                                "Accesorios", "Nuevo",
                                                                "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800",
                                                                "Reloj de pulsera con diseño minimalista.", 10),
                                                new Product(null, "Chaqueta Bomber Verde", 95.0, 120.0,
                                                                "Casual", "Oferta",
                                                                "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800",
                                                                "Chaqueta estilo bomber ligera.", 15),
                                                new Product(null, "Jersey Punto Azul", 65.0, null,
                                                                "Premium", "Premium",
                                                                "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?auto=format&fit=crop&q=80&w=800",
                                                                "Jersey de punto fino de alta gama.", 25),
                                                new Product(null, "Gafas de Sol Carey", 70.0, 90.0,
                                                                "Accesorios", "Oferta",
                                                                "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800",
                                                                "Gafas de sol con montura de carey.", 30),
                                                new Product(null, "Camisa Lino Blanca", 55.0, null,
                                                                "Casual", "Nuevo",
                                                                "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800",
                                                                "Camisa 100% lino perfecta para el verano.", 45),
                                                new Product(null, "Abrigo de Paño", 195.0, 250.0,
                                                                "Premium", "Premium",
                                                                "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&q=80&w=800",
                                                                "Abrigo largo de lana para climas fríos.", 7)
                                };

                                for (Product p : initialProducts) {
                                        firestoreService.saveProduct(p);
                                }
                                System.out.println(
                                                "Catálogo sincronizado correctamente con 15 productos frescos y stock.");
                        } catch (Exception e) {
                                System.err.println("Error sincronizando catálogo: " + e.getMessage());
                                e.printStackTrace();
                        }

                        // User initialization
                        try {
                                if (userService.countUsers() == 0) {
                                        User defaultUser = new User();
                                        defaultUser.setName("Admin LuxeThreads");
                                        defaultUser.setEmail("admin@luxethreads.com");
                                        defaultUser.setPassword("admin123");
                                        defaultUser.setRole("ADMIN");

                                        userService.saveUser(defaultUser);
                                        System.out.println(
                                                        "Credenciales de administrador creadas: admin@luxethreads.com / admin123");
                                }
                        } catch (Exception e) {
                                System.err.println("Error inicializando usuario: " + e.getMessage());
                        }
                };
        }
}

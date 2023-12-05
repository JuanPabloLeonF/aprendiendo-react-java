package com.juan.backend.cartapp.web.controller;

import com.juan.backend.cartapp.domain.service.IProductService;
import com.juan.backend.cartapp.persistency.models.entity.ProductEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    private final IProductService iProductService;

    public ProductController(IProductService iProductService) {
        this.iProductService = iProductService;
    }

    @GetMapping("/getall")
    public List<ProductEntity> getAllProduct() {
        return  iProductService.getAllProduct();
    }
}

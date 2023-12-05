package com.juan.backend.cartapp.domain.service;

import com.juan.backend.cartapp.persistency.models.entity.ProductEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IProductService {

    List<ProductEntity> getAllProduct();
}

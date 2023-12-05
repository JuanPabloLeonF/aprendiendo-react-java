package com.juan.backend.cartapp.domain.implementationService;

import com.juan.backend.cartapp.domain.service.IProductService;
import com.juan.backend.cartapp.persistency.models.entity.ProductEntity;
import com.juan.backend.cartapp.persistency.repository.IProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
public class ProductServiceImplementation implements IProductService {

    private final IProductRepository iProductRepository;

    public ProductServiceImplementation(IProductRepository iProductRepository) {
        this.iProductRepository = iProductRepository;
    }

    @Override
    @Transactional(readOnly = true)
    public List<ProductEntity> getAllProduct() {
        return iProductRepository.findAll();
    }
}

package com.juan.backend.cartapp.persistency.repository;

import com.juan.backend.cartapp.persistency.models.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProductRepository extends JpaRepository<ProductEntity, Long> {
}

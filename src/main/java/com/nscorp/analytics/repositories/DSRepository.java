package com.nscorp.analytics.repositories;

import com.nscorp.analytics.model.DataSource;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author sedupuganti
 *
 */
public interface DSRepository extends JpaRepository<DataSource, Long>{
    DataSource findOneByDsId(long dsId);

    Long deleteByDsId(long dsId);

}

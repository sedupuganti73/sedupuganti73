package com.nscorp.analytics.repositories;

import com.nscorp.analytics.model.SFDCDataSource;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author sedupuganti
 *
 */
public interface ForceConnectionRepository extends JpaRepository<SFDCDataSource, Long> {
    SFDCDataSource findOneByDsId(long dsId);

    Long deleteByDsId(long dsId);

}

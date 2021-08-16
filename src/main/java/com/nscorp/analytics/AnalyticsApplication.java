package com.nscorp.analytics;

import groovy.util.logging.Log4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableMBeanExport;
import org.springframework.jmx.support.RegistrationPolicy;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@Log4j
@EnableScheduling
@EnableMBeanExport(registration= RegistrationPolicy.IGNORE_EXISTING)
public class AnalyticsApplication {

    public static void main(String[] args) {
        SpringApplication.run(AnalyticsApplication.class, args);
    }

}

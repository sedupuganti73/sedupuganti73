package com.nscorp.analytics.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.web.servlet.DispatcherServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.DispatcherServlet;

import java.util.Arrays;

@Configuration
public class WarConfig {

    @Autowired
    private WebApplicationContext context;

    @Bean
    public DispatcherServletRegistrationBean dispatcherServletRegistration() {
        DispatcherServlet servlet = context.getBean(DispatcherServlet.class);
        DispatcherServletRegistrationBean registration = new DispatcherServletRegistrationBean(servlet, "/*");
        registration.setName("dispatcher");
        return registration;
    }
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "OPTIONS", "DELETE", "PUT", "PATCH"));
        configuration.setAllowedHeaders(Arrays.asList("X-Requested-With", "Origin", "Content-Type", "Accept", "Authorization", "Access-Control-Request-Headers"));
        //configuration.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}

package com.ssafy.kkoma.global.util;

import com.ssafy.kkoma.global.util.JwtAuthenticationExtension;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@ExtendWith({SpringExtension.class, JwtAuthenticationExtension.class})
@AutoConfigureMockMvc
@SpringBootTest
public @interface CustomSpringBootTest {
}

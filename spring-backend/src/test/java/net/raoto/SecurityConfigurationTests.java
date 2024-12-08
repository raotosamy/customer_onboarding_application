package net.raoto;

import net.raoto.usermanagement.AuthResponse;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.RANDOM_PORT)
@ContextConfiguration(classes = DemoApplication.class)
public class SecurityConfigurationTests {

    @LocalServerPort
    private int port;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Test
    public void passwordEncoderTest(){
        String rawPass = "alpha";
        String expectedPass = "$2a$12$.Aufb70gMNb8AWqcuG2chuGzYRCCLpqMD/CsLMaLLZwSI6fMHUaKe";
        Assertions.assertEquals(true, passwordEncoder.matches(rawPass,expectedPass));
    }

    @Test
    public void securityFilterChainTest(){
        String jsonQuery = """
                {
                    "username": "user2",
                    "password": "alpha"
                }
                """;
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> request = new HttpEntity<>(jsonQuery, headers);

        ResponseEntity<String> response = new TestRestTemplate().postForEntity("http://localhost:" + port + "/api/authenticate", request, String.class);
        Assertions.assertEquals(HttpStatus.OK, response.getStatusCode());
    }
}

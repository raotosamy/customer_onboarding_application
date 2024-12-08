package net.raoto.application;

import jakarta.servlet.http.HttpServletRequest;
import net.raoto.DemoApplication;
import net.raoto.SecurityConfiguration;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.bean.override.mockito.MockitoBean;

import java.util.ArrayList;

@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.RANDOM_PORT)
@ContextConfiguration(classes = DemoApplication.class)
public class ApplicationControllerTest {
    @LocalServerPort
    private int port;

    @MockitoBean
    private SecurityFilterChain securityFilterChain;

    @Test
    public void insertApplicationTest() throws Exception {
        Mockito.when(securityFilterChain.getFilters())
                        .thenReturn(new ArrayList<>());
        Mockito.when(securityFilterChain.matches(Mockito.mock(HttpServletRequest.class)))
                .thenReturn(true);
        String jsonQuery = """
                {
                    "name":"Raotosamy",
                    "email":"contact@raoto.net",
                    "typeId":1,
                    "company":"RAOTO.NET",
                    "entityId":1,
                    "businessId":1,
                    "licence":"Not defined",
                    "regNumber":"0000-",
                    "country":"Madagascar",
                    "dateInc":"2000-12-25",
                    "passeport":"xxxx-",
                    "processStatus":0,
                    "approverStatus":0
                }
                """;
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> request = new HttpEntity<>(jsonQuery, headers);

        ResponseEntity<String> response = new TestRestTemplate().postForEntity("http://localhost:" + port + "/applications", request, String.class);
        Assertions.assertEquals(HttpStatus.CREATED, response.getStatusCode());
    }

    @Test
    public void listApplicationTest() throws Exception {
        Mockito.when(securityFilterChain.getFilters())
                .thenReturn(new ArrayList<>());
        Mockito.when(securityFilterChain.matches(Mockito.mock(HttpServletRequest.class)))
                .thenReturn(true);
        ResponseEntity<String> response = new TestRestTemplate().getForEntity("http://localhost:" + port + "/applications", String.class);
        Assertions.assertEquals(HttpStatus.OK, response.getStatusCode());
    }
}

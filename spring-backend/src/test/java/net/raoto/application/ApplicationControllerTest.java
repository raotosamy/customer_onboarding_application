package net.raoto.application;

import net.raoto.DemoApplication;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;

@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.RANDOM_PORT)
@ContextConfiguration(classes = DemoApplication.class)
public class ApplicationControllerTest {
    
}

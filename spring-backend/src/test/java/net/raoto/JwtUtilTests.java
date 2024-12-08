package net.raoto;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class JwtUtilTests {

    @Test
    public void generateTokenTest(){
        String userName = "raoto";
        JwtUtil jwtUtil = new JwtUtil();
        String token = jwtUtil.generateToken("raoto");
        Assertions.assertEquals(userName, jwtUtil.extractUsername(token));
    }
}

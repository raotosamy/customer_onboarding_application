package net.raoto;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.SecretKeyAlgorithm;

import java.util.Date;

public class JwtUtil {

    private String secretKey = "/75zlmll1p8Py6YUTwA2Bd4Ngms1cadEK+voxXQPpqQInPoXp+oElhg1x6tSDG1IZX1N/igk4qbyA1WO62pOhbzZZpjTl0hV5bQHXUOLq02aDpwy9Y3jSdhCc/UhI1r94jNoSik/KyLcGEa+bvN9fJ0VBOy2nFLVQNNe4z8ACZQ=";

    public String generateToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)) // 1 hour expiration
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }

    public Claims extractClaims(String token) {
        return Jwts.parser()
                .setSigningKey(secretKey)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    public String extractUsername(String token) {
        return extractClaims(token).getSubject();
    }

    public boolean isTokenExpired(String token) {
        return extractClaims(token).getExpiration().before(new Date());
    }
}

package net.raoto.usermanagement;

public class AuthResponse {
    private String jwtKey;
    private String username;

    public AuthResponse(String username, String jwtKey){
        this.username = username;
        this.jwtKey = jwtKey;
    }

    public void setJwtKey(String jwtKey) {
        this.jwtKey = jwtKey;
    }

    public String getJwtKey() {
        return jwtKey;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}

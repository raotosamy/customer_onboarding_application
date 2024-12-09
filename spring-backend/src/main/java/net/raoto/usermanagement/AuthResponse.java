package net.raoto.usermanagement;

public class AuthResponse {
    private String jwtKey;
    private String username;
    private String role;

    public AuthResponse(String username, String role, String jwtKey){
        this.username = username;
        this.role = role;
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

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}

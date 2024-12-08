package net.raoto.application;

import jakarta.persistence.*;

@Entity
@Table(name = "documents")
public class SubmittedDocument {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String mimeType;
    private String filePath;
    private int size;
    @ManyToOne
    @JoinColumn(name = "applicationId", nullable = false)
    private OnboardingApplication application;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMimeType() {
        return mimeType;
    }

    public void setMimeType(String mimeType) {
        this.mimeType = mimeType;
    }

    public String getFilePath() {
        return filePath;
    }

    public void setFilePath(String filePath) {
        this.filePath = filePath;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }
}

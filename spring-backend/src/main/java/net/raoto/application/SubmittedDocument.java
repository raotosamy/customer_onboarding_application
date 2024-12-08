package net.raoto.application;

import jakarta.persistence.*;

@Entity
@Table(name = "documents")
public class SubmittedDocument {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    private String mimeType;
    private String filePath;
    private int size;
    @ManyToOne
    @JoinColumn(name = "applicationId", nullable = false)
    private OnboardingApplication application;
}

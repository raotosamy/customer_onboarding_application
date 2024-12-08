package net.raoto.application;

import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "applications")
public class OnboardingApplication {
    @Id
    @GeneratedValue(generator = "uuid-gen")
    @GenericGenerator(name = "uuid-gen", strategy = "uuid")
    private String id;
    private String name;
    private String email;
    private long typeId;
    private String company;
    private long entityId;
    private long businessId;
    private String licence;
    private String regNumber;
    private String country;
    private Date dateInc;
    private String passeport;
    private long processStatus;
    private long approverStatus;
    @OneToMany(mappedBy = "documents")
    private List<SubmittedDocument> uploads;
}

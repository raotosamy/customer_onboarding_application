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
    @OneToMany(mappedBy = "id")
    private List<SubmittedDocument> uploads;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public long getTypeId() {
        return typeId;
    }

    public void setTypeId(long typeId) {
        this.typeId = typeId;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public long getEntityId() {
        return entityId;
    }

    public void setEntityId(long entityId) {
        this.entityId = entityId;
    }

    public long getBusinessId() {
        return businessId;
    }

    public void setBusinessId(long businessId) {
        this.businessId = businessId;
    }

    public String getLicence() {
        return licence;
    }

    public void setLicence(String licence) {
        this.licence = licence;
    }

    public String getRegNumber() {
        return regNumber;
    }

    public void setRegNumber(String regNumber) {
        this.regNumber = regNumber;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public Date getDateInc() {
        return dateInc;
    }

    public void setDateInc(Date dateInc) {
        this.dateInc = dateInc;
    }

    public String getPasseport() {
        return passeport;
    }

    public void setPasseport(String passeport) {
        this.passeport = passeport;
    }

    public long getProcessStatus() {
        return processStatus;
    }

    public void setProcessStatus(long processStatus) {
        this.processStatus = processStatus;
    }

    public long getApproverStatus() {
        return approverStatus;
    }

    public void setApproverStatus(long approverStatus) {
        this.approverStatus = approverStatus;
    }
}

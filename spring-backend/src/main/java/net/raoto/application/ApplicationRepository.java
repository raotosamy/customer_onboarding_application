package net.raoto.application;

import net.raoto.usermanagement.User;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "applications", collectionResourceRel = "applications")
public interface ApplicationRepository  extends PagingAndSortingRepository<OnboardingApplication, String>, ListCrudRepository<OnboardingApplication, String> {

}

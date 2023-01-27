package back.back.repository;

import back.back.domain.Company;
import back.back.domain.News;
import back.back.domain.financialratio.NetProfit;
import back.back.domain.financialratio.OperatingProfit;
import back.back.domain.financialratio.OperatingProfitMargin;
import back.back.domain.financialratio.Revenue;
import back.back.web.CompanyDto;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class CompanyRepository {

    private final EntityManager em;

    public Long save(Company company) {
        em.persist(company);

        return company.getId();
    }

    public List<Company> findAll(String categoryName) {
        String jpql = "select c from Company c where c.categoryName = :categoryName ";
        List<Company> resultList = em.createQuery(jpql, Company.class)
                .setParameter("categoryName", categoryName)
                .getResultList();
        return resultList;
    }

    public List<Company> findByCompanyName (String companyName) {
        String jpql = "select c " +
                "from Company c " +
                "join fetch c.revenue revenue " +
                "join fetch c.netProfit netP " +
                "join fetch c.operatingProfit operating_profit " +
                "join fetch c.operatingProfitMargin margin " +
                "join fetch c.growthRatio growthRatio " +
                "where c.companyName = :companyName";
        List<Company> findCompany= em.createQuery(jpql, Company.class).setParameter("companyName", companyName)
                .getResultList();

        return findCompany;
    }

}

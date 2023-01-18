package back.back.repository;

import back.back.domain.Company;
import back.back.domain.News;
import back.back.domain.financialratio.NetProfit;
import back.back.domain.financialratio.OperatingProfit;
import back.back.domain.financialratio.OperatingProfitMargin;
import back.back.domain.financialratio.Revenue;
import back.back.web.CompanyDto;
import back.back.web.HomeDto;
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
    public List<Company> findAll() {
        String jpql = "select c from Company c";
        List<Company> resultList = em.createQuery(jpql, Company.class).getResultList();

        return resultList;
    }

    public CompanyDto findByCompanyName (String companyName) {
        String jpql = "select c.companyName, news, revenue, netP, operating_profit, margin " +
                "from Company c join c.news news join c.revenue revenue join c.netProfit netP " +
                "join c.operatingProfit operating_profit join c.operatingProfitMargin margin " +
                "where c.companyName = :companyName";
        List<Object[]> result = em.createQuery(jpql).setParameter("companyName", companyName)
                .getResultList();

        CompanyDto companyDto = new CompanyDto((String)result.get(0)[0], new ArrayList<>(), (Revenue)result.get(0)[2],
                (NetProfit)result.get(0)[3], (OperatingProfit) result.get(0)[4], (OperatingProfitMargin) result.get(0)[5]);

        for (Object[] objects : result) {
            companyDto.addNews((News)objects[1]);
        }

        return companyDto;
    }

}

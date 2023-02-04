package back.back;

import back.back.domain.Company;
import back.back.domain.News;
import back.back.domain.financialratio.NetProfit;
import back.back.domain.financialratio.OperatingProfit;
import back.back.domain.financialratio.OperatingProfitMargin;
import back.back.domain.financialratio.Sales;
import jakarta.persistence.*;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
@Transactional
public class JpaTest {

    @PersistenceContext
    EntityManager em;
    @Test
    void jpaTest() {
        NetProfit netProfit = new NetProfit();
        em.persist(netProfit);

        OperatingProfit operatingProfit = new OperatingProfit();
        em.persist(operatingProfit);

        Sales sales = new Sales();
        em.persist(sales);

        OperatingProfitMargin operatingProfitMargin = new OperatingProfitMargin();
        em.persist(operatingProfitMargin);

        List<News> news = new ArrayList<>();
        news.add(new News());


        Company company = new Company();
        company.setNetProfit(netProfit);
        company.setOperatingProfit(operatingProfit);
        company.setOperatingProfitMargin(operatingProfitMargin);

        em.persist(company);
    }

    @Entity
    static class Member {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name ="member_id")
        private Long id;
        private String name;

        public void setName(String name) {
            this.name = name;
        }
    }
}

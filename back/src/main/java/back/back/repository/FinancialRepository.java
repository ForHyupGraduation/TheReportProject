package back.back.repository;

import back.back.domain.financialratio.*;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class FinancialRepository {
    private final EntityManager em;
    public void save(OperatingProfitMargin margin, OperatingProfit profit, Sales sales, NetProfit netProfit) {
        em.persist(margin);
        em.persist(profit);
        em.persist(sales);
        em.persist(netProfit);
    }
}

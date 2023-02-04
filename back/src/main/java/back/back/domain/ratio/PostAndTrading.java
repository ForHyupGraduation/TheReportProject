package back.back.domain.ratio;

import back.back.domain.Company;
import back.back.domain.financialratio.FinancialRatio;
import com.opencsv.bean.CsvBindByName;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@Entity
public class PostAndTrading {
    @Id
    @GeneratedValue
    @Column(name = "post_and_trading_id")
    private Long id;
    private String companyCode;
    private String date;
    private Double postPerDay;
    private Double tradingPerDay;


    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;


}

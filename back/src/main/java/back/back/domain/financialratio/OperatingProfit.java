package back.back.domain.financialratio;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Setter @Getter
@NoArgsConstructor
public class OperatingProfit{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "operating_profit_id")
    private Long id;
    private String companyCode;
    private String operatingProfitsFourYearsAgo;
    private String operatingProfitsThreeYearsAgo;
    private String operatingProfitsTwoYearsAgo;
    private String operatingProfitsOneYearsAgo;

}

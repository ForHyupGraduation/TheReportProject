package back.back.domain.financialratio;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Setter @Getter
public class OperatingProfitMargin implements FinancialRatio{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "operating_profit_margin_id")
    private Long id;
    private String previousFourthQuarter;
    private String previousThirdQuarter;
    private String previousSecondQuarter;
    private String previousQuarter;


    @Override
    public void setAllValue(List<String> allValue) {

    }
}

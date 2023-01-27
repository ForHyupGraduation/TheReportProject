package back.back.domain.financialratio;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Setter @Getter
public class NetProfit implements FinancialRatio{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "net_profit_id")
    private Long id;
    private String previousFourthQuarter;
    private String previousThirdQuarter;
    private String previousSecondQuarter;
    private String previousQuarter;


    @Override
    public String toString() {
        return "NetProfit{" +
                "id=" + id +
                ", previousFourthQuarter='" + previousFourthQuarter + '\'' +
                ", previousThirdQuarter='" + previousThirdQuarter + '\'' +
                ", previousSecondQuarter='" + previousSecondQuarter + '\'' +
                ", previousQuarter='" + previousQuarter + '\'' +
                '}';
    }

    @Override
    public void setAllValue(List<String> allValue) {
        setPreviousFourthQuarter(allValue.get(0));
        setPreviousThirdQuarter(allValue.get(1));
        setPreviousSecondQuarter(allValue.get(2));
        setPreviousQuarter(allValue.get(3));
    }
}

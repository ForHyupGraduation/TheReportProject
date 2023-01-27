package back.back.domain.financialratio;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
@Entity
@Setter @Getter
public class Revenue implements FinancialRatio{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "revenue_id")
    private Long id;

    private String previousFourthQuarter;
    private String previousThirdQuarter;
    private String previousSecondQuarter;
    private String previousQuarter;



    @Override
    public void setAllValue(List<String> allValue) {
        setPreviousFourthQuarter(allValue.get(0));
        setPreviousThirdQuarter(allValue.get(1));
        setPreviousSecondQuarter(allValue.get(2));
        setPreviousQuarter(allValue.get(3));
    }

    @Override
    public String toString() {
        return "Revenue{" +
                "id=" + id +
                ", previousFourthQuarter='" + previousFourthQuarter + '\'' +
                ", previousThirdQuarter='" + previousThirdQuarter + '\'' +
                ", previousSecondQuarter='" + previousSecondQuarter + '\'' +
                ", previousQuarter='" + previousQuarter + '\'' +
                '}';
    }
}

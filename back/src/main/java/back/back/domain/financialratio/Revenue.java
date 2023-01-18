package back.back.domain.financialratio;

import jakarta.persistence.*;

import java.util.List;
@Entity
public class Revenue implements FinancialRatio{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "revenue_id")
    private Long id;

    private String previousFourthQuarter;
    private String previousThirdQuarter;
    private String previousSecondQuarter;
    private String previousQuarter;

    public String getPreviousFourthQuarter() {
        return previousFourthQuarter;
    }

    public void setPreviousFourthQuarter(String previousFourthQuarter) {
        this.previousFourthQuarter = previousFourthQuarter;
    }

    public String getPreviousThirdQuarter() {
        return previousThirdQuarter;
    }

    public void setPreviousThirdQuarter(String previousThirdQuarter) {
        this.previousThirdQuarter = previousThirdQuarter;
    }

    public String getPreviousSecondQuarter() {
        return previousSecondQuarter;
    }

    public void setPreviousSecondQuarter(String previousSecondQuarter) {
        this.previousSecondQuarter = previousSecondQuarter;
    }

    public String getPreviousQuarter() {
        return previousQuarter;
    }

    public void setPreviousQuarter(String previousQuarter) {
        this.previousQuarter = previousQuarter;
    }

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

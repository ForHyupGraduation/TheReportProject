package back.back.domain.financialratio;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter @Getter
public class Sales {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "revenue_id")
    private Long id;

    private String companyName;
    private String companyCode;

    private String salesFourYearsAgo;
    private String salesThreeYearsAgo;
    private String salesTwoYearsAgo;
    private String salesOneYearsAgo;

}

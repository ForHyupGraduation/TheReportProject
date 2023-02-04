package back.back.domain.ratio;

import back.back.domain.Company;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter @Setter
public class NormalizedInterestRatio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "interest_ratio_id")
    private Long id;

    private String companyCode;

    private String date;

    private Double postPerDay;

    private Double tradingPerDay;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;

}

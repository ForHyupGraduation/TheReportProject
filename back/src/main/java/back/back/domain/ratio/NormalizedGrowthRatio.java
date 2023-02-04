package back.back.domain.ratio;

import com.opencsv.bean.CsvBindByName;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter @Setter
@ToString(of={"companyName", "categoryCode", "averageSalesGrowthRate", "averageOperatingProfitGrowthRate"})
public class NormalizedGrowthRatio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "growth_ratio_id")
    private Long id;

    @CsvBindByName(column = "companyName")
    private String companyName;

    @CsvBindByName(column = "companyCode")
    private String companyCode;

    @CsvBindByName(column = "averageSalesGrowthRate")
    private Double averageSalesGrowthRate;

    @CsvBindByName(column = "averageOperatingProfitsGrowthRate")
    private Double averageOperatingProfitsGrowthRate;

}

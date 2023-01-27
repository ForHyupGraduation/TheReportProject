package back.back.domain.ratio;

import com.opencsv.bean.CsvBindByName;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class GrowthRatio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "growth_ratio_id")
    private Long id;

    @CsvBindByName(column = "categoryCode")
    private int categoryCode;

    @CsvBindByName(column = "salesGrowthRate")
    private Double salesGrowthRate;

    @CsvBindByName(column = "operatingProfitGrowthRate")
    private Double operatingProfitGrowthRate;

}

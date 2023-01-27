package back.back.web;
import lombok.Data;
@Data
public class CompanySimpleInfo {
    private String companyName;
    private Integer growthPoint;
    private Integer interestPoint;
    private Double salesGrowthRate;
    private Double operatingProfitGrowthRate;

    public CompanySimpleInfo(String companyName, Integer growthPoint, Integer interestPoint, Double salesGrowthRate, Double operatingProfitGrowthRate) {
        this.companyName = companyName;
        this.growthPoint = growthPoint;
        this.interestPoint = interestPoint;
        this.salesGrowthRate = salesGrowthRate;
        this.operatingProfitGrowthRate = operatingProfitGrowthRate;
    }
}

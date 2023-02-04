package back.back.web;
import back.back.domain.Company;
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

    public CompanySimpleInfo(Company company) {
        this.companyName = company.getCompanyName();
        this.growthPoint = company.getGrowthPoint();
        this.interestPoint = company.getInterestPoint();
        this.salesGrowthRate = company.getNormalizedGrowthRatio().getAverageSalesGrowthRate();
        this.operatingProfitGrowthRate = company.getNormalizedGrowthRatio().getAverageOperatingProfitsGrowthRate();
    }
}

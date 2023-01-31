package back.back.web;

import back.back.domain.Company;
import lombok.Data;

@Data
public class RelationCompanyListDto {
    private String companyName;
    private Integer growthPoint;
    private Integer interestPoint;

    public RelationCompanyListDto(Company company) {
        this.companyName = company.getCompanyName();
        this.growthPoint = company.getGrowthPoint();
        this.interestPoint = company.getInterestPoint();
    }
}

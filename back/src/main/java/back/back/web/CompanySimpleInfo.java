package back.back.web;

import lombok.Data;

@Data
public class CompanySimpleInfo {
    private String companyName;
    private Integer growthPoint;
    private Integer interestPoint;

    public CompanySimpleInfo(String companyName, Integer growthPoint, Integer interestPoint) {
        this.companyName = companyName;
        this.growthPoint = growthPoint;
        this.interestPoint = interestPoint;
    }
}

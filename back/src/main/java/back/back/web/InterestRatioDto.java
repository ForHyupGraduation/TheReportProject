package back.back.web;

import back.back.domain.ratio.NormalizedInterestRatio;
import lombok.Data;

@Data
public class InterestRatioDto {
    private String companyDate;
    private Double postPerDay;
    private Double volumePerDay;

    public InterestRatioDto(NormalizedInterestRatio ratio) {
        this.companyDate = ratio.getCompanyDate();
        this.postPerDay = ratio.getPostsPerDay();
        this.volumePerDay = ratio.getVolumePerDay();
    }
}

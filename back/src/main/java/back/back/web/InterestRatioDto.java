package back.back.web;

import back.back.domain.ratio.InterestRatio;
import lombok.Data;

@Data
public class InterestRatioDto {
    private String companyDate;
    private Double postPerDay;
    private Double volumePerDay;
    public InterestRatioDto(InterestRatio ratio) {
        this.companyDate = ratio.getCompanyDate();
        this.postPerDay = ratio.getPostPerDay();
        this.volumePerDay = ratio.getVolumePerDay();
    }
}

package back.back.web;

import back.back.domain.ratio.NormalizedInterestRatio;
import back.back.domain.ratio.PostAndTrading;
import lombok.Data;

@Data
public class InterestRatioDto {
    private String companyDate;
    private Double postPerDay;
    private Double volumePerDay;

    public InterestRatioDto(PostAndTrading postAndTrading) {
        this.companyDate = postAndTrading.getDate();
        this.postPerDay = postAndTrading.getPostPerDay();
        this.volumePerDay = postAndTrading.getTradingPerDay();
    }
}

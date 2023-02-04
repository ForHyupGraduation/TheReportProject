package back.back.web;

import back.back.domain.MinMaxRatio;
import back.back.domain.ratio.PostAndTrading;
import lombok.Data;

@Data
public class InterestRatioDto {
    private String companyDate;
    private Double postPerDay;
    private Double volumePerDay;
    private Integer interestPoint;
    public InterestRatioDto(PostAndTrading postAndTrading, MinMaxRatio minMaxRatio) {
        this.companyDate = postAndTrading.getDate();
        this.postPerDay = postAndTrading.getPostPerDay();
        this.volumePerDay = postAndTrading.getTradingPerDay();
        this.interestPoint =  getInterestPoint(minMaxRatio);
    }


    private int getInterestPoint(MinMaxRatio minMaxRatio) {
        Double maxPosts = minMaxRatio.getMaxPosts();
        Double minPosts = minMaxRatio.getMinPosts();
        Double maxVolume = minMaxRatio.getMaxVolume();
        Double minVolume = minMaxRatio.getMinVolume();

        Double positionA = (postPerDay - minPosts) / (maxPosts - minPosts);
        Double positionB = (volumePerDay - minVolume) / (maxVolume - minVolume);
        return (int)((positionA + positionB) / 2 * 100) ;
    }


}

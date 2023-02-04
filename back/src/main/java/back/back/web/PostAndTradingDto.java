package back.back.web;

import back.back.domain.MinMaxRatio;
import back.back.domain.ratio.PostAndTrading;
import lombok.Data;

@Data
public class PostAndTradingDto {
    private String date;
    private Double postPerDay;
    private Double tradingPerDay;

    public PostAndTradingDto(PostAndTrading postAndTrading) {
        postPerDay = postAndTrading.getPostPerDay();
        tradingPerDay = postAndTrading.getTradingPerDay();
        date = postAndTrading.getDate();
    }
}

package back.back.crawler;

import back.back.domain.financialratio.*;

import java.util.HashMap;
import java.util.Map;

public class CrawlerUtils {
    public static Map<String, FinancialRatio> crawlerTarget() {
        Map<String, FinancialRatio> target = new HashMap<>();
        target.put("영업이익률", new OperatingProfitMargin());
        target.put("영업이익", new OperatingProfit());
        target.put("매출액", new Revenue());
        target.put("당기순이익", new NetProfit());
        return target;
    }
}

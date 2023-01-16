package back.back;

import back.back.crawler.CrawlerUtils;
import back.back.domain.financialratio.FinancialRatio;
import org.junit.jupiter.api.Test;

import java.util.Map;

public class UtilsTest {
    @Test
    void utilsTest() {
        Map<String, FinancialRatio> financialRatioMap = CrawlerUtils.crawlerTarget();

        for (Map.Entry<String, FinancialRatio> entry : financialRatioMap.entrySet()) {
            System.out.println("key : " + entry.getKey() +" value : " + entry.getValue());
        }
    }
}

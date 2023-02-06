package back.back.crawler;


import back.back.csvFileReader.CsvFileReader;
import back.back.domain.MinMaxRatio;
import back.back.domain.financialratio.FinancialRatio;
import back.back.domain.financialratio.OperatingProfit;
import back.back.domain.financialratio.Sales;
import back.back.domain.ratio.NormalizedGrowthRatio;
import back.back.domain.ratio.NormalizedInterestRatio;
import back.back.domain.ratio.PostAndTrading;
import back.back.web.FinancialDto;
import lombok.extern.slf4j.Slf4j;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.*;

@Slf4j
public class BuzzInfoCrawler{
    private WebDriver webDriver;
    private ChromeDriver chromeDriver = new ChromeDriver();
    private CsvFileReader reader = new CsvFileReader();
//    public BuzzIndex findBuzzInfo(String buzz) {
//        Map<String, List<String>> map = new HashMap<>();
//        chromeDriver.get("https://finance.naver.com");
//        WebElement searchInput = chromeDriver.findElement(By.id("stock_items"));
//        searchInput.sendKeys(buzz);
//        sleep();
//
//        chromeDriver.findElement(By.cssSelector("#atcmp > div > div > ul > li:nth-child(1) > a")).click();
//        WebElement buzzInfoTable = chromeDriver.findElement(By.cssSelector("#content > div.section.cop_analysis > div.sub_section > table")).findElement(By.tagName("tbody"));
//        for (int i = 0; i < 4; i++) { // 9, roe;
//            String information = buzzInfoTable.findElement(By.cssSelector("tr:nth-child(" + (i + 1) + ") > th")).getText();
//            List<String> financialInfo = new ArrayList<>();
//            for (int j = 8; j < 12; j++) { //
//                WebElement element = buzzInfoTable.findElement(By.cssSelector("tr:nth-child(" + (i + 1) + ") > td:nth-child(" + (j) + ")"));
//                financialInfo.add(element.getText());
//            }
//            map.put(information, financialInfo);
//        }
//
//        Map<String, String> empNumberInfo = null;
//        try {
//            empNumberInfo = empNumberExtract(buzz);
//        } catch (InterruptedException e) {
//            throw new RuntimeException(e);
//        }
//        closeDriver();
//        return new BuzzIndex(map, empNumberInfo);
//    }

    public FinancialDto findBuzzInfo2(String buzz) {
        Map<String, FinancialRatio> ratioMap = new HashMap<>();
        chromeDriver.get("https://finance.naver.com");
        WebElement searchInput = chromeDriver.findElement(By.id("stock_items"));
        searchInput.sendKeys(buzz+"   ");
        sleep();

//
//        chromeDriver.findElement(By.cssSelector("#atcmp > div > div > ul > li:nth-child(1) > a")).click();
//        WebElement buzzInfoTable = chromeDriver.findElement(By.cssSelector("#content > div.section.cop_analysis > div.sub_section > table")).findElement(By.tagName("tbody"));
//        for (int i = 0; i < 4; i++) { // 9, roe;
//            String information = buzzInfoTable.findElement(By.cssSelector("tr:nth-child(" + (i + 1) + ") > th")).getText();
//            System.out.println(information);
//            FinancialRatio financialRatio = ratioMap.get(information);
//            List<String> financialInfo = new ArrayList<>();
//            for (int j = 8; j < 12; j++) { //
//                WebElement element = buzzInfoTable.findElement(By.cssSelector("tr:nth-child(" + (i + 1) + ") > td:nth-child(" + (j) + ")"));
//                financialInfo.add(element.getText());
//            }
//            financialRatio.setAllValue(financialInfo);
//        }
        chromeDriver.findElement(By.cssSelector("#atcmp > div > div > ul > li:nth-child(1) > a")).click();
        WebElement element = chromeDriver.findElement(By.cssSelector("#middle > div.h_company > div.wrap_company > div > span.code"));
        String companyCode = element.getText(); //123123456
        WebElement categoryElement = chromeDriver.findElement(By.cssSelector("#content > div.section.trade_compare > h4 > em > a"));
        String categoryName = categoryElement.getText(); //
        closeDriver();
        //
        List<NormalizedInterestRatio> normalizedInterestRatios = reader.readInterestRatio(companyCode);
        List<PostAndTrading> postAndTradings = reader.postAndTrading(companyCode);
        NormalizedGrowthRatio growthRates = reader.readGrowthRatio( categoryName, companyCode);
        MinMaxRatio minMaxRatio = new MinMaxRatio(reader.readMinMaxRatio(companyCode));
        Sales sales = reader.sales(categoryName, companyCode);
        OperatingProfit operatingProfit = reader.operatingProfit(categoryName, companyCode);
        FinancialDto financialDto = new FinancialDto(companyCode, categoryName);

        financialDto.setSales(sales);
        financialDto.setGrowthRates(growthRates);
        financialDto.setMinMaxRatio(minMaxRatio);
        financialDto.setOperatingProfit(operatingProfit);
        financialDto.setPostAndTradings(postAndTradings);
        financialDto.setNormalizedInterestRatios(normalizedInterestRatios);

        return financialDto;
    }

//    private Map<String, String> empNumberExtract(String buzz) throws InterruptedException {
//        chromeDriver.get("https://www.saramin.co.kr/zf_user/");
//        Map<String, String> map = new LinkedHashMap<>();
//        WebElement buttonSearch = chromeDriver.findElement(By.className("search"));
//        buttonSearch.click();
//        WebElement input = chromeDriver.findElement(By.id("ipt_keyword_recruit"));
//        input.sendKeys(buzz);
//        chromeDriver.findElement(By.id("btn_search_recruit")).click();
//        chromeDriver.findElement(By.cssSelector("#content > ul.tab_search_result.on > li:nth-child(3) > a")).click();
//        String href = chromeDriver.findElement(By.cssSelector("#company_info_list > div.content > div:nth-child(1) > h2 > a")).getAttribute("href");
//        chromeDriver.get(href);
//        for (int i=0; i<5; i++) {
//            WebElement empPerMonth = chromeDriver.findElement(By.cssSelector("#employee_graph_info > div.graph_range > div:nth-child(" + (i + 1) + ") > div > span.txt_value"));
//            WebElement month = chromeDriver.findElement(By.cssSelector("#employee_graph_info > div.graph_range > div:nth-child("+ (i + 1) +") > em"));
//            map.put(month.getText(), empPerMonth.getText());
//        }
//        return map;
//    }

    private void closeDriver() {
        chromeDriver.close();
        chromeDriver.quit();
        chromeDriver = null;
    }


    private void sleep() {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
}

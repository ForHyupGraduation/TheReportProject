package back.back.crawler;


import back.back.domain.BuzzIndex;
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

    public BuzzIndex findBuzzInfo(String buzz) throws InterruptedException {
        Map<String, List<String>> map = new HashMap<>();
        chromeDriver.get("https://finance.naver.com");
        WebElement searchInput = chromeDriver.findElement(By.id("stock_items"));
        searchInput.sendKeys(buzz);
        Thread.sleep(500);
        chromeDriver.findElement(By.cssSelector("#atcmp > div > div > ul > li:nth-child(1) > a")).click();
        WebElement buzzInfoTable = chromeDriver.findElement(By.cssSelector("#content > div.section.cop_analysis > div.sub_section > table")).findElement(By.tagName("tbody"));
        for (int i = 0; i < 9; i++) {
            String information = buzzInfoTable.findElement(By.cssSelector("tr:nth-child(" + (i + 1) + ") > th")).getText();
            List<String> financialInfo = new ArrayList<>();
            for (int j = 6; j < 12; j++) {
                WebElement element = buzzInfoTable.findElement(By.cssSelector("tr:nth-child(" + (i + 1) + ") > td:nth-child(" + (j) + ")"));
                financialInfo.add(element.getText());
            }
            map.put(information, financialInfo);
        }
        Map<String, String> empNumberInfo = empNumberExtract(buzz);
        closeDriver();
        return new BuzzIndex(map, empNumberInfo);
    }

    private Map<String, String> empNumberExtract(String buzz) throws InterruptedException {
        // 사람인 크롤링
        chromeDriver.get("https://www.saramin.co.kr/zf_user/");
        Map<String, String> map = new LinkedHashMap<>();
        WebElement buttonSearch = chromeDriver.findElement(By.className("search"));
        buttonSearch.click();
        Thread.sleep(500);
        WebElement input = chromeDriver.findElement(By.id("ipt_keyword_recruit"));
        input.sendKeys(buzz);
        Thread.sleep(500);
        chromeDriver.findElement(By.id("btn_search_recruit")).click();
        Thread.sleep(500);
        chromeDriver.findElement(By.cssSelector("#content > ul.tab_search_result.on > li:nth-child(3) > a")).click();
        Thread.sleep(500);
        String href = chromeDriver.findElement(By.cssSelector("#company_info_list > div.content > div:nth-child(1) > h2 > a")).getAttribute("href");
        chromeDriver.get(href);
        Thread.sleep(500);
        for (int i=0; i<5; i++) {
            WebElement empPerMonth = chromeDriver.findElement(By.cssSelector("#employee_graph_info > div.graph_range > div:nth-child(" + (i + 1) + ") > div > span.txt_value"));
            WebElement month = chromeDriver.findElement(By.cssSelector("#employee_graph_info > div.graph_range > div:nth-child("+ (i + 1) +") > em"));
            map.put(month.getText(), empPerMonth.getText());
        }
        return map;
    }
    private void closeDriver() {
        chromeDriver.quit();
        chromeDriver.close();
        chromeDriver = null;
    }
}

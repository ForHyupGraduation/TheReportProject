package back.back.crawler;



import back.back.domain.News;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * 필요 데이터
 */
public class NewsCrawler {
    private String url;
    public NewsCrawler() {
    }

    public NewsCrawler(String companyName) {
        this.url = "https://search.naver.com/search.naver?where=news&sm=tab_jum&query=" + companyName + "&starts=1";
    }

    private void setUrl(int page) {
        StringBuffer stringBuffer = new StringBuffer();
        stringBuffer.append(url);
        stringBuffer.replace(url.lastIndexOf("=") + 1, url.length(), String.valueOf(page));
    }

    public List<News> titleParsing() throws IOException {
        List<News> newsList = new ArrayList<>();
        for (int i=0; i < 1; i++) {
            setUrl(i);
            Connection connect = Jsoup.connect(url);
            Document document = connect.get();
            Elements list_news = document.getElementsByClass("news_wrap api_ani_send");

            for (Element element : list_news) {
                Element newsArea = element.getElementsByClass("news_area").get(0);
                String title = newsArea.getElementsByClass("news_tit").get(0).text();
                String content = newsArea.getElementsByClass("api_txt_lines dsc_txt_wrap").get(0).text();
                String newsLinkUrl = newsArea.getElementsByClass("news_tit").get(0).attributes().get("href");
                String imageUrl;
                try{
                    imageUrl = element.getElementsByClass("thumb api_get").get(0).attributes().get("data-lazysrc"); // null 일수도 있음
                } catch (IndexOutOfBoundsException e) {
                    imageUrl = null;
                }
                newsList.add(new News(title, content, imageUrl, newsLinkUrl));
            }
        }
        return newsList;
    }

    public static void main(String[] args) throws IOException {
        NewsCrawler crawler = new NewsCrawler("lg생활");
        List<News> newsForms = crawler.titleParsing();
        for (News newsForm : newsForms) {
            System.out.println(newsForm);
        }
        System.out.println("main");
    }


}

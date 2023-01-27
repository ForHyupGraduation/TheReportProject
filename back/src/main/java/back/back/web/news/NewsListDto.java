package back.back.web.news;

import back.back.domain.News;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NewsListDto {
    private String title;
    private String content;
    private String imageUrl;
    private String linkUrl;

    public NewsListDto() {
    }

    public NewsListDto(News news) {
        this.title = news.getTitle();
        this.content = news.getContent();
        this.imageUrl = news.getImageUrl();
        this.linkUrl = news.getLinkUrl();
    }

}

package back.back.web.news;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class NewsDto {
    private NewsListDto newsListDto;

    public NewsDto() {
    }

    public NewsDto(NewsListDto newsListDto) {
        this.newsListDto = newsListDto;
    }
}

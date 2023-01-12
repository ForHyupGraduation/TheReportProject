package back.back.form;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Entity
@Getter
@Setter
public class NewsForm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="news_form_id")
    private Long id;
    private String title;
    private String content;
    private String linkUrl;
    private String imageUrl;

    public NewsForm() {
    }

    public NewsForm(String title, String content, String linkUrl, String imageUrl) {
        this.title = title;
        this.content = content;
        this.linkUrl = linkUrl;
        this.imageUrl = imageUrl;
    }
}

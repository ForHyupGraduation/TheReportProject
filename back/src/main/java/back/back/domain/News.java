package back.back.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class News {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "news_id")
    private Long id;
    private String title;
    private String content;
    private String imageUrl;
    private String linkUrl;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "company_id")
    private Company company;

    public News() {
    }

    public News(String title, String content, String imageUrl, String linkUrl) {
        this.title = title;
        this.content = content;
        this.imageUrl = imageUrl;
        this.linkUrl = linkUrl;
    }

}

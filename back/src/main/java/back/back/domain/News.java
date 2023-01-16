package back.back.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getLinkUrl() {
        return linkUrl;
    }

    public void setLinkUrl(String linkUrl) {
        this.linkUrl = linkUrl;
    }

    public Company getCompany() {
        return company;
    }


    public void setCompany(Company company) {
        this.company = company;
    }
}

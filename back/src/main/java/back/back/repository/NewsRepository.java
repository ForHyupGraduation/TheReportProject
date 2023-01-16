package back.back.repository;

import back.back.domain.News;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class NewsRepository {

    private final EntityManager em;

    public void save(News news) {
        em.persist(news);
    }

    public void saveAll(List<News> news) {
        for (News news1 : news) {
            em.persist(news);
        }
    }

    public List<News> findAll() {
        String jpql = "select n from News n";
        return em.createQuery(jpql, News.class)
                .getResultList();
    }
}

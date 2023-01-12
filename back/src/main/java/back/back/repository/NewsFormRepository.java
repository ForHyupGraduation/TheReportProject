package back.back.repository;

import back.back.form.NewsForm;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class NewsFormRepository {

    private final EntityManager em;

    public void save(NewsForm newsForm) {
        em.persist(newsForm);
    }

    public List<NewsForm> findAll() {
        String jpql = "select n from NewsForm n";
        return em.createQuery(jpql, NewsForm.class)
                .getResultList();
    }
}

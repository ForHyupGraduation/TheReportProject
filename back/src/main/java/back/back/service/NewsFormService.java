package back.back.service;

import back.back.domain.News;
import back.back.repository.NewsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor

public class NewsFormService {
    private final NewsRepository repository;

    @Transactional
    public void saveAll(List<News> news) {
        news.forEach((newsForm)
                -> repository.save(newsForm));
    }

    @Transactional
    public List<News> findAll() {
        return repository.findAll();
    }
}

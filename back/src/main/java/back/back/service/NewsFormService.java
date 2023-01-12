package back.back.service;

import back.back.form.NewsForm;
import back.back.repository.NewsFormRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NewsFormService {
    private final NewsFormRepository repository;

    @Transactional
    public void saveAll(List<NewsForm> newsForms) {
        newsForms.forEach((newsForm) -> repository.save(newsForm));
    }

    @Transactional
    public List<NewsForm> findAll() {
        return repository.findAll();
    }
}

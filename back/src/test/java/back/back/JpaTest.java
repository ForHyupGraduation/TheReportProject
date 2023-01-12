package back.back;

import jakarta.persistence.*;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@Transactional
public class JpaTest {

    @PersistenceContext
    EntityManager em;
    @Test
    void jpaTest() {
        Member member = new Member();
        member.setName("memberA");
        em.persist(member);
    }

    @Entity
    static class Member {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name ="member_id")
        private Long id;
        private String name;

        public void setName(String name) {
            this.name = name;
        }
    }
}

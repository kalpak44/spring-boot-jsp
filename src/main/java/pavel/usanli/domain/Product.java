package pavel.usanli.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * Created on 025 25.06.17.
 */
@Entity
public class Product {

    // TODO: 025 25.06.17 not realized

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long orderId;
}

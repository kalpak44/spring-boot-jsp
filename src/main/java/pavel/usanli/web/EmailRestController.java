package pavel.usanli.web;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created on 025 25.06.17.
 */
@RestController
public class EmailRestController {

    @RequestMapping(value = "/contacts/order", method = RequestMethod.POST)
    public String updateHosting(@RequestBody OrderFieldInformation[] orderFieldInformation) {
        // TODO: 025 25.06.17 send to mail information about purchase
        return "ok";
    }

    private static class OrderFieldInformation {
        private String name;
        private String value;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getValue() {
            return value;
        }

        public void setValue(String value) {
            this.value = value;
        }
    }
}

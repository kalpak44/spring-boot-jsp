package pavel.usanli.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created on 023 23.06.17.
 */
@Controller
public class XaomiMi2JSPController {
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index(Model model) {
        return "xiaomi2";
    }
}

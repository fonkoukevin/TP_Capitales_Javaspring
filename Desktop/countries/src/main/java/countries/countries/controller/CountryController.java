package countries.countries.controller;

import countries.countries.model.Country;
import countries.countries.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/games")
public class CountryController {

    @Autowired
    private CountryService countryService;

    @GetMapping("/start")
    public Country getRandomCountry() {
        Country country = countryService.getRandomCountry();
        if (country == null) {
            throw new RuntimeException("Aucun pays trouvé dans la base de données.");
        }
        return country;
    }

    @PostMapping("/{id}")
    public Map<String, String> guessCapital(@PathVariable Long id, @RequestBody Map<String, String> payload) {
        String guessedCapital = payload.get("capital");
        Map<String, String> response = new HashMap<>();
        Optional<Country> countryOptional = countryService.getCountryById(id);
        if (countryOptional.isPresent()) {
            Country country = countryOptional.get();
            if (country.getCapital().equalsIgnoreCase(guessedCapital)) {
                response.put("résultat", "C'est exact ! Vous avez deviné la bonne capitale.");
            } else {
                response.put("result", "Wrong! The correct capital is " + country.getCapital());
            }
        } else {
            response.put("result", "Country not found.");
        }
        return response;
    }
}

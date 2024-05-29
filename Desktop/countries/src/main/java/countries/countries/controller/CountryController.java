package countries.countries.controller;

import countries.countries.model.Country;
import countries.countries.model.Player;
import countries.countries.model.Score;
import countries.countries.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/games")
public class CountryController {

    @Autowired
    private CountryService countryService;

    @PostMapping("/start")
    public Country getRandomCountry(@RequestBody Map<String, String> payload) {
        String username = payload.get("username");
        Optional<Player> playerOptional = countryService.getPlayerByUsername(username);
        if (playerOptional.isEmpty()) {
            countryService.createPlayer(username);
        }
        return countryService.getRandomCountry();
    }

    @PostMapping("/{id}")
    public Map<String, String> guessCapital(@PathVariable Long id, @RequestBody Map<String, String> payload) {
        String guessedCapital = payload.get("capital");
        String username = payload.get("username");
        Map<String, String> response = new HashMap<>();
        Optional<Country> countryOptional = countryService.getCountryById(id);
        Optional<Player> playerOptional = countryService.getPlayerByUsername(username);
        if (countryOptional.isPresent() && playerOptional.isPresent()) {
            Country country = countryOptional.get();
            Player player = playerOptional.get();
            if (country.getCapital().equalsIgnoreCase(guessedCapital)) {
                response.put("result", "Correct! You guessed the right capital.");
                countryService.saveScore(player, true);
            } else {
                response.put("result", "Wrong! The correct capital is " + country.getCapital());
                countryService.saveScore(player, false);
            }
        } else {
            response.put("result", "Country or player not found.");
        }
        return response;
    }

    @GetMapping("/score/{username}")
    public List<Score> getPlayerScores(@PathVariable String username) {
        Optional<Player> playerOptional = countryService.getPlayerByUsername(username);
        if (playerOptional.isPresent()) {
            Player player = playerOptional.get();
            return countryService.getScoresByPlayerId(player.getId());
        } else {
            return null;
        }
    }
}

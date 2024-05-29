package countries.countries.service;


import countries.countries.model.Country;
import countries.countries.repository.CountryRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    private List<Country> remainingCountries;

    @PostConstruct
    public void init() {
        List<Country> countries = countryRepository.findAll();
        remainingCountries = new ArrayList<>(countries);
        Collections.shuffle(remainingCountries);
    }

    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    public Optional<Country> getCountryById(Long id) {
        return countryRepository.findById(id);
    }

    public Country getRandomCountry() {
        if (remainingCountries.isEmpty()) {
            resetRemainingCountries();
        }
        return remainingCountries.remove(remainingCountries.size() - 1);
    }

    private void resetRemainingCountries() {
        List<Country> countries = countryRepository.findAll();
        remainingCountries = new ArrayList<>(countries);
        Collections.shuffle(remainingCountries);
    }
}
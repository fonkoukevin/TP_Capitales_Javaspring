package countries.countries.service;


import countries.countries.model.Country;
import countries.countries.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    public Optional<Country> getCountryById(Long id) {
        return countryRepository.findById(id);
    }

    public Country getRandomCountry() {
        List<Country> countries = countryRepository.findAll();
        if (countries.isEmpty()) {
            return null;
        }
        Random random = new Random();
        return countries.get(random.nextInt(countries.size()));
    }
}
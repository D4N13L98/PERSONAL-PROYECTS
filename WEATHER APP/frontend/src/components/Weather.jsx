import React, { useState, useEffect } from "react";
import * as CiIcons from "react-icons/ci";
import citylist from "../files/city.list.json";
import styled from "styled-components";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  }
`;

const Row = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const SearchContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0;
  background-color: #d65655;
  box-shadow: inset -20px 0 30px -10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: auto;
  width: clamp(350px, 80%, 600px);
`;

const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 17vw;
  object-fit: contain;

  @media (min-width: 992px) {
    width: 7rem;
  }
`;

const SearchInputBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  gap: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  margin: 15px 0px;
  font-size: 1rem;
  border: none;
  outline: none;
  text-align: left;
  width: 85%;
  background-color: transparent;
  border-bottom: 1.5px solid white;
  color: white;
  font-weight: 400;

  &:hover {
    cursor: pointer;
  }

  &::placeholder {
    color: #eee;
  }
`;

const SearchButton = styled(Link)`
  font-size: 35px;
  overflow: hidden;
`;

const CityListBox = styled.div`
  flex-direction: column;
  width: 90%;
  max-height: 350px;
  padding: 6px;
  margin-bottom: 25px;
  gap: 10px;
  overflow: auto;
`;

const ListItemBox = styled.div`
  width: 90%;
  padding: 5px 10px;
  font-weight: 700;

  &:hover {
    background-color: #ffffff25;
    cursor: pointer;
  }
`;

const Text = styled.p`
  color: #090909;
  text-align: left;
  font-weight: 400;

  &.AppName {
    font-weight: 600;
    font-size: 5vw;
    color: white;
    margin: 0;

    @media (min-width: 992px) {
      font-size: 2rem;
    }
  }

  &.Ads {
    font-size: 1rem;
    text-align: center;
    margin: auto;
    color: white;
  }

  &.Cities {
    font-size: 1.1rem;
    padding-left: 10px;
    margin: auto;
    color: white;
    font-weight: 200;
  }

  &.Title {
    font-size: 1rem;
    font-weight: bold;
  }

  &.Description {
    font-size: 1rem;
  }

  &.MainCity {
    font-size: 6.2vw;
    line-height: 5.2vw;
    font-weight: 600;

    @media (max-width: 990px) {
      font-size: 10vw;
      line-height: 8vw;
    }
  }

  &.Now {
    margin: 0;
    color: #d65655;
    font-weight: 600;
  }

  &.CurrentTemp {
    font-size: 4rem;
    font-weight: 600;
    margin: 0;
  }

  &.Temps {
    font-size: 3rem;
    font-weight: 300;
    margin: 0;
  }

  &.WeatherState {
    color: #d65655;
    text-transform: uppercase;
    margin: 0;
    align-text: left;
    width: 100%;
  }

  &.Units {
    padding-left: 5px;
    font-size: 1rem;
  }
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const DataPaginationBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 80%;
  margin: auto;

  @media (max-width: 991px) {
    height: auto;
    margin: 50px auto;
  }
`;

const GalleryBox = styled.div`
  white-space: nowrap;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  display: flex;
`;

const DataBoxIntern1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const DataBox = styled.div`
  width: 100%;
  min-width: 100%;
  box-sizing: border-box;
  padding: 10px;
  display: inline-block;
  align-items: center;
  height: 100%;
`;

const CityDataBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: auto;
  margin-bottom: 30px;
  width: 100%;

  &.isLoading {
    background: #eee;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    border-radius: 10px;
    background-size: 200% 100%;
    animation: 1.5s shine linear infinite;
    height: 20vh;
    margin-bottom: 2vh;

    @keyframes shine {
      to {
        background-position-x: -200%;
      }
    }
  }
`;

const LocationBox = styled.div`
  display: flex;
  gap: 5px;

  &.DayContainer {
    justify-content: space-between;
  }
`;

const WeatherImg = styled.img``;

const CurrentTemperatureBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Div = styled.div`
  &.Now {
    width: 100%;
    height: 4vh;
    margin-bottom: 2vh;
  }

  &.CurrentTemp {
    height: 11vh;
  }

  &.isLoading {
    background: #eee;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    border-radius: 10px;
    background-size: 200% 100%;
    animation: 1.5s shine linear infinite;

    @keyframes shine {
      to {
        background-position-x: -200%;
      }
    }
  }
`;

const CurrentTemperature = styled.div`
  display: grid;
  place-content: center;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  &.isLoading {
    margin-bottom: 2vh;
  }
`;

const CurrentWeatherState = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DayTemperatureBox = styled.div`
  display: grid;
  place-content: center;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  margin-bottom: 2hv;
`;

const MoreWeatherData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  &.isLoading {
    background: #eee;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    border-radius: 10px;
    background-size: 200% 100%;
    animation: 1.5s shine linear infinite;
    height: 9vh;

    @keyframes shine {
      to {
        background-position-x: -200%;
      }
    }
  }
`;

const MoreWeatherDataBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
`;

const PagesBox = styled.div`
  widht: 100%;
  height: 50px;
`;

const Weather = () => {
  const [filteredCities, setFilteredCities] = useState([]);
  // eslint-disable-next-line
  const [fullInformationWeather, setFullInformationWeather] = useState([]);
  const [citiesAndCountries, setCitiesAndCounties] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [date, setDate] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [scrollAmount, setScrollAmount] = useState(0);
  const [lastUpdate, setLastUpdate] = useState("");

  // Get Location
  const GetLocation = () => {
    const currentDate = new Date();

    const FormatDateOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    const DateFormate = new Intl.DateTimeFormat("en-US", FormatDateOptions);
    const FormatedDate = DateFormate.format(currentDate);

    setDate(FormatedDate);
  };

  // Get Country info
  useEffect(() => {
    if (filteredCities.length > 0) {
      const fetchGetCity = async () => {
        const promises = filteredCities.map(async (city) => {
          const countryResponse = await fetch(
            `https://restcountries.com/v3.1/alpha/${city.country.toLowerCase()}`
          );
          const dataCountryResponse = await countryResponse.json();
          return {
            id: city.id,
            name: city.name,
            coord: city.coord,
            details: dataCountryResponse,
          };
        });

        const cityDetailsData = await Promise.all(promises);
        setCitiesAndCounties(cityDetailsData);
      };

      fetchGetCity();
    }
    GetLocation();
    // eslint-disable-next-line
  }, [filteredCities]);

  // Get filtered weather data
  useEffect(() => {
    if (selectedCity !== "") {
      weatherDataSearch();
    }
    // eslint-disable-next-line
  }, [selectedCity]);

  //Select city to get its data
  const manejarClic = (cityName) => {
    setSelectedCity(cityName);

    const fetchGetAllInfo = async () => {
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${cityName.coord.lat}&lon=${cityName.coord.lon}&cnt=5&units=metric&appid=ef96c6e414b75428db82e9b418420794`
      );
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName.name}&units=metric&appid=ef96c6e414b75428db82e9b418420794`
      );
      const dataWeatherResponse = await weatherResponse.json();
      const dataForecastResponse = await forecastResponse.json();
      setFullInformationWeather(dataForecastResponse);
      setWeatherData(dataWeatherResponse);
    };

    fetchGetAllInfo();
  };

  //Filter list by input text
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);

    if (inputValue.length >= 3) {
      const filtered = citylist.cities.filter((city) =>
        city.name.includes(inputValue)
      );
      setFilteredCities(filtered);
    } else {
      setFilteredCities([]);
    }
  };

  //Get data from city selected
  const weatherDataSearch = async () => {
    const weatherFetch = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${selectedCity.name},${selectedCity.country}&units=metric&APPID=ef96c6e414b75428db82e9b418420794`
    );
    const weatherCity = await weatherFetch.json();
    setWeatherData(weatherCity);
    UnixToLocal(weatherData.dt);
  };

  const handleScroll = (e) => {
    // Ajustar el desplazamiento horizontal en función del evento de desplazamiento
    setScrollAmount(scrollAmount + e.deltaY);
  };

  const UnixToLocal = (dateUnix) => {
    const date = new Date(dateUnix * 1000);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const cadenaFecha = `${year}-${month < 10 ? "0" : ""}${month}-${
      day < 10 ? "0" : ""
    }${day} ${hours}:${minutes}:${seconds}`;

    const fechaHora = new Date(cadenaFecha);
    const horas = fechaHora.getHours();
    const minutos = fechaHora.getMinutes();

    const horaFormateada = `${horas < 10 ? "0" : ""}${horas}:${
      minutos < 10 ? "0" : ""
    }${minutos}`;

    setLastUpdate(horaFormateada);
  };

  return (
    <IconContext.Provider value={{ color: "#FFFFFF" }}>
      <Container>
        <Row className="row">
          <SearchContainer className="col-xxl-4 col-lg-5 col-12">
            <SearchBox>
              <LogoBox>
                <LogoImage
                  src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
                  alt="Logo_img"
                />
                <Text className="AppName">Weather App</Text>
              </LogoBox>
              <SearchInputBox>
                <SearchInput
                  type="text"
                  placeholder="Type a city or town..."
                  value={searchTerm}
                  onChange={handleInputChange}
                />
                <SearchButton>
                  <CiIcons.CiSearch />
                </SearchButton>
              </SearchInputBox>
              {filteredCities.length > 0 ? (
                <CityListBox>
                  {citiesAndCountries.map((city) => (
                    <ListItemBox
                      key={city.id}
                      onClick={() => manejarClic(city)}
                    >
                      <Text key={city.id} className="Cities">
                        <b>{city.name}</b>
                        {", " + city.details[0].name.common}
                      </Text>
                    </ListItemBox>
                  ))}
                </CityListBox>
              ) : searchTerm.length < 3 ? (
                <CityListBox>
                  <Text className="Ads">
                    Enter at least 3 characters for the search.
                  </Text>
                </CityListBox>
              ) : (
                <CityListBox>
                  <Text className="Ads">
                    Location "{searchTerm}" does not exist
                  </Text>
                </CityListBox>
              )}
            </SearchBox>
          </SearchContainer>
          <DataContainer className="col-xxl-8 col-lg-7 col-12">
            <DataPaginationBox>
              {weatherData && (
                <DataBox>
                  <CityDataBox>
                    <Text className="MainCity">{selectedCity.name}</Text>
                    <LocationBox className="DayContainer">
                      <LocationBox>
                        <Text className="Title">LAT</Text>
                        <Text className="Description">
                          {weatherData.coord.lon}
                        </Text>
                      </LocationBox>
                      <Text className="Description">{date}</Text>
                    </LocationBox>
                    <LocationBox>
                      <Text className="Title">LON</Text>
                      <Text className="Description">
                        {weatherData.coord.lat}
                      </Text>
                    </LocationBox>
                  </CityDataBox>
                  <GalleryBox onWheel={handleScroll}>
                    <DataBoxIntern1>
                      <CurrentTemperatureBox>
                        <Text className="Now">NOW</Text>
                        <CurrentTemperature>
                          <Text className="CurrentTemp">
                            {weatherData.main.temp + "°"}
                          </Text>
                          <CurrentWeatherState>
                            <WeatherImg
                              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                              alt="weather_icon"
                            />
                            <Text className="WeatherState">
                              {weatherData.weather[0].description}
                            </Text>
                          </CurrentWeatherState>
                        </CurrentTemperature>
                      </CurrentTemperatureBox>
                      <DayTemperatureBox>
                        <MoreWeatherData>
                          <Text className="WeatherState">LASTEST UPDATE</Text>
                          <MoreWeatherDataBox>
                            <Text className="Temps">{lastUpdate}</Text>
                          </MoreWeatherDataBox>
                        </MoreWeatherData>
                        <MoreWeatherData>
                          <Text className="WeatherState">CLOUDS</Text>
                          <MoreWeatherDataBox>
                            {weatherData.clouds.all && (
                              <>
                                <Text className="Temps">
                                  {weatherData.clouds.all}
                                </Text>
                                <Text className="Units">%</Text>
                              </>
                            )}
                            {!weatherData.clouds.all && (
                              <>
                                <Text className="Temps">None</Text>
                              </>
                            )}
                          </MoreWeatherDataBox>
                        </MoreWeatherData>
                        <MoreWeatherData>
                          <Text className="WeatherState">HUMIDITY</Text>
                          <MoreWeatherDataBox>
                            {weatherData.main.humidity && (
                              <>
                                <Text className="Temps">
                                  {weatherData.main.humidity}
                                </Text>
                                <Text className="Units">%</Text>
                              </>
                            )}
                            {!weatherData.main.humidity && (
                              <>
                                <Text className="Temps">None</Text>
                              </>
                            )}
                          </MoreWeatherDataBox>
                        </MoreWeatherData>
                        <MoreWeatherData>
                          <Text className="WeatherState">PRESSURE</Text>
                          <MoreWeatherDataBox>
                            {weatherData.main.pressure && (
                              <>
                                <Text className="Temps">
                                  {weatherData.main.pressure}
                                </Text>
                                <Text className="Units">hPa</Text>
                              </>
                            )}
                            {!weatherData.main.pressure && (
                              <>
                                <Text className="Temps">None</Text>
                              </>
                            )}
                          </MoreWeatherDataBox>
                        </MoreWeatherData>
                        <MoreWeatherData>
                          <Text className="WeatherState">GROUND LEVEL</Text>
                          <MoreWeatherDataBox>
                            {weatherData.main.grnd_level && (
                              <>
                                <Text className="Temps">
                                  {weatherData.main.grnd_level}
                                </Text>
                                <Text className="Units">hPa</Text>
                              </>
                            )}
                            {!weatherData.main.grnd_level && (
                              <>
                                <Text className="Temps">None</Text>
                              </>
                            )}
                          </MoreWeatherDataBox>
                        </MoreWeatherData>
                        <MoreWeatherData>
                          <Text className="WeatherState">WIND DEGREES</Text>
                          <MoreWeatherDataBox>
                            {weatherData.wind.deg && (
                              <>
                                <Text className="Temps">
                                  {weatherData.wind.deg}°
                                </Text>
                              </>
                            )}
                            {!weatherData.wind.deg && (
                              <>
                                <Text className="Temps">None</Text>
                              </>
                            )}
                          </MoreWeatherDataBox>
                        </MoreWeatherData>
                        <MoreWeatherData>
                          <Text className="WeatherState">WIND SPEED</Text>
                          <MoreWeatherDataBox>
                          {weatherData.wind.speed && (
                              <>
                                <Text className="Temps">
                                  {weatherData.wind.speed}
                                </Text>
                                <Text className="Units">m/sec</Text>
                              </>
                            )}
                            {!weatherData.wind.speed && (
                              <>
                                <Text className="Temps">None</Text>
                              </>
                            )}
                          </MoreWeatherDataBox>
                        </MoreWeatherData>
                        <MoreWeatherData>
                          <Text className="WeatherState">WIND GUST</Text>
                          <MoreWeatherDataBox>
                          {weatherData.wind.gust && (
                              <>
                                <Text className="Temps">
                                  {weatherData.wind.gust}
                                </Text>
                                <Text className="Units">m/sec</Text>
                              </>
                            )}
                            {!weatherData.wind.gust && (
                              <>
                                <Text className="Temps">None</Text>
                              </>
                            )}
                          </MoreWeatherDataBox>
                        </MoreWeatherData>
                      </DayTemperatureBox>
                    </DataBoxIntern1>
                    <PagesBox></PagesBox>
                  </GalleryBox>
                </DataBox>
              )}
              {!weatherData && (
                <DataBox>
                  <CityDataBox className="isLoading"></CityDataBox>
                  <GalleryBox>
                    <DataBoxIntern1>
                      <CurrentTemperatureBox>
                        <Div className="isLoading Now"></Div>
                        <CurrentTemperature className="isLoading">
                          <Div className="isLoading CurrentTemp"></Div>
                          <Div className="isLoading CurrentTemp"></Div>
                        </CurrentTemperature>
                      </CurrentTemperatureBox>
                      <DayTemperatureBox className="isLoading">
                        <MoreWeatherData className="isLoading">
                          <MoreWeatherDataBox></MoreWeatherDataBox>
                        </MoreWeatherData>
                        <MoreWeatherData className="isLoading">
                          <MoreWeatherDataBox></MoreWeatherDataBox>
                        </MoreWeatherData>
                        <MoreWeatherData className="isLoading">
                          <MoreWeatherDataBox></MoreWeatherDataBox>
                        </MoreWeatherData>
                        <MoreWeatherData className="isLoading">
                          <MoreWeatherDataBox></MoreWeatherDataBox>
                        </MoreWeatherData>
                        <MoreWeatherData className="isLoading">
                          <MoreWeatherDataBox></MoreWeatherDataBox>
                        </MoreWeatherData>
                        <MoreWeatherData className="isLoading">
                          <MoreWeatherDataBox></MoreWeatherDataBox>
                        </MoreWeatherData>
                        <MoreWeatherData className="isLoading">
                          <MoreWeatherDataBox></MoreWeatherDataBox>
                        </MoreWeatherData>
                        <MoreWeatherData className="isLoading">
                          <MoreWeatherDataBox></MoreWeatherDataBox>
                        </MoreWeatherData>
                      </DayTemperatureBox>
                      <PagesBox></PagesBox>
                    </DataBoxIntern1>
                  </GalleryBox>
                </DataBox>
              )}
            </DataPaginationBox>
          </DataContainer>
        </Row>
      </Container>
    </IconContext.Provider>
  );
};

export default Weather;

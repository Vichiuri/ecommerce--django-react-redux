# from datapackage import Package
import json

# package = Package('https://datahub.io/core/world-cities/datapackage.json')

# print list of all resources:
# print(package.resource_names)

# print processed tabular data (if exists any)
from distributor.models import WorldCountry, WorldCity

i = 0
country_file = open("data_json.json")
city_file = open("world-cities_json.json")
countries = json.loads(country_file.read())
cities = json.loads(city_file.read())
country_list = list()
city_list = list()
for country in countries:
    code = country['code']
    name = country['name']
    country_ = WorldCountry()
    country_.code = code
    country_.name = name
    country_list.append(country_)
for city in cities:
    name = city['name']
    country_name = city['country']
    city_ = WorldCity()
    city_.city_name = name
    city_.country_name = country_name
    city_list.append(city_)


# print(country_list)
# print(city_list)


def save_cities():
    tobe_saved_cities = dict()
    for country_ in country_list:
        country = country_
        country_check = WorldCountry.objects.filter(code=country.code).first()
        if country_check is None:
            country.save()
        else:
            country = country_check
        cities = list()
        for city in city_list:
            if city.country_name.lower() in country.name.lower() or city.country_name.lower() == country.name.lower():
                cities.append(city)
                city_list.remove(city)
                print(len(city_list))
        tobe_saved_cities[country.id] = cities
        print(country)

    # print(tobe_saved_cities)
    print(city_list)
    # return "We stop Here"
    for country_id, cities in tobe_saved_cities.items():
        country = WorldCountry.objects.get(id=country_id)
        for city in cities:
            city_check = WorldCity.objects.filter(country_name__contains=country.name, city_name=city.city_name).first()
            if city_check is None:
                city.save()
                country.cities.add(city)
            else:
                country.cities.add(city_check)

            country.save()
            print("Saved Data", country, city, )

    return "Well Done With Saving Cities And Countries"

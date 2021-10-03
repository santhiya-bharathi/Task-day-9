
const getBlogs = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType = "json";
    xhr.onload = () => {
        console.log(xhr.response);
        const blogs = xhr.response;
    //a. Get all the countries from Asia continent /region using Filter function
     console.log(blogs.filter((blog) => blog.region === "Asia")
                       .map((blog) => blog.name));

    //b. Get all the countries with a population of less than 2 lakhs using Filter function
    console.log(blogs.filter((blog)=> blog.population < 200000 )
                       .map((blog) => blog.name));

    //c. Print the following details name, capital, flag using forEach function
    blogs.forEach(restCountries);
     function restCountries(item) {
      console.log("name: "+item.name +"," +"capital: "+ item.capital + "," + "flag:" +item.flag);
        }
    //d. Print the total population of countries using reduce function
    console.log(blogs.reduce((sum,curr)=> sum + curr.population,0));

    //e. Print the country which uses US Dollars as currency.
    console.log(blogs.filter((blog) => blog.currencies[0]["name"] === "United States dollar")
                      .map((blog) => blog.name));
    
   
    };
        xhr.send();
    
};
getBlogs();
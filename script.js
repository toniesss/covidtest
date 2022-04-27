let new_cases = document.getElementById('new_case');
let new_death = document.getElementById('new_case');
let total_death = document.getElementById('total_death');
let total_recovered = document.getElementById('total_recovered');
let total_cases = document.getElementById('total_cases');
let table = document.getElementById('countries_stat');

// fetcing the World Data
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'coronavirus-monitor.p.rapidapi.com',
		'X-RapidAPI-Key': '07a70d52abmsh3cdada103d07e50p169dfcjsn5d26582427ab'
	}
};

fetch('https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php', options)
	.then(response => response.json().than(data => {
	     console.log(data);
         total_cases.innerHTML = data.total_cases;
         new_cases.innerHTML = data.new_cases;
         new_death.innerHTML = data.new_death;
         total_Recovered.innerHTML = data.total_Recovered;
         total_Death.innerHTML = data.total_Death;
    }))
	.catch(err => {
        console.error(err);
    });

// fetching the case by country data
const optionss = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'coronavirus-monitor.p.rapidapi.com',
		'X-RapidAPI-Key': '07a70d52abmsh3cdada103d07e50p169dfcjsn5d26582427ab'
	}
};

fetch('https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php', optionss)
	.then(response => response.json().than(data => {
	     console.log(data);
         let countries_stat = data.countries_stat;
         console.log(countries_stat)
         for(let i = 0; i < countries_stat.length; i++){
             console.log(countries_stat[i]);
             let row = table.insertRow(i+1);
             let Country_name = row.insertCell(0);
             let Death = row.insertCell(1);
             let Cases = row.insertCell(2);
             let Serious_critical = row.insertCell(3);
             let Recovered_par_country = row.insertCell(4);
             Country_name.innerHTML = countries_stat[i].Country_name;
             Cases.innerHTML =countries_stat[i].Cases;
             Death.innerHTML = countries_stat[i].Death;
             Serious_critical.innerHTML = countries_stat[i].Serious_critical;
             Recovered_par_country.innerHTML = countries_stat[i].total_Recovered;

         }
    }))
	.catch(err => {
        console.error(err);
    });
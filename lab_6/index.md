# Lab 6
### Comparing Change in Native and Foreign-Born Population in Baltimore, MD
The Directory includes 
- A data folder with 2019 estimated nativity data from the US census in the form of a geojson with geometry and attribute data; a csv file contatining attribute data for 2015 to append to the 2019 data; and the R code used to obtain the data.
- An images folder with the resulting choropleth map showing change in foreign-born population, and the bivariate choropleth map comparing estimated change in foreign born population to estimated change in native popuation.
- An index file with markdown for this page.

## Introduction
For this lab, I focused on creating a map that will show estimated change in population in Baltimore, MD between 2015-2019. Data will compare estimated change in native population to estimated change in foreign-born population. Comparison will be made in the form of a bivariate choropleth map showing the two variables on one map of Baltimore.

## Data
Data was collected from the US census bureau using tidycensus. 
Data collected includes
- Estimated nativity data for 2019 with Geometry for Baltimore, Maryland
- Estimated attribute data for nativitity for Baltimore, Maryland in 2015

The R code processed through RStudio is as follows

<img src="images/r_code.png?raw=true"/>

## Processing and Transformations
Three transformations were required in this process.
- Changing CRS of geometry to the QGIS standard EPSG: 3857 for Web Mercator
- Joining attribute data for 2015 data to the geometry for 2019 data, joining via the name collumn for census tracts
- Clipping the vector data to only Baltimore city, from the original download of Baltimore County and City

## Analysis
Analysis was done using QGIS in the following steps
1. Subtracted estimated native population of 2015 from 2019 data to find change in estimated native population
2. Repeate steps for foureign-born population
3. Divide total estimated change by 2015 estimates to find percent change for native and foreign born population. 
4. Gerate a bivariate choropleth displying comparison in change for both sets of population.

## Results
The results include the following maps.

A univariate choropleth map showing estimated change for only the foregin-born population

<img src="images/foreign.png?raw=true"/>

A bivartiate choropleth map showing change in both sets of popuatlion.

<img src="images/bivariate4.jpeg?raw=true"/>

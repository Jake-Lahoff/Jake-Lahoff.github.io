# Lab 8
### Constructing bivariate maps in R and Qgis
The Directory includes 
- An image folder with PDF's of my bivariate map showing the percentage of population that is non-hispanic white in census tacts compared to anual household income of non-hispaic white homeowners in Anne Arundel county Maryland.
- A code folder contaning the knitted R code for this lab
- An index file with markdown for this page.

## Introduction
For this lab, the goal was to obtain data from tidy census to create bivariate maps for Baltimore city and a county of my chosing (Anne Arundel County). The variables examined were percentage of population in census tracts that is non-hispanic white, and average anual household income of non-hispanic white homeowners in census tracts. 
This data was then displayed in R, Qgis and A web map.

## Data
Data was collected from the US census bureau using tidycensus. 
Data collected includes
- Estimated non-hispanic white population data for 2019 with Geometry for Baltimore city, and Anne Arundel County, Maryland.
- Estimated non-hispanic white income data for 2019 with Geometry for Baltimore city, and Anne Arundel County, Maryland.

The R code processed through RStudio can be found here

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


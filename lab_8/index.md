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

https://github.com/Jake-Lahoff/Jake-Lahoff.github.io/tree/master/lab_8/code

## Processing and Transformations
One transformation was required for this lab
- Changing CRS of geometry to the QGIS standard EPSG: 3857 for Web Mercator

## Analysis
Analysis was done using QGIS in the following steps
1. Calculate percent white population by dividing white population by total population
2. Use use the biclass tool to create a category for the bivariate scale of population and income
3. Use the legend tool to generate an appropriate legend from the data
4. Gerate a bivariate choropleth displying population and income.

## Results
The results include the following maps.

A bivariate choropleth map showing the percentage of population that is non-hispanic white in census tacts compared to anual household income of non-hispaic white homeowners in Anne Arundel county Maryland.

<img src="images/foreign.png?raw=true"/>

The associated web map

<img src="images/bivariate4.jpeg?raw=true"/>

